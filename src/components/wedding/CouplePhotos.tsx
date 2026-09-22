import photoOne from "@/assets/couple-photo-one.jpg";
import photoTwo from "@/assets/couple-photo-two.jpg";

export function CouplePhotos() {
  return (
    <div className="photo-cluster" aria-label="Portraits of Ayushi and Abhishek">
      <figure className="postage-photo postage-photo-one">
        <img src={photoOne} alt="Ayushi and Abhishek celebrating their engagement" width={768} height={1024} loading="lazy" />
      </figure>
      <figure className="postage-photo postage-photo-two">
        <img src={photoTwo} alt="Ayushi and Abhishek together" width={816} height={816} loading="lazy" />
      </figure>
      <div className="vinyl" aria-hidden="true"><span /></div>
    </div>
  );
}