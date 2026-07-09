import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const VALUE_CARDS = [
  {
    number: "01",
    title: "Structuur in complexiteit",
    body: "Ik breng orde aan in projecten en processen waar veel tegelijk speelt en verantwoordelijkheden elkaar kruisen.",
  },
  {
    number: "02",
    title: "Regie over voortgang",
    body: "Ik bewaak de samenhang tussen teams, besluiten en deadlines, zodat werk daadwerkelijk wordt afgerond.",
  },
  {
    number: "03",
    title: "Bijeenkomsten & events",
    body: "Van bestuurlijke sessies tot zakelijke events — voorbereiding, inhoud en uitvoering op elkaar afgestemd.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Eindelijk overzicht in een traject waar iedereen het spoor kwijt was. Planvista bracht rust en een duidelijke lijn.",
    attribution: "— Bestuurslid, non-profit organisatie",
  },
  {
    quote:
      "Scherp, secuur en precies de regie die we nodig hadden tussen alle stakeholders in.",
    attribution: "— Directeur, adviesorganisatie",
  },
  {
    quote:
      "Onze bestuurlijke bijeenkomst liep voor het eerst zonder haperingen — van voorbereiding tot nazorg.",
    attribution: "— Manager, publieke sector",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-14 px-8 pt-[clamp(48px,8vw,96px)] pb-[60px]">
        <Reveal
          trigger="load"
          stagger={0.15}
          className="min-w-[320px] flex-1 basis-[460px]"
        >
          <div className="mb-[18px] text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Interim structuur &amp; regie
          </div>
          <h1 className="mb-6 font-serif text-[clamp(40px,5.2vw,64px)] leading-[1.08] font-medium text-ink">
            Overzicht terug in organisaties die te snel gaan.
          </h1>
          <p className="mb-[34px] max-w-[480px] text-lg leading-[1.6] text-ink-soft">
            Wanneer werk zich opstapelt en besluiten vertragen, breng ik rust,
            structuur en regie terug — voor directie, bestuur en teams die
            middenin de complexiteit zitten.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@planvista.nl"
              className="rounded-full bg-ink px-[30px] py-[15px] text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
            >
              Plan een kennismaking
            </a>
            <Link
              href="/diensten"
              className="border-b-[1.5px] border-accent-light pb-0.5 text-[15px] font-medium text-ink hover:text-ink-soft"
            >
              Bekijk diensten →
            </Link>
          </div>
        </Reveal>

        <Reveal
          trigger="load"
          delay={0.2}
          className="min-w-[280px] flex-1 basis-[380px]"
        >
          <div className="relative aspect-[2/3] overflow-hidden rounded-[28px] bg-muted">
            <Image
              src="/hero.jpg"
              alt="Oprichter van Planvista aan het werk"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1180px] px-8 pt-5 pb-20">
        <Reveal
          stagger={0.15}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {VALUE_CARDS.map((card) => (
            <div
              key={card.number}
              className="rounded-[22px] border border-border bg-white p-[34px_30px]"
            >
              <div className="mb-3.5 font-serif text-[34px] text-accent-light">
                {card.number}
              </div>
              <h3 className="mb-2.5 font-serif text-[23px] font-semibold text-ink">
                {card.title}
              </h3>
              <p className="text-[15.5px] leading-[1.6] text-ink-soft">
                {card.body}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="bg-dark px-8 py-[70px]">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-10 text-center font-serif text-[clamp(28px,3.4vw,38px)] font-medium text-cream">
            Wat opdrachtgevers zeggen
          </h2>
          <Reveal
            stagger={0.15}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.attribution}
                className="rounded-[22px] bg-dark-card p-[28px_26px]"
              >
                <p className="mb-[18px] text-[15.5px] leading-[1.65] text-dark-text italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="text-sm font-semibold text-accent-light">
                  {t.attribution}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Reveal className="mx-auto max-w-[900px] px-8 py-[90px] text-center">
        <h2 className="mb-5 font-serif text-[clamp(28px,4vw,42px)] font-medium text-ink">
          Structuur begint met een gesprek.
        </h2>
        <p className="mb-[30px] text-lg text-ink-soft">
          Benieuwd of Planvista past bij jouw organisatie? Plan een
          vrijblijvende kennismaking.
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
