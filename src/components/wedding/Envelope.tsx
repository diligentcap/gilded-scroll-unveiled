import { motion, useReducedMotion } from "framer-motion";
import { WaxSeal } from "./WaxSeal";

export function Envelope({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  const reduced = useReducedMotion();
  const duration = reduced ? 0.01 : 1.05;

  return (
    <motion.button
      type="button"
      aria-label="Open Ayushi and Abhishek's wedding invitation"
      onClick={onOpen}
      disabled={opening}
      animate={opening ? { scale: 1.025, y: 70, opacity: 0 } : { scale: 1, y: [0, -4, 0] }}
      transition={opening ? { duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="envelope-stage"
    >
      <div className="invitation-slip" aria-hidden="true">
        <span>Ayushi</span><i>&amp;</i><span>Abhishek</span>
      </div>
      <div className="envelope-back" />
      <motion.div
        className="envelope-flap"
        animate={opening ? { rotateX: 178, zIndex: 1 } : { rotateX: 0, zIndex: 5 }}
        transition={{ duration, delay: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="envelope-front-left" />
      <div className="envelope-front-right" />
      <div className="envelope-front-bottom" />
      <WaxSeal opening={opening} />
    </motion.button>
  );
}