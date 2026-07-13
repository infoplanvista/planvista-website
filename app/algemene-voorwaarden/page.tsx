import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — PlanVista",
};

const ARTICLES = [
  {
    title: "Artikel 1 – Definities",
    paragraphs: [
      "Planvista is gevestigd te Rotterdam en ingeschreven bij de Kamer van Koophandel onder nummer 97648345. In deze voorwaarden wordt Planvista aangeduid als Opdrachtnemer.",
      "Klant verwijst naar de wederpartij van Opdrachtnemer.",
      "Overeenkomst betekent iedere afspraak tussen Opdrachtnemer en Klant met betrekking tot het leveren van diensten.",
    ],
  },
  {
    title: "Artikel 2 – Toepasselijkheid",
    paragraphs: [
      "Deze voorwaarden zijn van toepassing op alle offertes, opdrachten, overeenkomsten en werkzaamheden van Planvista, tenzij schriftelijk anders overeengekomen.",
      "Afwijkende voorwaarden van de Klant worden uitdrukkelijk van de hand gewezen.",
      "Indien een bepaling nietig of ongeldig blijkt, blijven de overige bepalingen volledig van kracht.",
    ],
  },
  {
    title: "Artikel 3 – Offertes en opdrachten",
    paragraphs: [
      "Offertes zijn vrijblijvend en geldig gedurende 14 dagen, tenzij anders vermeld.",
      "Een offerte geldt niet automatisch voor toekomstige opdrachten.",
    ],
  },
  {
    title: "Artikel 4 – Tarieven en betaling",
    paragraphs: [
      "Alle tarieven zijn exclusief btw, tenzij anders vermeld.",
      "Facturen dienen te worden betaald binnen 14 dagen na factuurdatum.",
      "Bij te late betaling is de Klant van rechtswege in verzuim en is wettelijke rente verschuldigd. Eventuele incassokosten komen voor rekening van de Klant.",
    ],
  },
  {
    title: "Artikel 5 – Uitvoering van de overeenkomst",
    paragraphs: [
      "Planvista voert opdrachten uit naar beste inzicht en vermogen, op basis van een inspanningsverplichting.",
      "De Klant draagt zorg voor het tijdig aanleveren van alle benodigde informatie.",
      "Vertraging of extra kosten door onvolledige of onjuiste informatie zijn voor rekening van de Klant.",
    ],
  },
  {
    title: "Artikel 6 – Aansprakelijkheid",
    paragraphs: [
      "Planvista is uitsluitend aansprakelijk voor directe schade die het gevolg is van opzet of grove nalatigheid.",
      "Aansprakelijkheid voor indirecte schade, waaronder gevolgschade, gederfde winst of gemiste besparingen, is uitgesloten.",
      "De aansprakelijkheid is in alle gevallen beperkt tot het bedrag van de betreffende opdracht met een maximum van €2.500.",
    ],
  },
  {
    title: "Artikel 7 – Duur en beëindiging",
    paragraphs: [
      "Overeenkomsten worden aangegaan voor de afgesproken duur.",
      "Bij samenwerkingen geldt een opzegtermijn van één maand, tenzij schriftelijk anders overeengekomen.",
      "Bij beëindiging worden reeds verrichte werkzaamheden en gereserveerde capaciteit in rekening gebracht.",
    ],
  },
  {
    title: "Artikel 8 – Annulering",
    paragraphs: [
      "Bij annulering van geplande werkzaamheden, bijeenkomsten of gereserveerde inzet behoudt Planvista zich het recht voor om reeds gemaakte uren en gereserveerde capaciteit in rekening te brengen.",
    ],
  },
  {
    title: "Artikel 9 – Vertrouwelijkheid",
    paragraphs: [
      "Partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst ontvangen.",
    ],
  },
  {
    title: "Artikel 10 – Intellectueel eigendom",
    paragraphs: [
      "Alle rechten op door Planvista ontwikkelde materialen, documenten, strategieën en content blijven eigendom van Planvista, tenzij schriftelijk anders overeengekomen.",
      "De Klant verkrijgt uitsluitend een niet-exclusief en niet-overdraagbaar gebruiksrecht binnen de overeengekomen opdracht.",
    ],
  },
  {
    title: "Artikel 11 – Overmacht",
    paragraphs: [
      "In geval van overmacht, waaronder ziekte, technische storingen, overheidsmaatregelen of andere onvoorziene omstandigheden, heeft Planvista het recht de uitvoering op te schorten of te beëindigen zonder schadeplichtig te zijn.",
      "Indien de overmacht langer dan 30 dagen voortduurt, kunnen beide partijen de overeenkomst beëindigen.",
    ],
  },
  {
    title: "Artikel 12 – Klachten en geschillen",
    paragraphs: [
      "Klachten dienen binnen 14 dagen na levering schriftelijk te worden gemeld.",
      "Planvista krijgt altijd de mogelijkheid om binnen redelijke termijn te herstellen.",
      "Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Rotterdam.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Reveal
        trigger="load"
        stagger={0.15}
        className="mx-auto max-w-[760px] px-8 pt-[clamp(48px,8vw,88px)] pb-10 text-center"
      >
        <div className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Juridisch
        </div>
        <h1 className="mb-6 font-serif text-[clamp(32px,4.4vw,44px)] leading-[1.15] font-medium text-ink">
          Algemene voorwaarden
        </h1>
        <p className="text-[16.5px] leading-[1.7] text-ink-soft">
          De volledige algemene voorwaarden van PlanVista vind je hieronder.
        </p>
      </Reveal>

      <Reveal
        stagger={0.06}
        className="mx-auto flex max-w-[760px] flex-col gap-8 px-8 pb-[100px]"
      >
        {ARTICLES.map((article) => (
          <div key={article.title}>
            <h2 className="mb-2.5 font-serif text-[19px] font-semibold text-ink">
              {article.title}
            </h2>
            <div className="flex flex-col gap-2.5">
              {article.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15.5px] leading-[1.65] text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </>
  );
}
