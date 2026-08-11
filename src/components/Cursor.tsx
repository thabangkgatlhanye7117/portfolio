import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Trail = {
  x: number;
  y: number;
  id: number;
};

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [trail, setTrail] = useState<Trail[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches;

    setIsTouchDevice(isTouch);

    // Don't create cursor listeners on touch devices
    if (isTouch) return;

    const moveCursor = (event: MouseEvent) => {
      const newPosition = {
        x: event.clientX,
        y: event.clientY,
      };

      setPosition(newPosition);

      setTrail((prev) => [
        ...prev.slice(-10),
        {
          ...newPosition,
          id: Date.now() + Math.random(),
        },
      ]);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Remove custom cursor completely on mobile/touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((point) => (
        <motion.div
          key={point.id}
          className="
            fixed
            h-2
            w-2
            rounded-full
            bg-blue-400
            pointer-events-none
            z-[99998]
          "
          initial={{
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          style={{
            left: point.x,
            top: point.y,
          }}
        />
      ))}

      {/* Main Cursor */}
      <motion.div
        className="
          fixed
          h-5
          w-5
          rounded-full
          bg-blue-500
          pointer-events-none
          z-[99999]
          shadow-[0_0_25px_#3b82f6]
          -translate-x-1/2
          -translate-y-1/2
        "
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 35,
        }}
      />
    </>
  );
}