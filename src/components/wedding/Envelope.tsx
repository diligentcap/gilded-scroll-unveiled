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
      animate={opening ? { scale: [1, 1.018, 1.018] } : { scale: 1 }}
      transition={{ duration: reduced ? 0.01 : 1.8, times: [0, 0.18, 1], ease: [0.22, 1, 0.36, 1] }}
      className="envelope-stage"
    >
      <motion.div
        className="invitation-slip"
        aria-hidden="true"
        animate={opening ? { y: [0, 0, "-54%", "-86%"], scale: [1, 1, 1.012, 1.055], opacity: [1, 1, 1, 0] } : { y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: reduced ? 0.01 : 1.55, delay: reduced ? 0 : 0.42, times: [0, 0.2, 0.72, 1], ease: [0.22, 1, 0.36, 1] }}
      >
        <span>Ayushi</span><i>&amp;</i><span>Abhishek</span>
      </motion.div>
      <motion.div
        className="envelope-shell"
        animate={opening ? { y: 58, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: reduced ? 0.01 : 0.85, delay: reduced ? 0 : 1.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="envelope-back" />
        <motion.div
          className="envelope-flap"
          animate={opening ? { rotateX: -178 } : { rotateX: 0 }}
          transition={{ duration, delay: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="envelope-front-left" />
        <div className="envelope-front-right" />
        <div className="envelope-front-bottom" />
        <WaxSeal opening={opening} />
      </motion.div>
    </motion.button>
  );
}