import { motion, useReducedMotion } from "framer-motion";
import { Envelope } from "./Envelope";

export function EnvelopeIntro({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  const reduced = useReducedMotion();
  return (
    <motion.section
      aria-label="Closed wedding invitation"
      className="envelope-intro"
      animate={opening ? { opacity: 0, visibility: "hidden" } : { opacity: 1, visibility: "visible" }}
      transition={{ duration: reduced ? 0.01 : 0.75, delay: opening && !reduced ? 1.45 : 0 }}
    >
      <div className="envelope-wrap">
        <Envelope opening={opening} onOpen={onOpen} />
        <motion.div
          animate={opening ? { opacity: 0 } : { opacity: [0.45, 1, 0.45] }}
          transition={{ duration: reduced ? 0.01 : 2.6, repeat: opening ? 0 : Infinity }}
          className="open-prompt"
        >
          <span>Tap to open</span>
          <span className="scroll-label">Scroll</span>
        </motion.div>
      </div>
    </motion.section>
  );
}