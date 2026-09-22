import { Button } from "@/components/ui/button";
import { FloralDecorations } from "./FloralDecorations";

export function HeroSection() {
  return (
    <section className="invitation-hero">
      <FloralDecorations className="hero-botanical reveal-piece" />
      <div className="hero-copy reveal-piece">
        <h1><span>Ayushi</span><i>&amp;</i><span>Abhishek</span></h1>
        <p className="getting-married">Are getting married!</p>
        <p className="join-us">Please join us for our upcoming wedding.</p>
        <Button variant="wedding" size="wedding" asChild><a href="#wedding-details">Save the date</a></Button>
      </div>
    </section>
  );
}