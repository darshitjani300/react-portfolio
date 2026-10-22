import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Nudges its child toward the cursor while the pointer is over it. */
export default function Magnetic({ children, className = "", strength = 0.3 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMove = (event) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (event.clientX - (rect.left + rect.width / 2)) * strength,
      y: (event.clientY - (rect.top + rect.height / 2)) * strength,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
