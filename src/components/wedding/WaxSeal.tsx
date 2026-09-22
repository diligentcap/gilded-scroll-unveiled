import { motion } from "framer-motion";

export function WaxSeal({ opening }: { opening: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={opening ? { opacity: 0, y: -18, scale: 1.08 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="wax-seal"
    >
      <span>AA</span>
    </motion.div>
  );
}