import { motion } from "framer-motion-3d";

const ShapesCanvas = () => {
  return <Icosahedron />;
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
