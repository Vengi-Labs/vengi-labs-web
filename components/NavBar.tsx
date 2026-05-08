import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12">
      <nav className="backdrop-blur-[8px] bg-[rgba(252,245,239,0.75)] border border-[rgba(0,0,0,0.1)] rounded-2xl flex items-center justify-between px-[20.8px] py-[10.8px]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-11 h-11 relative shrink-0 rounded-lg overflow-hidden">
            <Image
              src="/images/nav/nav-logo.png"
              alt="Vengi Labs logo"
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-0.5 shrink-0">
            <span
              className="text-black text-[18px] font-medium tracking-[0.4px] leading-[22px]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Vengi Labs
            </span>
            <span
              className="text-[#666] text-[13px] font-light tracking-[0.3px] leading-4"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Telugu AI Research
            </span>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "About Us", href: "#about-us" },
            { label: "Blogs", href: "#blogs" },
            { label: "Models", href: "#models" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-center px-[18px] py-2 rounded-[10px] text-[#555] text-[15px] font-normal tracking-[-0.3px] hover:bg-black/5 transition-colors whitespace-nowrap"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#models"
          className="relative border border-white rounded-[10px] overflow-hidden shrink-0"
          style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
        >
          {/* orange gradient bg */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#ff8f4c] to-[#f25d04] pointer-events-none"
          />
          {/* inner glow */}
          <span className="absolute inset-0 rounded-[10px] shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.5)] pointer-events-none" />
          <span className="relative flex items-center justify-center px-[20.8px] py-[9.8px] text-white text-[15px] font-medium tracking-[-0.3px] whitespace-nowrap">
            <span className="hidden sm:inline">Explore our models</span>
            <span className="sm:hidden">Explore</span>
          </span>
        </a>
      </nav>
    </div>
  );
}
