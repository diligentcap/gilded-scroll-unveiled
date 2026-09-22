import { motion, useReducedMotion } from "framer-motion";
import { CouplePhotos } from "./CouplePhotos";
import { EventDetails } from "./EventDetails";
import { FloralDecorations } from "./FloralDecorations";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { InvitationMessage } from "./InvitationMessage";
import { WeddingCard } from "./WeddingCard";

export function InvitationReveal({ visible }: { visible: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.main
      id="invitation"
      className="invitation-page"
      initial={{ opacity: 0, y: reduced ? 0 : 36, scale: reduced ? 1 : 0.985 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: reduced ? 0 : 36, scale: reduced ? 1 : 0.985 }}
      transition={{ duration: reduced ? 0.01 : 0.9, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={!visible}
    >
      <div className="paper-sheet">
        <HeroSection />
        <section className="editorial-collage">
          <InvitationMessage />
          <CouplePhotos />
          <div className="details-group">
            <EventDetails />
            <div className="manuscript" aria-hidden="true">amore · famiglia · sempre<br />una promessa · due cuori<br />insieme per tutta la vita</div>
          </div>
          <div id="wedding-details" className="wedding-card-wrap">
            <WeddingCard />
            <FloralDecorations className="card-botanical reveal-piece" />
          </div>
          <div className="dried-flower" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="palette-bars" aria-hidden="true"><span /><span /><span /><span /></div>
        </section>
        <Footer />
      </div>
    </motion.main>
  );
}