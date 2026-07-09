import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/over-planvista", label: "Over PlanVista" },
  { href: "/diensten", label: "Diensten" },
  { href: "/samenwerken", label: "Samenwerken" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-dark px-8 pt-14 pb-[30px] text-dark-text">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-9">
        <div className="max-w-[320px]">
          <Image
            src="/logo.png"
            alt="PlanVista"
            width={228}
            height={226}
            className="h-16 w-16 object-contain"
          />
          <p className="mt-[18px] text-sm leading-relaxed text-dark-muted">
            Executive support, strategische coördinatie en lifestyle
            management.
          </p>
        </div>

        <div className="flex flex-wrap gap-14">
          <div>
            <div className="mb-3.5 text-[13px] tracking-[0.1em] text-accent uppercase">
              Navigatie
            </div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-dark-text hover:text-accent-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3.5 text-[13px] tracking-[0.1em] text-accent uppercase">
              Contact
            </div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              <a
                href="mailto:info@planvista.nl"
                className="text-dark-text hover:text-accent-light"
              >
                info@planvista.nl
              </a>
              <a
                href="https://www.instagram.com/plan_vista/"
                className="text-dark-text hover:text-accent-light"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/bo-iqbal-aa9ba5173"
                className="text-dark-text hover:text-accent-light"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-11 flex max-w-[1180px] flex-wrap justify-between gap-4 border-t border-border-dark pt-[22px] text-[13px] text-accent">
        <span>© 2026 PlanVista</span>
        <Link href="/algemene-voorwaarden" className="text-accent hover:text-accent-light">
          Algemene voorwaarden
        </Link>
      </div>
    </footer>
  );
}
