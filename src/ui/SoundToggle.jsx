import { motion, useReducedMotion } from "framer-motion";
import { useAudio } from "../context/AudioContext";

const BARS = [0.45, 1, 0.65, 0.9];

/** Equalizer button that starts / stops the background track. */
export default function SoundToggle({ className = "" }) {
  const { playing, toggleSound } = useAudio();
  const reduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-pressed={playing}
      aria-label={playing ? "Mute background music" : "Play background music"}
      title={playing ? "Mute music" : "Play music"}
      className={`group flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg transition-colors duration-300 hover:border-line-strong hover:bg-accent-soft ${className}`}
    >
      <span className="flex h-4 items-end gap-[3px]">
        {BARS.map((scale, index) => (
          <motion.span
            key={index}
            className="w-[2px] rounded-full bg-current"
            style={{ transformOrigin: "bottom" }}
            initial={false}
            animate={
              playing && !reduceMotion
                ? { height: ["25%", `${scale * 100}%`, "35%"] }
                : { height: playing ? `${scale * 70}%` : "25%" }
            }
            transition={
              playing && !reduceMotion
                ? {
                    duration: 0.75 + index * 0.18,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }
                : { duration: 0.3 }
            }
          />
        ))}
      </span>
    </button>
  );
}
