import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tarieven — Planvista",
};

function DashItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-[22px] text-[15px] text-ink">
      <span className="absolute left-0 text-accent-light">—</span>
      {children}
    </li>
  );
}

export default function TarievenPage() {
  return (
    <>
      <Reveal
        trigger="load"
        stagger={0.15}
        className="mx-auto max-w-[1180px] px-8 pt-[clamp(48px,8vw,88px)] pb-5 text-center"
      >
        <div className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Tarieven
        </div>
        <h1 className="mx-auto mb-5 max-w-[780px] font-serif text-[clamp(36px,5vw,54px)] leading-[1.12] font-medium text-ink">
          Vaste samenwerkingen, op maat van jouw organisatie.
        </h1>
        <p className="mx-auto max-w-[640px] text-[17px] text-ink-soft">
          Ik werk met een beperkt aantal opdrachtgevers en stem rol,
          intensiteit en inzetvorm af tijdens een kennismaking. Inzet is
          mogelijk op afstand en op locatie.
        </p>
      </Reveal>

      <Reveal
        stagger={0.15}
        className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[26px] px-8 pt-10 pb-[30px] lg:grid-cols-2"
      >
        <div className="flex flex-col rounded-[26px] border border-border bg-white p-[44px_38px]">
          <div className="mb-2.5 text-[13px] font-semibold tracking-[0.1em] text-accent uppercase">
            Voorkeur
          </div>
          <h3 className="mb-4 font-serif text-[28px] font-semibold text-ink">
            Retainer samenwerking
          </h3>
          <p className="mb-[22px] text-[15.5px] leading-[1.65] text-ink-soft">
            Voor ondernemers en professionals die een vaste partner naast
            zich willen, structureel werkend aan:
          </p>
          <ul className="mb-7 flex flex-col gap-3">
            <DashItem>het beheersbaar houden van operationele complexiteit</DashItem>
            <DashItem>de organisatie en regie over trajecten en bijeenkomsten</DashItem>
            <DashItem>het bewaken van overzicht, planning en voortgang</DashItem>
            <DashItem>structuur en ondersteuning op executive niveau</DashItem>
          </ul>
          <p className="mb-[26px] text-[14.5px] leading-[1.6] text-accent">
            De investering wordt afgestemd op jouw behoefte en de
            intensiteit van de inzet. Na een kennismaking volgt een voorstel
            op maat.
          </p>
          <a
            href="mailto:info@planvista.nl"
            className="mt-auto rounded-full bg-ink px-7 py-[14px] text-center text-[14.5px] font-medium text-cream transition-opacity hover:opacity-90"
          >
            Plan een kennismakingsgesprek
          </a>
        </div>

        <div className="flex flex-col rounded-[26px] border border-border bg-white p-[44px_38px]">
          <div className="mb-2.5 text-[13px] font-semibold tracking-[0.1em] text-accent uppercase">
            Uitzondering
          </div>
          <h3 className="mb-4 font-serif text-[28px] font-semibold text-ink">
            Uurbasis
          </h3>
          <p className="mb-[22px] text-[15.5px] leading-[1.65] text-ink-soft">
            In uitzonderlijke gevallen is ondersteuning op uurbasis mogelijk,
            bijvoorbeeld voor tijdelijke projecten of specifieke opdrachten —
            uitsluitend na een kennismaking en afhankelijk van
            beschikbaarheid.
          </p>
          <p className="mb-[14px] text-[15.5px] leading-[1.65] text-ink-soft">
            Tijdens het gesprek bespreken we:
          </p>
          <ul className="mb-7 flex flex-col gap-3">
            <DashItem>waar ondersteuning nodig is</DashItem>
            <DashItem>welke verantwoordelijkheden passend zijn</DashItem>
            <DashItem>welke samenwerkingsvorm het beste aansluit</DashItem>
          </ul>
          <p className="mb-[26px] text-[14.5px] leading-[1.6] text-accent">
            Op basis daarvan volgt een voorstel op maat.
          </p>
          <a
            href="mailto:info@planvista.nl"
            className="mt-auto rounded-full border border-ink px-7 py-[14px] text-center text-[14.5px] font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Plan een kennismakingsgesprek
          </a>
        </div>
      </Reveal>
    </>
  );
}
