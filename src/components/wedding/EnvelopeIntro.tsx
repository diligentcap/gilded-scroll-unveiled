import { motion, useReducedMotion } from "framer-motion";
import { Envelope } from "./Envelope";

export function EnvelopeIntro({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      aria-label="Closed wedding invitation"
      className="envelope-intro"
      animate={opening ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: reduced ? 0.01 : 0.72, delay: opening && !reduced ? 1.45 : 0, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: opening ? "none" : "auto" }}
    >
      <div className="envelope-wrap">
        <Envelope opening={opening} onOpen={onOpen} />
        <motion.div
          animate={opening ? { opacity: 0 } : { opacity: [0.45, 1, 0.45] }}
          transition={opening ? { duration: reduced ? 0.01 : 0.3 } : { duration: reduced ? 0.01 : 2.6, repeat: Infinity }}
          className="open-prompt"
        >
          <span>Tap to open</span>
          <span className="scroll-label">Scroll</span>
        </motion.div>
      </div>
    </motion.section>
  );
}