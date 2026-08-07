import { useEffect, useMemo, useState } from "react";
import Connections from "./Connections";
import Nodes from "./Nodes";
import { generateNodes, getNodeCount } from "./utils";

export default function NetworkBackground() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const nodes = useMemo(() => {
    return generateNodes(
      size.width,
      size.height,
      getNodeCount(size.width)
    );
  }, [size]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <Connections nodes={nodes} />
      <Nodes nodes={nodes} />
    </div>
  );
}