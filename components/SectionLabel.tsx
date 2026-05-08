const DOT_PATH = (
  <>
    <path d="M2.70572 2.82112C3.21236 2.36054 4.50198 1.71573 5.60737 2.82112C5.10073 3.2817 3.81111 3.92651 2.70572 2.82112Z" fill="#FF8843" />
    <path d="M0 2.82112C0.506636 2.36054 1.79626 1.71573 2.90165 2.82112C2.39501 3.2817 1.10539 3.92651 0 2.82112Z" fill="#FF8843" />
    <path d="M2.76337 5.66512C2.30279 5.15848 1.65798 3.86886 2.76337 2.76347C3.22395 3.27011 3.86875 4.55973 2.76337 5.66512Z" fill="#FF8843" />
    <path d="M2.76337 2.90165C2.30279 2.39501 1.65798 1.10539 2.76337 0C3.22395 0.506636 3.86875 1.79626 2.76337 2.90165Z" fill="#FF8843" />
  </>
);

function Dot() {
  return (
    <svg viewBox="0 0 5.60737 5.66512" width="5.607" height="5.665" fill="none" className="shrink-0">
      {DOT_PATH}
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 15.8369 16" width="15.837" height="16" fill="none" className="shrink-0">
      <path d="M7.64177 7.96769C9.07266 6.66688 12.7149 4.84574 15.8369 7.96769C14.406 9.2685 10.7637 11.0896 7.64177 7.96769Z" fill="#FF8843" />
      <path d="M0 7.96769C1.43089 6.66688 5.07317 4.84574 8.19512 7.96769C6.76423 9.2685 3.12195 11.0896 0 7.96769Z" fill="#FF8843" />
      <path d="M7.80458 16C6.50377 14.5691 4.68263 10.9268 7.80458 7.80488C9.10539 9.23577 10.9265 12.878 7.80458 16Z" fill="#FF8843" />
      <path d="M7.80458 8.19512C6.50377 6.76423 4.68263 3.12195 7.80458 0C9.10539 1.43089 10.9265 5.07317 7.80458 8.19512Z" fill="#FF8843" />
    </svg>
  );
}

function EyeLine() {
  return (
    <div className="relative h-0 w-full">
      <div className="absolute" style={{ inset: "-1px 0" }}>
        <svg
          viewBox="0 0 1080 2"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          fill="none"
          overflow="visible"
          style={{ display: "block" }}
        >
          <path d="M0 1H1080" stroke="#FED7AA" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  const dots = Array.from({ length: 100 });
  return (
    <div className="w-full shrink-0">
      <EyeLine />
      <div className="flex items-center gap-2 py-[6px]">
        <div className="flex-1 flex flex-wrap gap-[6px] items-center overflow-hidden max-h-[18px] min-w-0">
          {dots.map((_, i) => <Dot key={i} />)}
        </div>
        <Cross />
        <span
          className="text-[#6b7280] text-[18px] font-normal whitespace-nowrap shrink-0"
          style={{ fontFamily: "var(--font-bricolage), sans-serif", fontVariationSettings: "'opsz' 14, 'wdth' 100" }}
        >
          {children}
        </span>
        <Cross />
        <div className="flex-1 flex flex-wrap gap-[6px] items-center overflow-hidden max-h-[18px] min-w-0">
          {dots.map((_, i) => <Dot key={i} />)}
        </div>
      </div>
      <EyeLine />
    </div>
  );
}
