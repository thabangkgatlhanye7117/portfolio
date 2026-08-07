import type { Node } from "./types";

export function generateNodes(
  width: number,
  height: number,
  count: number
): Node[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 3,
  }));
}

export function getNodeCount(width: number) {
  if (width < 768) return 14;
  if (width < 1024) return 24;
  return 40;
}