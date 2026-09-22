import coupleIllustration from "@/assets/indian-couple-illustration.png";

export function WeddingCard() {
  return (
    <section className="wedding-card reveal-piece">
      <div className="wedding-card-copy">
        <p><strong>Date:</strong> Thursday 11<sup>th</sup> of December, 2026</p>
        <p><strong>Time:</strong> At 12 o’clock in noon</p>
        <p><strong>Venue:</strong> Shaheen Bagh, Dehradun</p>
      </div>
      <img src={coupleIllustration} alt="Illustration of an Indian bride and groom" width={768} height={1024} loading="lazy" />
    </section>
  );
}