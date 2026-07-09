import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Over Planvista — Planvista",
};

export default function OverPlanvistaPage() {
  return (
    <>
      <Reveal
        trigger="load"
        stagger={0.15}
        className="mx-auto max-w-[1180px] px-8 pt-[clamp(48px,8vw,88px)] pb-5 text-center"
      >
        <div className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Over Planvista
        </div>
        <h1 className="mx-auto max-w-[760px] font-serif text-[clamp(36px,5vw,54px)] leading-[1.12] font-medium text-ink">
          Rust en structuur in werkomgevingen waar veel tegelijk speelt.
        </h1>
      </Reveal>

      <section className="mx-auto flex max-w-[1180px] flex-col-reverse items-center gap-14 px-8 py-14 md:flex-row">
        <Reveal className="min-w-[280px] flex-1 basis-[380px]">
          <div className="relative aspect-[2/3] overflow-hidden rounded-[28px] bg-muted">
            <Image
              src="/about.jpg"
              alt="Oprichter van Planvista"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal stagger={0.15} className="min-w-[300px] flex-1 basis-[440px]">
          <p className="mb-[22px] text-lg leading-[1.7] text-ink-soft">
            Ik word vaak ingeschakeld wanneer overzicht ontbreekt,
            verantwoordelijkheden door elkaar lopen of projecten vastlopen in
            complexiteit. Mijn eerste focus: rust herstellen en structuur
            aanbrengen, zodat helder wordt wat prioriteit heeft en hoe alles
            samenhangt.
          </p>
          <p className="mb-[22px] text-lg leading-[1.7] text-ink-soft">
            In mijn werk beweeg ik mee met de dynamiek van een organisatie,
            terwijl ik de rode draad bewaak in processen, afspraken en
            besluitvorming. Ik breng samenhang aan in informatie, maak
            onduidelijkheden inzichtelijk en zorg dat voortgang zichtbaar en
            beheersbaar blijft.
          </p>
          <p className="text-lg leading-[1.7] text-ink-soft">
            Wat mij kenmerkt: complexe situaties snel overzien en structuur
            terugbrengen zonder de mensen en context uit het oog te
            verliezen. Vaak werk ik als verlengstuk van directie of
            projectleiding, in omgevingen waar veel tegelijk gebeurt.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-white px-8 py-16">
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="mb-[18px] font-serif text-[clamp(26px,3.4vw,34px)] font-medium text-ink">
            Complexiteit terug naar overzicht
          </h2>
          <p className="text-lg leading-[1.7] text-ink-soft">
            Planvista staat voor het terugbrengen van complexiteit naar
            overzicht, zodat werk weer gestructureerd en beheersbaar wordt —
            inzetbaar op interim- en projectbasis, op locatie of op afstand.
          </p>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-[900px] px-8 py-[90px] text-center">
        <h2 className="mb-5 font-serif text-[clamp(28px,4vw,42px)] font-medium text-ink">
          Benieuwd wat dit voor jouw organisatie betekent?
        </h2>
        <a
          href="mailto:info@planvista.nl"
          className="rounded-full bg-ink px-8 py-[15px] text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
        >
          Plan een kennismaking
        </a>
      </Reveal>
    </>
  );
}
