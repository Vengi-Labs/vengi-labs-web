import SectionLabel from "@/components/SectionLabel";

const reasons = [
  {
    img: "/images/why/why-card1.png",
    heading: "Translation is not understanding.",
    body: "Most systems learn Telugu indirectly through multilingual scaling.",
    imgStyle: "cover-bottom" as const,
  },
  {
    img: "/images/why/why-card2.png",
    heading: "Cloud assumptions exclude many users.",
    body: "Reliable AI should not require expensive hardware or constant connectivity.",
    imgStyle: "overflow-offset" as const,
  },
  {
    img: "/images/why/why-card3.png",
    heading: "Local context remains under represented.",
    body: "Dialects, cultural nuance, and regional usage are still treated as edge cases.",
    imgStyle: "cover-bottom" as const,
  },
];

export default function WhyWeBuild() {
  return (
    <section
      id="why-we-build"
      className="w-full px-5 sm:px-10 md:px-[180px] py-[80px] flex flex-col gap-[64px] relative overflow-hidden"
    >
      {/* Decorative ornaments */}
      <div
        className="absolute left-[-74.38px] top-[183.72px] w-[220.617px] h-[259.584px] opacity-20 pointer-events-none mix-blend-color-burn"
        aria-hidden="true"
      >
        <img src="/images/why/why-ornament1.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div
        className="absolute right-[-145.38px] top-[184.05px] w-[260.184px] h-[259.584px] opacity-20 pointer-events-none mix-blend-color-burn"
        aria-hidden="true"
      >
        <img src="/images/why/why-ornament2.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="flex flex-col gap-[64px] items-center w-full relative z-10">
        {/* Section label + header */}
        <div className="w-full flex flex-col gap-[24px] items-center max-w-[1089px]">
          <SectionLabel>Why we build</SectionLabel>

          <div className="flex flex-col gap-3 items-center max-w-[794px] w-full">
            <h2
              className="text-[#1f1f1f] text-[32px] md:text-[42px] font-normal tracking-[-1.6px] leading-[56px] text-center"
              style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              Telugu exists in AI. But mostly on borrowed foundations.
            </h2>
            <p
              className="text-[#3d3d3d] text-[16px] md:text-[18.4px] leading-[28.8px] text-center"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              {"Today's systems can process Telugu — but they are rarely designed around Telugu users, devices, contexts, or infrastructure realities."}
            </p>
          </div>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[36px] w-full max-w-[1089px]">
          {reasons.map((r) => (
            <div
              key={r.heading}
              className="bg-white border border-[#fed7aa] rounded-[8px] overflow-clip shadow-[0px_1px_10px_0px_rgba(153,153,153,0.05)] flex items-start justify-center px-[16px] py-[24px]"
            >
              <div className="flex flex-col gap-[16px] items-start w-full">
                <div className="h-[143px] opacity-70 relative shrink-0 w-full">
                  {r.imgStyle === "overflow-offset" ? (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        src={r.img}
                        alt=""
                        className="absolute h-[142.66%] left-0 max-w-none top-[-10.98%] w-full"
                      />
                    </div>
                  ) : (
                    <img
                      src={r.img}
                      alt=""
                      className="absolute inset-0 max-w-none pointer-events-none w-full h-full"
                      style={{ objectPosition: "bottom" }}
                    />
                  )}
                </div>
                <div className="flex flex-col gap-[8px] items-start w-full" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                  <p className="text-[20px] text-black font-normal tracking-[-0.2px] leading-normal">
                    {r.heading}
                  </p>
                  <p className="text-[14px] text-[#4b5563] font-normal tracking-[-0.2px] leading-normal">
                    {r.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
