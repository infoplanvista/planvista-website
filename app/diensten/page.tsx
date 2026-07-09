import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Diensten — Planvista",
};

const SERVICES = [
  {
    number: "01",
    title: "Strategische ondersteuning",
    body: "Ik ondersteun directie en management bij het behouden van overzicht in de dagelijkse operatie en besluitvorming — het structureren van prioriteiten en het verbinden van informatie, acties en besluiten.",
  },
  {
    number: "02",
    title: "Project- en procescoördinatie",
    body: "Voor trajecten waarin meerdere stakeholders, belangen en afhankelijkheden samenkomen. Ik breng structuur in de voortgang en bewaak de samenhang zodat projecten blijven bewegen.",
  },
  {
    number: "03",
    title: "Bijeenkomsten & events",
    body: "Coördinatie van bijeenkomsten, sessies en offsites. Ik zorg dat voorbereiding, inhoud, planning en uitvoering op elkaar aansluiten, zodat het geheel overzichtelijk verloopt.",
  },
  {
    number: "04",
    title: "Structuur en opvolging",
    body: "Zorgvuldige afstemming en opvolging van afspraken en acties, zodat helderheid ontstaat en processen beheersbaar en overzichtelijk blijven.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-14 px-8 pt-[clamp(48px,8vw,88px)] pb-5">
        <Reveal
          trigger="load"
          stagger={0.15}
          className="min-w-[300px] flex-1 basis-[440px]"
        >
          <div className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Diensten
          </div>
          <h1 className="mb-5 font-serif text-[clamp(34px,4.6vw,50px)] leading-[1.14] font-medium text-ink">
            Structuur, overzicht en voortgang — daar waar het complex wordt.
          </h1>
          <p className="max-w-[460px] text-[17px] leading-[1.6] text-ink-soft">
            Elke inzet begint met een goed gesprek: waar ontbreekt overzicht,
            wie is erbij betrokken en wat is er al geprobeerd? Hieronder de
            manieren waarop ik doorgaans word ingezet.
          </p>
        </Reveal>

        <Reveal
          trigger="load"
          delay={0.2}
          className="min-w-[240px] max-w-[360px] flex-1 basis-[320px]"
        >
          <div className="relative aspect-[2/3] overflow-hidden rounded-[28px] bg-muted">
            <Image
              src="/diensten.jpg"
              alt="Planvista aan het werk"
              fill
              sizes="(min-width: 1024px) 360px, 90vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1180px] px-8 pt-10 pb-[30px]">
        <Reveal
          stagger={0.15}
          className="grid grid-cols-1 gap-[26px] sm:grid-cols-2"
        >
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-[22px] border border-border bg-white p-[36px_32px]"
            >
              <div className="mb-4 font-serif text-[32px] text-accent-light">
                {service.number}
              </div>
              <h3 className="mb-3 font-serif text-2xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-ink-soft">
                {service.body}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-[900px] px-8 py-[90px] text-center">
        <h2 className="mb-5 font-serif text-[clamp(28px,4vw,42px)] font-medium text-ink">
          Welke inzet past bij jouw situatie?
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
