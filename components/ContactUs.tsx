const imgContactBg = "/images/contact/contact-bg-pattern.png";

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="w-full px-[180px] py-20 bg-[#fcf5ef]"
    >
      <div className="relative rounded-[30px] border border-[rgba(253,186,116,0.5)] overflow-hidden flex flex-col items-center gap-10 py-[70px] px-8">
        {/* Background texture */}
        <div
          className="absolute left-[-30px] top-[13px] w-[1109px] h-[795px] pointer-events-none opacity-20"
          aria-hidden="true"
        >
          <img
            src={imgContactBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient top fade */}
        <div
          className="absolute left-[-1px] top-[-16px] w-[1080px] h-[445px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(252,245,239,0) 0%, #fcf5ef 57.8%)",
            transform: "scaleY(-1)",
          }}
        />

        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 rounded-[30px] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, #ff963c 3.3%, rgba(255,150,60,0.7) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col gap-4 items-center">
          <h2
            className="text-[#1f1f1f] text-[48px] font-normal tracking-[-1.6px] leading-[72px] max-w-[988px]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Help build Telugu intelligence at the source
          </h2>
          <p
            className="text-[#3d3d3d] text-[18.4px] font-medium leading-[29px] max-w-[692px]"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Be part of building systems that shape how Telugu exists in the next
            generation of computing.
          </p>
        </div>

        {/* TODO: Add email contact form here instead of just the CTA button */}
        <a
          href="https://calendly.com/prahaladhareddyboreddy/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center justify-center border border-white rounded-xl px-6 py-3 text-white text-base font-bold overflow-hidden transition-all hover:opacity-90 active:scale-[0.98]"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-xl bg-gradient-to-b from-[rgba(255,143,76,0.8)] to-[rgba(242,93,4,0.8)] pointer-events-none"
          />
          <span className="absolute inset-0 rounded-xl shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.5)] pointer-events-none" />
          <span className="relative whitespace-nowrap">Partner with us</span>
        </a>
      </div>
    </section>
  );
}
