function CheckerBorder({ flipped = false }: { flipped?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${flipped ? "-scale-y-100" : ""}`} aria-hidden="true">
      <div
        className="w-full h-[21px]"
        style={{ background: "repeating-linear-gradient(90deg, #fcf5ef 0px, #fcf5ef 30px, #ff8843 30px, #ff8843 60px)" }}
      />
      <div
        className="w-full h-[21px]"
        style={{ background: "repeating-linear-gradient(90deg, #ff8843 0px, #ff8843 30px, #fcf5ef 30px, #fcf5ef 60px)" }}
      />
    </div>
  );
}

export default function HowWeWork() {
  return (
    <div id="how-we-work" className="w-full">
      <CheckerBorder />

      <section className="bg-[#ff8843] w-full px-5 sm:px-10 md:px-[180px] py-28 flex flex-col gap-[104px] relative overflow-hidden">

        {/* Left floral */}
        <div
          className="hidden md:block absolute pointer-events-none"
          aria-hidden="true"
          style={{ left: "-49px", top: "384.67px", width: "484px", height: "420px" }}
        >
          <div
            className="absolute"
            style={{
              left: "50px",
              top: "12px",
              width: "736px",
              height: "920px",
              maskImage: "url('/images/how/how-floral-mask.svg')",
              maskMode: "alpha",
              maskSize: "1178px 809px",
              maskPosition: "-520px -177px",
              maskRepeat: "no-repeat",
              WebkitMaskImage: "url('/images/how/how-floral-mask.svg')",
              WebkitMaskSize: "1178px 809px",
              WebkitMaskPosition: "-520px -177px",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <img src="/images/how/how-floral.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Right floral (mirrored horizontally) — anchored to top-right corner */}
        <div
          className="hidden md:block absolute top-0 right-0 pointer-events-none"
          aria-hidden="true"
          style={{ width: "484px", height: "420px" }}
        >
          <div style={{ transform: "scaleX(-1)", width: "484px", height: "420px", position: "relative" }}>
            <div
              className="absolute"
              style={{
                left: "50px",
                top: "12px",
                width: "736px",
                height: "920px",
                maskImage: "url('/images/how/how-floral-mask.svg')",
                maskMode: "alpha",
                maskSize: "1178px 809px",
                maskPosition: "-520px -177px",
                maskRepeat: "no-repeat",
                WebkitMaskImage: "url('/images/how/how-floral-mask.svg')",
                WebkitMaskSize: "1178px 809px",
                WebkitMaskPosition: "-520px -177px",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              <img src="/images/how/how-floral.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start w-full">
          {/* Left */}
          <div className="flex flex-col justify-between gap-10 w-full md:w-[521px] shrink-0">
            <div className="flex flex-col gap-3">
              <h2
                className="text-[#f9fafb] text-[32px] md:text-[42px] font-normal tracking-[-1.6px] leading-[56px]"
                style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
              >
                How we work? Open, always.
              </h2>
              <p
                className="text-[#f9fafb] text-[16px] md:text-[18.4px] font-medium leading-[28.8px]"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                We are not a company. We are a community of researchers and engineers who believe Telugu needs sovereign AI models.
              </p>
            </div>
            <a
              href="#models"
              className="relative inline-flex items-center justify-center border border-white rounded-[12px] px-6 py-3 text-[#030712] text-base font-normal overflow-hidden self-start"
              style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              <span aria-hidden="true" className="absolute inset-0 rounded-[12px] bg-[rgba(255,255,255,0.8)] pointer-events-none" />
              <span className="absolute inset-0 rounded-[12px] shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.5)] pointer-events-none" />
              <span className="relative">Explore our models</span>
            </a>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-10">
            <p
              className="text-[#f9fafb] text-[16px] md:text-[18.4px] font-medium leading-[28.8px]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Everything we build is open source — models, datasets, and research.
            </p>
            <div className="flex flex-col gap-[22px]">
              <div className="bg-white rounded-[8px] px-[15px] py-[19px] flex items-center gap-[18px] w-full max-w-[407px] overflow-hidden">
                <div className="w-10 h-10 shrink-0 overflow-hidden">
                  <img src="/images/how/how-github.svg" alt="GitHub" className="w-full h-full" />
                </div>
                <div className="flex flex-1 items-center gap-2.5 min-w-0">
                  <a
                    href="https://github.com/vengi-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#030712] text-sm font-light tracking-[-0.2px] truncate hover:underline"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    https://github.com/vengi-labs
                  </a>
                  <div className="w-[18px] h-[18px] shrink-0">
                    <img src="/images/how/how-link.svg" alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[8px] px-[15px] py-[19px] flex items-center gap-[18px] w-full max-w-[407px] overflow-hidden">
                <div className="relative shrink-0" style={{ width: "40px", height: "37.134px" }}>
                  <img src="/images/how/how-huggingface.svg" alt="HuggingFace" className="absolute inset-0 w-full h-full" style={{ maxWidth: "none" }} />
                </div>
                <div className="flex flex-1 items-start gap-2.5 min-w-0">
                  <a
                    href="https://huggingface.co/vengi-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#030712] text-[14px] font-light tracking-[-0.2px] truncate hover:underline"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    https://huggingface.co/vengi-labs
                  </a>
                  <div className="relative shrink-0 w-4.5 h-4.5">
                    <img src="/images/how/how-link.svg" alt="" className="absolute inset-0 w-full h-full" style={{ maxWidth: "none" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join the work banner */}
        <div className="relative bg-[#fcf5ef] border border-[rgba(253,186,116,0.5)] rounded-[30px] px-[48px] py-[30px] flex flex-col gap-8 overflow-hidden">
          {/* Decorative pattern */}
          <div
            className="hidden md:block absolute pointer-events-none"
            aria-hidden="true"
            style={{
              left: "729.5px",
              top: "7.93px",
              width: "645px",
              height: "463px",
              maskImage: "url('/images/how/how-join-pattern-mask.svg')",
              maskMode: "alpha",
              maskSize: "850px 864px",
              maskPosition: "-142.5px -70px",
              maskRepeat: "no-repeat",
              WebkitMaskImage: "url('/images/how/how-join-pattern-mask.svg')",
              WebkitMaskSize: "850px 864px",
              WebkitMaskPosition: "-142.5px -70px",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <img src="/images/how/how-join-pattern.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            <h3
              className="text-[#1f1f1f] text-[32px] md:text-[36px] font-normal tracking-[-1.6px]"
              style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              Join the work
            </h3>
            <p
              className="text-[#3d3d3d] text-[16px] md:text-[18.4px] font-medium leading-[28.8px] max-w-[700px]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Researchers, linguists, engineers, and writers — if you care about Telugu AI, there is a place for you here.
            </p>
          </div>
          <a
            href="https://x.com/vengilabs"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center border border-white rounded-[12px] px-6 py-3 text-white text-base font-bold overflow-hidden self-start z-10"
            style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
          >
            <span aria-hidden="true" className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-[rgba(255,143,76,0.8)] to-[rgba(242,93,4,0.8)] pointer-events-none" />
            <span className="absolute inset-0 rounded-[12px] shadow-[inset_0px_0px_16px_0px_rgba(255,255,255,0.5)] pointer-events-none" />
            <span className="relative whitespace-nowrap">Partner with us</span>
          </a>
        </div>
      </section>

      <CheckerBorder flipped />
    </div>
  );
}
