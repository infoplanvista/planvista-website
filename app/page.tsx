import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const VALUE_CARDS = [
  {
    number: "01",
    title: "Executive Support",
    body: "Discreet en proactief beheer van agenda's, communicatie, besluitvorming en dagelijkse coördinatie.",
  },
  {
    number: "02",
    title: "Strategic Coordination",
    body: "Ik bewaak projecten, processen en prioriteiten zodat plannen daadwerkelijk worden uitgevoerd.",
  },
  {
    number: "03",
    title: "Travel, Lifestyle & Events",
    body: "Van internationale reizen en exclusieve evenementen tot persoonlijke verzoeken en concierge services: alles zorgvuldig georganiseerd.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Discreet en betrouwbaar",
    body: "Vertrouwelijke informatie en complexe situaties vragen om zorgvuldigheid, integriteit en een professionele aanpak.",
  },
  {
    title: "Strategisch én praktisch",
    body: "Van executive support en projectcoördinatie tot internationale reizen en persoonlijke ondersteuning: ik denk vooruit én zorg voor de uitvoering.",
  },
  {
    title: "Persoonlijke betrokkenheid",
    body: "Geen groot bureau, maar één vast aanspreekpunt dat jouw manier van werken leert kennen.",
  },
  {
    title: "Rust en overzicht",
    body: "Ik creëer structuur, bewaak prioriteiten en zorg dat alles achter de schermen soepel verloopt.",
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
            Executive Partner voor ondernemers, bestuurders en professionals
          </div>
          <h1 className="mb-6 font-serif text-[clamp(40px,5.2vw,64px)] leading-[1.08] font-medium text-ink">
            Rust achter de schermen. Ruimte voor wat echt belangrijk is.
          </h1>
          <p className="mb-[34px] max-w-[480px] text-lg leading-[1.6] text-ink-soft">
            Van strategische coördinatie en executive support tot
            internationale reizen, exclusieve evenementen en persoonlijke
            ontzorging. Ik zorg dat alles achter de schermen naadloos
            verloopt, zodat jij je kunt richten op wat écht belangrijk is.
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
              alt="Oprichter van PlanVista aan het werk"
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
            Waarom kiezen voor PlanVista?
          </h2>
          <Reveal
            stagger={0.15}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] bg-dark-card p-[28px_26px]"
              >
                <h3 className="mb-2 flex items-start gap-2.5 font-serif text-[19px] font-semibold text-cream">
                  <span className="text-accent-light">✔</span>
                  {item.title}
                </h3>
                <p className="text-[15.5px] leading-[1.65] text-dark-text">
                  {item.body}
                </p>
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
          Benieuwd of PlanVista past bij jouw organisatie? Plan een
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
