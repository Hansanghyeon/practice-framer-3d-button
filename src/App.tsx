import { motion, useMotionValue } from "framer-motion";
import styled, { css } from "styled-components";
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
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientX - bounds.y - bounds.height / 2);
        }}
      >
        <Shapes
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <Blush type="blue" />
          <Blush type="pink" />
        </Shapes>
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

const Shapes = styled(motion.div)`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 60px;
  background: linear-gradient(
    60deg,
    var(--blue) 0%,
    #d6cbf6 30%,
    var(--pink) 70%
  );
`;

const Blush = styled.div<{ type: "blue" | "pink" }>`
  position: absolute;
  bottom: -15px;
  width: 100px;
  height: 30px;
  filter: blur(20px);

  ${({ type }) => type === "blue" && Blue}
  ${({ type }) => type === "pink" && Pink}
`;
const Blue = css`
  left: 20px;
  background: var(--blue);
`;
const Pink = css`
  right: 20px;
  background: var(--purple);
`;
