import React, { useEffect } from "react";

const BackgroundMusic = () => {
  const musicRef = React.useRef(null);

  useEffect(() => {
    const music = musicRef.current;
    music.volume = 0.2;
    music.muted = true;

    const unLockMusic = () => {
      music.muted = false;
      music.play().catch((error) => console.log(error));
    };

    window.addEventListener("click", unLockMusic, { once: true });
    window.addEventListener("keydown", unLockMusic, { once: true });
    window.addEventListener("pointerdown", unLockMusic, { once: true });
    window.addEventListener("touchstart", unLockMusic, { once: true });

    return () => {
      window.removeEventListener("click", unLockMusic);
      window.removeEventListener("keydown", unLockMusic);
      window.removeEventListener("pointerdown", unLockMusic);
      window.removeEventListener("touchstart", unLockMusic);
    };
  }, []);

  return <audio src="song.mp3" loop ref={musicRef}></audio>;
};

export default BackgroundMusic;
