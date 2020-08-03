import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const style = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    transform: "Scale(1)",
    from: { transform: "scale(0)" },
    config: {
      tension: 350,
      friction: 10,
    },
  });
  return <animated.div style={style}> {children}</animated.div>;
};

export default ScaleIn;
