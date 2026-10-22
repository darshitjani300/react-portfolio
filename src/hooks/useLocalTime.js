import { useEffect, useState } from "react";

const format = (timezone) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  }).format(new Date());

/** Live clock for a given timezone, updated every 30 seconds. */
export default function useLocalTime(timezone) {
  const [time, setTime] = useState(() => format(timezone));

  useEffect(() => {
    const tick = () => setTime(format(timezone));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timezone]);

  return time;
}
