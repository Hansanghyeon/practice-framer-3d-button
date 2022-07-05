import { motion } from "framer-motion";
import styled from "styled-components";

function App() {
  return (
    <>
      <Button>
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
