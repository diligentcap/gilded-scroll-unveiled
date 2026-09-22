import { motion, useReducedMotion } from "framer-motion";

export function WaxSeal({ opening }: { opening: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      animate={opening ? { opacity: 0, y: -16, scale: 1.055, rotateX: -8 } : { opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      transition={{ duration: reduced ? 0.01 : 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="wax-seal"
    >
      <span>AA</span>
    </motion.div>
  );
}