export default function Footer() {
  return (
    <footer className="w-full bg-[#fcf5ef] px-4 md:px-[60px] pt-[48px] md:pt-[100px] pb-10 md:pb-12">

      {/* Mobile: column layout — logo/X row then copyright below */}
      {/* Desktop: single row — logo | copyright (absolute center) | X */}

      <div className="flex flex-col md:hidden gap-9">
        {/* Row 1: logo + X */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[6.962px]">
            <div className="w-[37.6px] h-[37.6px] shrink-0 overflow-hidden rounded-md">
              <img
                src="/images/footer/footer-logo.png"
                alt="Vengi Labs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-[2.8px] items-start justify-center">
              <span
                className="text-black text-[14.62px] font-medium tracking-[0.28px] leading-[16.7px] whitespace-nowrap"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Vengi Labs
              </span>
              <span
                className="text-black text-[11.14px] font-light tracking-[0.28px] leading-[16.7px] whitespace-nowrap"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                Telugu AI Research
              </span>
            </div>
          </div>
          <a
            href="https://twitter.com/vengilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[34px] h-[34px] hover:opacity-70 transition-opacity shrink-0"
          >
            <img src="/images/footer/footer-twitter-x.png" alt="Twitter / X" className="w-full h-full object-cover" />
          </a>
        </div>

        {/* Row 2: copyright */}
        <p
          className="text-[#686363] text-base font-normal text-center w-full"
          style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          © 2026, Vengi Labs
        </p>
      </div>

      {/* Desktop single row */}
      <div className="hidden md:flex relative items-center justify-between w-full">
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

        {/* Copyright — true center */}
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
