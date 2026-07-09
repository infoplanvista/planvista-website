import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Diensten — PlanVista",
};

const SERVICES = [
  {
    number: "01",
    title: "Executive Support",
    body: "Als jouw vaste rechterhand zorg ik voor overzicht, structuur en continuïteit. Ik bewaak prioriteiten, denk vooruit en zorg dat alles achter de schermen soepel verloopt, zodat jij je kunt richten op de beslissingen die er echt toe doen.",
  },
  {
    number: "02",
    title: "Strategic Coordination",
    body: "Wanneer meerdere projecten, stakeholders en verantwoordelijkheden samenkomen, breng ik structuur en samenhang. Ik bewaak de voortgang, houd overzicht en zorg dat plannen daadwerkelijk worden uitgevoerd.",
  },
  {
    number: "03",
    title: "Travel and Lifestyle Management",
    body: "Van internationale zakenreizen en exclusieve accommodaties tot persoonlijke afspraken en bijzondere verzoeken. Ik regel alles zorgvuldig en met oog voor detail, zodat jij nergens naar hoeft om te kijken.",
  },
  {
    number: "04",
    title: "Events and Experiences",
    body: "Van bestuursvergaderingen en offsites tot exclusieve diners en zakelijke evenementen. Ik verzorg de volledige coördinatie, zodat ieder detail klopt en jij je volledig kunt richten op je gasten of deelnemers.",
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
            Discrete ondersteuning die rust, overzicht en ruimte creëert.
          </h1>
          <p className="max-w-[460px] text-[17px] leading-[1.6] text-ink-soft">
            Geen enkele samenwerking is hetzelfde. Daarom begint iedere
            opdracht met een kennismaking waarin we bespreken waar jij
            behoefte aan hebt en hoe ik het verschil kan maken. Van executive
            support en strategische coördinatie tot internationale reizen,
            evenementen en persoonlijke ondersteuning. Altijd afgestemd op
            jouw manier van werken.
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
              alt="PlanVista aan het werk"
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
          Benieuwd hoe PlanVista jou kan ondersteunen?
        </h2>
        <p className="mb-[30px] text-lg text-ink-soft">
          Plan een vrijblijvende kennismaking en ontdek wat een betrouwbare
          Executive Partner voor jou kan betekenen.
        </p>
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
