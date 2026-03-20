import Link from "next/link";
import Image from "next/image";
import FooterSubscribe from "./FooterSubscribe";

/* ─── Social Icon Components ─── */
function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function YouTubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
function BehanceIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.609.41.28.733.65.96 1.114.225.463.34 1.018.34 1.67 0 .724-.176 1.333-.53 1.83-.354.495-.874.882-1.563 1.163a3.6 3.6 0 012.09 1.167c.51.656.767 1.462.767 2.416 0 .72-.147 1.352-.44 1.895a3.87 3.87 0 01-1.19 1.35c-.5.36-1.075.628-1.727.803-.65.176-1.334.264-2.047.264H0V4.503h6.938zM6.58 10.4c.58 0 1.058-.145 1.433-.434.374-.29.56-.72.56-1.298 0-.333-.062-.607-.185-.82A1.4 1.4 0 007.88 7.4a1.78 1.78 0 00-.636-.257 3.87 3.87 0 00-.8-.076H3.35V10.4H6.58zm.235 5.69c.298 0 .584-.037.855-.11.27-.073.507-.19.707-.346a1.69 1.69 0 00.484-.595c.12-.242.18-.537.18-.887 0-.708-.213-1.222-.638-1.544-.426-.32-.978-.48-1.66-.48H3.35v3.962H6.815zM15.27 5.89h5.326v1.38H15.27V5.89zm2.553 10.2c.443.436 1.073.654 1.893.654.585 0 1.093-.152 1.523-.454.43-.303.69-.605.778-.906h2.568c-.41 1.276-1.034 2.19-1.87 2.745-.836.553-1.846.83-3.032.83-.826 0-1.573-.136-2.24-.41a4.86 4.86 0 01-1.71-1.176 5.26 5.26 0 01-1.09-1.83c-.254-.71-.38-1.49-.38-2.34 0-.82.133-1.584.398-2.29a5.33 5.33 0 011.12-1.834 5.16 5.16 0 011.73-1.22c.672-.296 1.414-.444 2.222-.444.892 0 1.666.175 2.322.526.657.35 1.196.836 1.618 1.457.42.622.722 1.345.904 2.172.183.826.245 1.714.186 2.662h-7.645c.04.894.332 1.57.77 2.006v-.002zm3.33-5.478c-.366-.382-.94-.574-1.722-.574-.51 0-.934.09-1.273.27a2.77 2.77 0 00-.818.675 2.56 2.56 0 00-.427.81c-.09.283-.144.537-.16.762h5.21c-.09-.804-.44-1.56-.81-1.943z" />
    </svg>
  );
}
function DribbbleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.143 10.143 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.148 10.148 0 0012 1.822c-.824 0-1.63.076-2.4.23zm10.335 3.483c-.218.29-1.9 2.473-5.69 4.023.234.48.46.976.67 1.473.073.17.14.34.204.51 3.45-.435 6.89.264 7.23.338a10.095 10.095 0 00-2.414-6.344z" />
    </svg>
  );
}
function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── Icon map ─── */
const ICON_MAP = {
  Facebook: FacebookIcon,
  YouTube: YouTubeIcon,
  Behance: BehanceIcon,
  Dribbble: DribbbleIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
};

/* ─── Static data ─── */
const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", accent: "#1877F2" },
  { label: "YouTube", href: "https://youtube.com", accent: "#FF0000" },
  { label: "Behance", href: "https://behance.net", accent: "#0057FF" },
  { label: "Dribbble", href: "https://dribbble.com", accent: "#EA4C89" },
  { label: "Twitter", href: "https://twitter.com", accent: "#1DA1F2" },
  { label: "LinkedIn", href: "https://linkedin.com", accent: "#0A66C2" },
];

const NAV_COLS = [
  {
    title: "Product",
    links: [
      { label: "Landing Page", href: "/services/landing-page" },
      { label: "Popup Builder", href: "/services/popup-builder" },
      { label: "Web Design", href: "/services/web-design" },
      { label: "Content", href: "/services/content" },
      { label: "Integrations", href: "/services/integrations" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Web Designers", href: "/use-cases/web-designers" },
      { label: "Marketers", href: "/use-cases/marketers" },
      { label: "Small Business", href: "/use-cases/small-business" },
      { label: "Website Builder", href: "/use-cases/website-builder" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Academy", href: "/resources/academy" },
      { label: "Blog", href: "/blog" },
      { label: "Themes", href: "/resources/themes" },
      { label: "Hosting", href: "/resources/hosting" },
      { label: "Developers", href: "/resources/developers" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const CONTACT = {
  address:
    "B-803, Infinity Tower, Corporate Road, beside Ramada, Ahmedabad — 380015",
  email: "info.perceptcraft@gmail.com",
  phone: "+91 728 586 5665",
};

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sales & Refunds", href: "/refunds" },
];

const YEAR = new Date().getFullYear();

/* ─── Footer — Server Component ─── */
export default function Footer() {
  return (
    <footer className="w-full" role="contentinfo" aria-label="Site footer">
      {/* ── 1. SOCIAL BANNER ── */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 border-t-[3px] border-gray-200"
        aria-label="Social media links"
      >
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${s.label} page`}
            style={{ "--accent": s.accent }}
            className="
              group relative flex items-center justify-center gap-2.5
              py-10 md:py-8 px-3
              text-[20px] font-bold tracking-wider text-gray-700
              bg-white sm:border-r border-b border-gray-200
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-0.5
            "
          >
            {/* Sliding Background Fill Layer */}
            <div 
              className="absolute inset-0 translate-y-full bg-[var(--accent)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
              aria-hidden="true"
            />

            {/* Content Layer (z-index ensure it stays above sliding fill) */}
            <div className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
              {(() => {
                const IconComp = ICON_MAP[s.label];
                return IconComp ? (
                  <span className="shrink-0 transition-colors duration-300 group-hover:[&_svg]:fill-white" style={{ color: s.accent }}>
                    <IconComp className="w-6 h-6" style={{ fill: s.accent }} />
                  </span>
                ) : null;
              })()}
              <span>{s.label.toUpperCase()}</span>
            </div>

            {/* Subtle bottom accent line (always visible) */}
            <span
              className="absolute bottom-0 left-0 h-[3px] w-full bg-[var(--accent)] origin-left transition-transform duration-500 group-hover:scale-x-0 group-hover:bg-white"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      {/* ── 2. MAIN DARK SECTION ── */}
      <div className="relative overflow-hidden min-h-[300px]">
        <Image
          src="/footer-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={65}
          priority={false}
          className="object-cover object-[center_30%]"
          aria-hidden="true"
        />
        {/* overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,20,0.72) 0%, rgba(10,10,20,0.80) 60%, rgba(10,10,20,0.88) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-[2] max-w-[1200px] mx-auto px-5 pt-14 pb-12">
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 list-none m-0 p-0">
              {NAV_COLS.map((col) => (
                <li key={col.title}>
                  <h2 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-5">
                    {col.title}
                  </h2>
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[14px] font-medium text-gray-400 no-underline transition-all duration-150 hover:text-white inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              {/* Contact column */}
              <li>
                <h2 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white mb-5">
                  Contact Us
                </h2>
                <address className="not-italic flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-[14px] text-gray-400 leading-relaxed font-medium">
                    <LocationIcon />
                    <span>{CONTACT.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-[14px] text-gray-400 font-medium">
                    <EmailIcon />
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="hover:text-white transition-colors no-underline"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-[14px] text-gray-400 font-medium">
                    <PhoneIcon />
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="hover:text-white transition-colors no-underline"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </address>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* ── 3. NEWSLETTER STRIP ── */}
      <section
        className="bg-gradient-to-r from-[#6568F1] via-[#7c6ef2] to-[#8b5cf6]"
        aria-label="Newsletter signup"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-10">
          <h2 className="text-[clamp(22px,4vw,32px)] font-extrabold text-white whitespace-nowrap m-0">
            Get latest updates
          </h2>
          <FooterSubscribe />
        </div>
      </section>

      {/* ── 4. BOTTOM BAR ── */}
      <div className="bg-[#0d0d14] px-5 md:px-10 py-[18px] flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
        <p className="text-[12px] text-white/40 m-0">
          © {YEAR} All Rights Reserved · Perceptcraft Design &amp; Development
          Agency
        </p>
        <nav aria-label="Legal links">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 list-none m-0 p-0">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[12px] text-white/40 hover:text-white/80 transition-colors no-underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

/* ─── Contact SVG Icons ─── */
function LocationIcon() {
  return (
    <svg
      className="w-4 h-4 mt-0.5 shrink-0 text-white/40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg
      className="w-4 h-4 mt-0.5 shrink-0 text-white/40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 mt-0.5 shrink-0 text-white/40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
