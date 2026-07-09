import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/over-planvista", label: "Over Planvista" },
  { href: "/diensten", label: "Diensten" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-dark px-8 pt-14 pb-[30px] text-dark-text">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-9">
        <div className="max-w-[320px]">
          <div className="inline-flex items-center gap-2.5 border border-[#6B5A45] px-[18px] py-[10px] font-serif text-[22px] tracking-[0.08em] text-dark-text">
            PLANVISTA
          </div>
          <p className="mt-[18px] text-sm leading-relaxed text-dark-muted">
            Structuur en overzicht in organisaties waar complexiteit toeneemt.
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
                href="https://www.linkedin.com/company/planvistaservices"
                className="text-dark-text hover:text-accent-light"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-11 flex max-w-[1180px] flex-wrap justify-between gap-4 border-t border-border-dark pt-[22px] text-[13px] text-accent">
        <span>© 2026 Planvista</span>
        <Link href="/algemene-voorwaarden" className="text-accent hover:text-accent-light">
          Algemene voorwaarden
        </Link>
      </div>
    </footer>
  );
}
