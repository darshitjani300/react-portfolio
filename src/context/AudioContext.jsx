import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const AudioContext = createContext(null);

export const useAudio = () => useContext(AudioContext);

const TARGET_VOLUME = 0.15;
const FADE_MS = 1200;

const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const fadeGuardRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Ease the track in instead of dropping the visitor straight into it.
  const fadeIn = useCallback((audio) => {
    audio.volume = 0;
    const started = performance.now();

    const step = (now) => {
      const progress = Math.min((now - started) / FADE_MS, 1);
      audio.volume = TARGET_VOLUME * progress;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);

    // requestAnimationFrame is paused in background and throttled tabs, which
    // would strand the volume at 0 and play the track silently. Timers still
    // fire there, so guarantee the target level either way.
    clearTimeout(fadeGuardRef.current);
    fadeGuardRef.current = setTimeout(() => {
      if (!audio.paused) audio.volume = TARGET_VOLUME;
    }, FADE_MS + 200);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = TARGET_VOLUME;
    audio.muted = true;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    let mutedByChoice = false;
    try {
      mutedByChoice = window.localStorage.getItem("sound") === "off";
    } catch {
      /* ignore */
    }

    // Browsers block autoplay until the visitor interacts with the page.
    const unlock = () => {
      if (mutedByChoice) return;
      audio.muted = false;
      audio
        .play()
        .then(() => fadeIn(audio))
        .catch(() => {
          /* still blocked — the sound button is the fallback */
        });
    };

    const events = ["pointerdown", "keydown", "touchstart", "wheel"];
    events.forEach((event) =>
      window.addEventListener(event, unlock, { once: true, passive: true })
    );

    return () => {
      events.forEach((event) => window.removeEventListener(event, unlock));
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      clearTimeout(fadeGuardRef.current);
    };
  }, [fadeIn]);

  const toggleSound = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      audio
        .play()
        .then(() => fadeIn(audio))
        .catch(() => {
          /* ignore */
        });
      try {
        window.localStorage.setItem("sound", "on");
      } catch {
        /* ignore */
      }
    } else {
      audio.pause();
      try {
        window.localStorage.setItem("sound", "off");
      } catch {
        /* ignore */
      }
    }
  }, [fadeIn]);

  return (
    <AudioContext.Provider value={{ playing, toggleSound }}>
      {children}
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" />
    </AudioContext.Provider>
  );
};

export default AudioProvider;
