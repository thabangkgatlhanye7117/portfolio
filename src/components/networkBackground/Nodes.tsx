import { motion } from "framer-motion";
import type { Node } from "./types";

type Props = {
  nodes: Node[];
};

export default function Nodes({ nodes }: Props) {
  return (
    <>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full bg-blue-500"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            boxShadow: "0 0 10px rgba(59,130,246,.5)",
          }}
          animate={{
            y: [0, -6, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}