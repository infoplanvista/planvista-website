import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Over PlanVista — PlanVista",
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
          Over PlanVista
        </div>
        <h1 className="mx-auto max-w-[760px] font-serif text-[clamp(36px,5vw,54px)] leading-[1.12] font-medium text-ink">
          De vertrouwde partner achter ondernemers, executives en
          professionals.
        </h1>
      </Reveal>

      <section className="mx-auto flex max-w-[1180px] flex-col-reverse items-center gap-14 px-8 py-14 md:flex-row">
        <Reveal className="min-w-[280px] flex-1 basis-[380px]">
          <div className="relative aspect-[2/3] overflow-hidden rounded-[28px] bg-muted">
            <Image
              src="/about.jpg"
              alt="Oprichter van PlanVista"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
        <Reveal stagger={0.15} className="min-w-[300px] flex-1 basis-[440px]">
          <p className="mb-[22px] text-lg leading-[1.7] text-ink-soft">
            PlanVista is ontstaan vanuit de overtuiging dat de mensen met de
            grootste verantwoordelijkheid niet méér moeten doen, maar de
            juiste ondersteuning nodig hebben.
          </p>
          <p className="mb-[22px] text-lg leading-[1.7] text-ink-soft">
            Ik werk als Executive Partner voor ondernemers, bestuurders en
            professionals die behoefte hebben aan rust, overzicht en een
            betrouwbare rechterhand. Iemand die vooruitdenkt,
            verantwoordelijkheid neemt en ervoor zorgt dat alles achter de
            schermen soepel verloopt.
          </p>
          <p className="mb-[22px] text-lg leading-[1.7] text-ink-soft">
            Mijn kracht ligt in het snel doorgronden van complexe situaties.
            Ik breng structuur aan, bewaak prioriteiten en zorg dat plannen
            daadwerkelijk worden uitgevoerd. Met een scherp oog voor detail,
            discretie en een proactieve aanpak creëer ik overzicht in
            omgevingen waar veel tegelijk gebeurt.
          </p>
          <p className="mb-[22px] text-lg leading-[1.7] text-ink-soft">
            Mijn ondersteuning gaat verder dan alleen het zakelijke. Van
            executive support en strategische coördinatie tot internationale
            reizen, evenementen en persoonlijke ondersteuning. Iedere
            samenwerking is maatwerk en sluit aan op de manier waarop jij
            werkt en leeft.
          </p>
          <p className="text-lg leading-[1.7] text-ink-soft">
            PlanVista staat voor vertrouwen, kwaliteit en persoonlijke
            betrokkenheid. Geen standaard ondersteuning, maar een
            samenwerking waarin jij kunt vertrouwen op één vast
            aanspreekpunt dat meedenkt, vooruitkijkt en ontzorgt.
          </p>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-[900px] px-8 py-[90px] text-center">
        <h2 className="mb-5 font-serif text-[clamp(28px,4vw,42px)] font-medium text-ink">
          Benieuwd wat PlanVista voor jou kan betekenen?
        </h2>
        <p className="mb-[30px] text-lg text-ink-soft">Ik maak graag kennis.</p>
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
