import SectionLabel from "@/components/SectionLabel";

const cards = [
  {
    title: "Language Model",
    desc: "Models for Telugu understanding, generation, and reasoning",
    img: "/images/our-work/our-work-bg1.png",
    imgOffset: "left-[37px] top-[47px]",
  },
  {
    title: "Speech Model",
    desc: "Speech recognition and natural voice for native speakers",
    img: "/images/our-work/our-work-bg2.png",
    imgOffset: "left-[-290px] top-[47px]",
  },
  {
    title: "Vision Model",
    desc: "OCR and visual understanding for Telugu script, signboards, manuscripts",
    img: "/images/our-work/our-work-bg1.png",
    imgOffset: "left-[-627px] top-[47px]",
  },
];

const wideCards = [
  {
    title: "Datasets",
    desc: "Open, annotated datasets for training and benchmarking Telugu models",
    img: "/images/our-work/our-work-bg3.png",
    imgOffset: "left-[59px] top-[-313px]",
  },
  {
    title: "Tools and Evals",
    desc: "Open frameworks to test and trust Telugu AI so trust isn't assumed, it's measured",
    img: "/images/our-work/our-work-bg4.png",
    imgOffset: "left-[-497px] top-[-306px]",
    flip: true,
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-[#fcf5ef] w-full px-5 sm:px-10 md:px-[180px] py-[80px] flex flex-col gap-[64px]"
    >
      <div className="flex flex-col gap-[64px] items-center w-full">
        {/* Section label */}
        <div className="w-full flex flex-col gap-[24px] items-center max-w-[1089px]">
          <SectionLabel>Our work</SectionLabel>

          {/* Heading + subtitle */}
          <div className="flex flex-col gap-3 items-center">
            <h2
              className="text-[#1f1f1f] text-[32px] md:text-[42px] font-normal tracking-[-1.6px] leading-[56px] text-center"
              style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              Across modalities. One language.
            </h2>
            <p
              className="text-[#3d3d3d] text-[16px] md:text-[18.4px] leading-[28.8px] text-center max-w-[692px]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Small, efficient models built for the edge from text to voice to vision, across the full stack Telugu AI never had.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full max-w-[1089px] flex flex-col gap-[36px]">
          {/* Row 1: 3 equal cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[36px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#fed7aa] rounded-[8px] h-[296px] overflow-hidden relative shadow-[0px_1px_10px_0px_rgba(153,153,153,0.05)]"
              >
                <div className="absolute top-0 left-0 right-0 p-4 z-10">
                  <p
                    className="text-[20px] text-black font-normal tracking-[-0.2px]"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[14px] text-[#4b5563] font-normal tracking-[-0.2px] mt-2 max-w-[293px]"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
                <div
                  className={`absolute w-[921px] h-[518px] opacity-70 ${card.imgOffset}`}
                >
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: 2 wide cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[36px]">
            {wideCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#fed7aa] rounded-[8px] h-[296px] overflow-hidden relative shadow-[0px_1px_10px_0px_rgba(153,153,153,0.05)]"
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex items-center justify-between gap-8">
                  <p
                    className="text-[22px] text-black font-normal tracking-[-0.2px] whitespace-nowrap"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[14px] text-[#4b5563] font-normal tracking-[-0.2px] max-w-[260px]"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
                <div
                  className={`absolute w-[962px] h-[541px] opacity-70 ${card.imgOffset}`}
                  style={card.flip ? { transform: "scaleY(-1) rotate(180deg)" } : undefined}
                >
                  <img
                    src={card.img}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
