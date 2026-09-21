/**
 * Regenerates the responsive AVIF / WebP / fallback variants in public/img
 * from the full-size originals in assets/sources.
 *
 * The originals live outside public/ on purpose: nothing on the page links to
 * them, so sitting in public/ only meant ~1.8 MB of PNGs being uploaded on
 * every deploy and never downloaded by anyone. They are still the source of
 * truth — replace one here and re-run.
 *
 * Run with `npm run images` after adding or replacing a source image, and
 * commit the result: the output is checked in, so the deploy needs none of
 * these binaries — only a machine that regenerates them does.
 *
 * Requires: ffmpeg, avifenc, cwebp  (brew install ffmpeg libavif webp)
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const SRC = path.resolve("assets/sources");
const OUT = path.resolve("public/img");

/**
 * Each entry mirrors how the image is actually laid out on the page, so we
 * never ship pixels the browser would crop away or downscale.
 *   aspect  — the CSS aspect-ratio the <img> is locked to
 *   anchor  — matches the object-position used in the markup
 *   widths  — 1x and 2x of the largest box the image is drawn in
 */
const SOURCES = [
  // Hero portrait: aspect-[4/5] object-center, max 340px (sm) / 370px (lg).
  { src: "photo.jpg", name: "photo", aspect: 4 / 5, anchor: "center", widths: [400, 600, 760], fallback: "jpg" },
  // Project shots: aspect-[16/10] object-top, ~700px column at 1x.
  ...["ebook", "pingxo", "car-rental", "gym-ecom"].map((name) => ({
    src: `${name}.png`,
    name,
    aspect: 16 / 10,
    anchor: "top",
    // 700 = the ~708px desktop column at 1x, 1400 = the same at 2x, 1000 =
    // what a 2.6x phone actually needs. Without the middle tier a phone
    // downloads the full 1400 for a ~950px box.
    widths: [700, 1000, 1400],
    fallback: "jpg",
  })),
];

const run = (cmd, args) => execFileSync(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });

const probe = (file) => {
  const out = run("ffprobe", [
    "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height,pix_fmt",
    "-of", "csv=p=0:s=x", file,
  ]).toString().trim();
  const [w, h, pixFmt] = out.split("x");
  return { w: Number(w), h: Number(h), pixFmt };
};

/** Crop box that turns a WxH source into `aspect`, honouring object-position. */
const cropBox = ({ w, h }, aspect, anchor) => {
  if (w / h > aspect) {
    const cw = Math.round(h * aspect);
    return { cw, ch: h, x: Math.round((w - cw) / 2), y: 0 };
  }
  const ch = Math.round(w / aspect);
  return { cw: w, ch, x: 0, y: anchor === "top" ? 0 : Math.round((h - ch) / 2) };
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const rows = [];
for (const { src, name, aspect, anchor, widths, fallback } of SOURCES) {
  const input = path.join(SRC, src);
  if (!fs.existsSync(input)) throw new Error(`missing source: ${input}`);

  const dims = probe(input);
  const { cw, ch, x, y } = cropBox(dims, aspect, anchor);
  const before = fs.statSync(input).size;

  /**
   * Some of the screenshots were saved as 8-bit palette PNGs, so their
   * gradients are dithered. AVIF and WebP treat that dot pattern as detail
   * worth preserving and blow up: car-rental at 1400px encoded to 298 KB
   * untouched and 36 KB once the dither is smoothed away — and it looks
   * better, because the dither was never meant to survive a resize.
   */
  const denoise = dims.pixFmt.startsWith("pal") ? "hqdn3d=4:3:6:4.5," : "";

  for (const width of widths) {
    const height = Math.round(width / aspect);
    const stem = path.join(OUT, `${name}-${width}`);
    const png = `${stem}.tmp.png`;

    run("ffmpeg", [
      "-y", "-loglevel", "error", "-i", input,
      "-vf", `crop=${cw}:${ch}:${x}:${y},${denoise}scale=${width}:${height}:flags=lanczos`,
      "-frames:v", "1", png,
    ]);

    run("avifenc", ["-s", "4", "-q", "58", "--jobs", "all", png, `${stem}.avif`]);
    run("cwebp", ["-quiet", "-q", "78", "-m", "6", png, "-o", `${stem}.webp`]);
    if (fallback === "jpg") {
      run("ffmpeg", ["-y", "-loglevel", "error", "-i", png, "-q:v", "6", `${stem}.jpg`]);
    }
    fs.rmSync(png);

    rows.push({
      file: `${name}-${width}`,
      avif: fs.statSync(`${stem}.avif`).size,
      webp: fs.statSync(`${stem}.webp`).size,
      jpg: fs.statSync(`${stem}.jpg`).size,
    });
  }
  rows.push({ file: `  ^ source ${src}`, avif: before, webp: 0, jpg: 0 });
}

const kb = (n) => (n ? `${(n / 1024).toFixed(0)} KB` : "—");
console.log("\nfile                     avif       webp       jpg");
for (const r of rows)
  console.log(r.file.padEnd(24), kb(r.avif).padStart(8), kb(r.webp).padStart(10), kb(r.jpg).padStart(10));
