import SectionLabel from "@/components/SectionLabel";

function CardFrame({ icon }: { icon: string }) {
  return (
    <div
      className="relative shrink-0 flex items-center justify-center"
      style={{ width: "246px", height: "248px", padding: "66px 59px" }}
    >
      {/* Grid background (includes corner markers and dotted border) */}
      <div
        className="absolute flex items-center justify-center"
        style={{ width: "254px", height: "246px", left: "-3.5px", top: "0.4px" }}
      >
        <img
          src="/images/support/support-frame-bg.png"
          alt=""
          className="absolute pointer-events-none object-cover"
          style={{ width: "254px", height: "261px" }}
        />
      </div>
      {/* Icon */}
      <div className="relative shrink-0 z-10" style={{ width: "135.83px", height: "135.83px" }}>
        <div className="absolute" style={{ inset: "-0.37%" }}>
          <img src={icon} alt="" className="block w-full h-full" />
        </div>
      </div>
    </div>
  );
}

const supportItems = [
  {
    icon: "/images/support/support-icon1.svg",
    title: "Compute Infrastructure",
    desc: "Access to GPUs and training resources to build and iterate on models.",
  },
  {
    icon: "/images/support/support-icon2.svg",
    title: "Data Development",
    desc: "Support for dataset creation, curation, and cultural grounding.",
  },
  {
    icon: "/images/support/support-icon3.svg",
    title: "Research & Engineering",
    desc: "Collaboration on models, systems, and evaluation.",
  },
];

export default function SupportTheWork() {
  return (
    <section
      id="support"
      className="w-full px-5 sm:px-10 md:px-[180px] py-20 bg-[#fcf5ef] flex flex-col gap-16"
    >
      <div className="flex flex-col gap-[64px] items-center w-full">
        {/* Section label + header */}
        <div className="w-full flex flex-col gap-6 items-center max-w-[1089px]">
          <SectionLabel>Support the work</SectionLabel>

          <div className="flex flex-col gap-3 items-center">
            <h2
              className="text-[#1f1f1f] text-[32px] md:text-[42px] font-normal tracking-[-1.6px] leading-14 text-center"
              style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
            >
              What we need to move faster.
            </h2>
            <p
              className="text-[#3d3d3d] text-[16px] md:text-[18.4px] leading-[28.8px] text-center max-w-[692px]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              We are looking for partners to support the next stage of this work.
            </p>
          </div>
        </div>

        {/* Support cards */}
        <div className="flex flex-col gap-[72px] items-start w-full max-w-[1089px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[36px] w-full">
            {supportItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                {/* Main card with icon */}
                <div className="bg-white border border-[#ffedd5] rounded-[8px] overflow-clip flex items-start justify-center px-[16px] py-[24px]">
                  <div className="flex flex-col gap-[21px] items-start">
                    <p
                      className="text-[20px] text-black font-normal tracking-[-0.2px] leading-normal whitespace-nowrap"
                      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                      {item.title}
                    </p>
                    <CardFrame icon={item.icon} />
                  </div>
                </div>
                {/* Description sub-card */}
                <div className="bg-white border border-[#ffedd5] rounded-[8px] overflow-clip px-[16px] py-[13px]">
                  <p
                    className="text-[14px] text-black font-normal tracking-[-0.2px] leading-normal"
                    style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="flex items-center gap-2 justify-center w-full">
            <div className="shrink-0 w-[15.837px] h-[16px] relative">
              <svg viewBox="0 0 15.8369 16" width="15.837" height="16" fill="none" className="absolute inset-0">
                <path d="M7.64177 7.96769C9.07266 6.66688 12.7149 4.84574 15.8369 7.96769C14.406 9.2685 10.7637 11.0896 7.64177 7.96769Z" fill="#FF8843" />
                <path d="M0 7.96769C1.43089 6.66688 5.07317 4.84574 8.19512 7.96769C6.76423 9.2685 3.12195 11.0896 0 7.96769Z" fill="#FF8843" />
                <path d="M7.80458 16C6.50377 14.5691 4.68263 10.9268 7.80458 7.80488C9.10539 9.23577 10.9265 12.878 7.80458 16Z" fill="#FF8843" />
                <path d="M7.80458 8.19512C6.50377 6.76423 4.68263 3.12195 7.80458 0C9.10539 1.43089 10.9265 5.07317 7.80458 8.19512Z" fill="#FF8843" />
              </svg>
            </div>
            <p
              className="text-[#374151] text-[20px] md:text-[24px] font-normal text-center leading-[28.8px]"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              With the right support, this evolves from research into infrastructure
            </p>
            <div className="shrink-0 w-[15.837px] h-[16px] relative">
              <svg viewBox="0 0 15.8369 16" width="15.837" height="16" fill="none" className="absolute inset-0">
                <path d="M7.64177 7.96769C9.07266 6.66688 12.7149 4.84574 15.8369 7.96769C14.406 9.2685 10.7637 11.0896 7.64177 7.96769Z" fill="#FF8843" />
                <path d="M0 7.96769C1.43089 6.66688 5.07317 4.84574 8.19512 7.96769C6.76423 9.2685 3.12195 11.0896 0 7.96769Z" fill="#FF8843" />
                <path d="M7.80458 16C6.50377 14.5691 4.68263 10.9268 7.80458 7.80488C9.10539 9.23577 10.9265 12.878 7.80458 16Z" fill="#FF8843" />
                <path d="M7.80458 8.19512C6.50377 6.76423 4.68263 3.12195 7.80458 0C9.10539 1.43089 10.9265 5.07317 7.80458 8.19512Z" fill="#FF8843" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
