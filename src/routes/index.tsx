import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { EnvelopeIntro } from "@/components/wedding/EnvelopeIntro";
import { InvitationReveal } from "@/components/wedding/InvitationReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayushi & Abhishek — Wedding Invitation" },
      { name: "description", content: "Open the wedding invitation of Ayushi and Abhishek, celebrating in Dehradun on 11 December 2026." },
      { property: "og:title", content: "Ayushi & Abhishek — Wedding Invitation" },
      { property: "og:description", content: "Together with their families, Ayushi and Abhishek invite you to celebrate their wedding." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  const openInvitation = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => {
      setOpened(true);
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 1700);
  };

  return (
    <div className="wedding-experience">
      <EnvelopeIntro opening={opening} onOpen={openInvitation} />
      {opening && <InvitationReveal visible={opened} />}
    </div>
  );
}
