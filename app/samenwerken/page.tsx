import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Samenwerken — PlanVista",
};

export default function SamenwerkenPage() {
  return (
    <>
      <Reveal
        trigger="load"
        stagger={0.15}
        className="mx-auto max-w-[1180px] px-8 pt-[clamp(48px,8vw,88px)] pb-5 text-center"
      >
        <h1 className="mx-auto mb-5 max-w-[780px] font-serif text-[clamp(36px,5vw,54px)] leading-[1.12] font-medium text-ink">
          Samenwerken
        </h1>
        <p className="mx-auto max-w-[640px] text-[17px] text-ink-soft">
          Persoonlijke ondersteuning die meebeweegt met jouw agenda, ambities
          en manier van werken.
        </p>
        <p className="mx-auto mt-5 max-w-[640px] text-[17px] text-ink-soft">
          Ik werk bewust met een beperkt aantal opdrachtgevers. Zo is er
          ruimte voor persoonlijke aandacht, korte lijnen en een
          samenwerking gebaseerd op vertrouwen. Iedere samenwerking is
          maatwerk en wordt afgestemd op jouw wensen, verantwoordelijkheden
          en de ondersteuning die je nodig hebt.
        </p>
      </Reveal>

      <Reveal
        stagger={0.15}
        className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[26px] px-8 pt-10 pb-[30px] lg:grid-cols-2"
      >
        <div className="flex flex-col rounded-[26px] border border-border bg-white p-[44px_38px]">
          <h3 className="mb-4 font-serif text-[28px] font-semibold text-ink">
            Doorlopende samenwerking
          </h3>
          <p className="mb-[18px] text-[15.5px] leading-[1.65] text-ink-soft">
            Voor ondernemers, executives en professionals die op zoek zijn
            naar een vaste Executive Partner.
          </p>
          <p className="mb-[18px] text-[15.5px] leading-[1.65] text-ink-soft">
            Samen zorgen we voor meer rust, overzicht en continuïteit in
            zowel zakelijke als persoonlijke werkzaamheden. Denk aan
            executive support, strategische coördinatie, projectbegeleiding,
            internationale reizen, evenementen en persoonlijke ondersteuning.
            Alles afgestemd op jouw agenda en prioriteiten.
          </p>
          <p className="mb-[26px] text-[14.5px] leading-[1.6] text-accent">
            Na een kennismaking ontvang je een voorstel dat aansluit bij de
            gewenste intensiteit en de manier waarop we samenwerken.
          </p>
          <a
            href="mailto:info@planvista.nl"
            className="mt-auto rounded-full bg-ink px-7 py-[14px] text-center text-[14.5px] font-medium text-cream transition-opacity hover:opacity-90"
          >
            Plan een kennismaking
          </a>
        </div>

        <div className="flex flex-col rounded-[26px] border border-border bg-white p-[44px_38px]">
          <h3 className="mb-4 font-serif text-[28px] font-semibold text-ink">
            Tijdelijke ondersteuning
          </h3>
          <p className="mb-[18px] text-[15.5px] leading-[1.65] text-ink-soft">
            Voor specifieke projecten of tijdelijke ondersteuning is een
            samenwerking op flexibele basis mogelijk, afhankelijk van de
            aard van de opdracht en mijn beschikbaarheid.
          </p>
          <p className="mb-[26px] text-[15.5px] leading-[1.65] text-ink-soft">
            Tijdens een kennismaking bespreken we jouw wensen, de gewenste
            rol en hoe ik het meeste waarde kan toevoegen. Op basis daarvan
            ontvang je een voorstel op maat.
          </p>
          <a
            href="mailto:info@planvista.nl"
            className="mt-auto rounded-full border border-ink px-7 py-[14px] text-center text-[14.5px] font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Plan een kennismaking
          </a>
        </div>
      </Reveal>
    </>
  );
}
