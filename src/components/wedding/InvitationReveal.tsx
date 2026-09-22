import { CouplePhotos } from "./CouplePhotos";
import { EventDetails } from "./EventDetails";
import { FloralDecorations } from "./FloralDecorations";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { InvitationMessage } from "./InvitationMessage";
import { WeddingCard } from "./WeddingCard";

export function InvitationReveal({ visible }: { visible: boolean }) {
  return (
    <main
      id="invitation"
      className="invitation-page"
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
    </main>
  );
}