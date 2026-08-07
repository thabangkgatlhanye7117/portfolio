import type { Node } from "./types";

type Props = {
  nodes: Node[];
};

const DISTANCE = 180;

export default function Connections({ nodes }: Props) {
  return (
    <svg className="absolute inset-0 w-full h-full">
      {nodes.map((a) =>
        nodes.map((b) => {
          if (a.id >= b.id) return null;

          const distance = Math.hypot(
            a.x - b.x,
            a.y - b.y
          );

          if (distance > DISTANCE) return null;

          return (
            <line
              key={`${a.id}-${b.id}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="rgb(59 130 246)"
              strokeOpacity={0.08}
              strokeWidth={1}
            />
          );
        })
      )}
    </svg>
  );
}