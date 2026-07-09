import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — Planvista",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <Reveal
      trigger="load"
      stagger={0.15}
      className="mx-auto max-w-[760px] px-8 pt-[clamp(48px,8vw,88px)] pb-[100px] text-center"
    >
      <div className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
        Juridisch
      </div>
      <h1 className="mb-6 font-serif text-[clamp(32px,4.4vw,44px)] leading-[1.15] font-medium text-ink">
        Algemene voorwaarden
      </h1>
      <p className="mb-[34px] text-[16.5px] leading-[1.7] text-ink-soft">
        De volledige algemene voorwaarden van Planvista zijn als document
        beschikbaar. Download of bekijk ze via onderstaande link.
      </p>
      <a
        href="https://www.planvista.nl/s/Algemene-voorwaarden-Planvista.docx"
        className="inline-block rounded-full bg-ink px-8 py-[15px] text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
      >
        Download algemene voorwaarden
      </a>
    </Reveal>
  );
}
