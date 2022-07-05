import { motion, useMotionValue } from "framer-motion";
import styled from "styled-components";
import useMeasure from "react-use-measure";
import { useState } from "react";

function App() {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <>
      <Button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
      >
        <Label variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}>
          play
        </Label>
      </Button>
    </>
  );
}

export default App;

const Label = styled(motion.div)`
  width: 180px;
  padding: 20px 0;
  transform: translateZ(0);
  font-weight: 700;
  z-index: 1;
`;

const Button = styled(motion.button)`
  --purple: #db07d1;
  --pink: #f2056f;
  --blue: #61dafb;

  appearance: none;
  border: none;
  cursor: pointer;
  background-color: #acc7ed;
  color: #fff;
  border-radius: 60px;
  outline: none;
  margin: 0;
  padding: 12px 25px;
  font-family: "Poppins";
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -1px;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
`;
