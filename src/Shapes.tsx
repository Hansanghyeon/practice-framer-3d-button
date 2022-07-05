import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Canvas } from "@react-three/fiber";

interface ShapesCanvas {
  isHover: boolean;
  isPress: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}
const ShapesCanvas = ({ isHover, isPress, mouseX, mouseY }: ShapesCanvas) => {
  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <Icosahedron />
    </Canvas>
  );
};
export function Icosahedron() {
  return (
    <motion.div>
      <icosahedronGeometry args={[0.7, 0]} />
      <Material />
    </motion.div>
  );
}

export default ShapesCanvas;

export function Material() {
  return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
}

interface CameraProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}
function Camera({ mouseX, mouseY, ...props }: CameraProps) {
  return <motion.perspectiveCamera />;
}
