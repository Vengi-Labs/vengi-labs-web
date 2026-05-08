export default function Footer() {
  return (
    <footer className="w-full bg-[#fcf5ef] px-[60px] pt-[100px] pb-12">
      <div className="relative flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-[54px] h-[54px] shrink-0 overflow-hidden rounded-lg">
            <img
              src="/images/footer/footer-logo.png"
              alt="Vengi Labs"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-center">
            <span
              className="text-black text-[21px] font-medium tracking-[0.4px] leading-6 whitespace-nowrap"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Vengi Labs
            </span>
            <span
              className="text-black text-base font-light tracking-[0.4px] leading-6 whitespace-nowrap"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Telugu AI Research
            </span>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-[#686363] text-base font-normal"
          style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          © 2026, Vengi Labs
        </p>

        {/* Social */}
        <div className="flex-1 flex items-center justify-end shrink-0">
          <a
            href="https://twitter.com/vengilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] h-[34px] hover:opacity-70 transition-opacity"
          >
            <img src="/images/footer/footer-twitter-x.png" alt="Twitter / X" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
    </footer>
  );
}
