import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Planvista",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-[1180px] flex-wrap gap-14 px-8 pt-[clamp(48px,8vw,88px)] pb-20">
      <Reveal
        trigger="load"
        stagger={0.15}
        className="min-w-[300px] flex-1 basis-[420px]"
      >
        <div className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Contact
        </div>
        <h1 className="mb-[22px] font-serif text-[clamp(34px,4.6vw,48px)] leading-[1.1] font-medium text-ink">
          Laten we kennismaken.
        </h1>
        <p className="mb-5 max-w-[440px] text-[16.5px] leading-[1.7] text-ink-soft">
          Op zoek naar ondersteuning op strategisch en organisatorisch
          niveau, of professionele begeleiding bij bijeenkomsten en
          trajecten? Vul het formulier in — ik neem persoonlijk contact met
          je op.
        </p>
        <div className="relative mt-7 aspect-[2/3] max-w-[320px] overflow-hidden rounded-3xl bg-muted">
          <Image
            src="/contact.jpg"
            alt="Contact met Planvista"
            fill
            sizes="320px"
            className="object-cover object-top"
          />
        </div>
        <div className="mt-[26px] flex gap-5 text-[14.5px]">
          <a href="mailto:info@planvista.nl" className="font-medium text-ink hover:text-ink-soft">
            info@planvista.nl
          </a>
          <a
            href="https://www.instagram.com/plan_vista/"
            className="text-ink hover:text-ink-soft"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/planvistaservices"
            className="text-ink hover:text-ink-soft"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal
        trigger="load"
        delay={0.15}
        className="min-w-[300px] flex-1 basis-[420px]"
      >
        <ContactForm />
      </Reveal>
    </section>
  );
}
