"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cloudinary optimized video URL
  // w_828: 2x the display width (414px) for retina displays
  // q_auto: automatic quality optimization
  // f_auto: automatic format selection (WebM for Chrome, MP4 for Safari)
  const videoSrc = "https://res.cloudinary.com/docmfqjtw/video/upload/w_828,q_auto,f_auto/vengi_cot5s8";

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load and play video when it comes into view
            if (videoElement.readyState === 0) {
              videoElement.load();
            }
            videoElement.play().catch(() => {
              // Autoplay might be blocked, that's okay
            });
          } else {
            // Pause video when out of view to save resources
            videoElement.pause();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before it enters viewport
        threshold: 0.1,
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#fcf5ef]">
      {/* 1. Desktop background painting */}
      <div className="hidden md:block absolute inset-0 pointer-events-none select-none">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* 2. Desktop gradient overlay */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(189.13deg, rgba(252,245,239,0) 24.57%, rgb(252,245,239) 62.16%)",
          transform: "scaleY(-1)",
        }}
      />

      {/* 3. Mobile background — fades top, clips below CTA, fades horizontal edges */}
      <div
        className="md:hidden absolute inset-x-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
        style={{
          top: "80px",
          height: "460px",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 6%, black 57%, transparent 63%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 6%, black 57%, transparent 63%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hero-bg-mobile.png"
          alt=""
          className="w-full h-full object-cover object-center opacity-60"
          style={{ transform: "scale(1.5)", transformOrigin: "center" }}
        />
      </div>

      {/* 3. Layer blur — desktop only, section-level (node 210:325) */}
      <div
        className="hidden md:block absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{ left: "867px", top: "39.4px", width: "608.5px", height: "426.5px" }}
      >
        <div className="absolute" style={{ inset: "-18.76% -13.15%" }}>
          <svg
            viewBox="0 0 768.5 586.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", width: "100%", height: "100%", overflow: "visible" }}
          >
            <defs>
              <filter id="hero-layer-blur-desktop" x="0" y="0" width="768.5" height="586.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
              </filter>
            </defs>
            <path
              d="M603.5 80L124 108.5L80 492.5L688.5 506.5L603.5 80Z"
              fill="#FCF6EE"
              filter="url(#hero-layer-blur-desktop)"
            />
          </svg>
        </div>
      </div>

      {/* 4. Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-20 py-[120.5px] md:pt-[170px] md:pb-[78px] gap-[88px] md:gap-0">

        {/* Mobile layer blur — node 307:161, inside content column */}
        <div
          className="md:hidden absolute pointer-events-none select-none"
          aria-hidden="true"
          style={{ left: "-82px", top: "232.5px", width: "567px", height: "433px" }}
        >
          <div className="absolute" style={{ inset: "-18.48% -14.11%" }}>
            <svg
              viewBox="0 0 727 593"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", height: "100%", overflow: "visible" }}
            >
              <defs>
                <filter id="hero-layer-blur-mobile" x="0" y="0" width="727" height="593" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
                </filter>
              </defs>
              <path
                d="M567.797 80L120.999 108.934L80 498.787L647 513L567.797 80Z"
                fill="#FCF6EE"
                filter="url(#hero-layer-blur-mobile)"
              />
            </svg>
          </div>
        </div>

        {/* Left text column */}
        <div className="flex flex-col gap-4 md:gap-8 relative shrink-0 w-full md:w-[775px]">
          <div className="flex flex-col gap-[12.9px] w-full">
            <div
              className="text-[#1f1f1f] text-[37px] md:text-[56px] font-normal tracking-[-1.6px] whitespace-pre-wrap w-full"
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontVariationSettings: "'opsz' 14, 'wdth' 100",
              }}
            >
              <p className="leading-normal mb-0">{`Telugu AI. `}</p>
              <p className="leading-normal">{`Built for Sovereignty `}</p>
            </div>
            <div className="pb-[0.7px] w-full">
              <p
                className="text-[#3d3d3d] text-[16px] md:text-[18.4px] leading-6 md:leading-[35px] font-normal"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                We build small, open-source language models for Telugu —
                designed to run offline, on low-cost devices.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <a
              href="#our-work"
              className="relative rounded-[12px] overflow-hidden transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ fontFamily: "var(--font-bricolage), sans-serif" }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-[#ff8f4c] to-[#f25d04] pointer-events-none"
              />
              <span className="absolute inset-0 rounded-[12px] shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.2)] pointer-events-none" />
              <span className="relative flex items-center justify-center px-6 py-3 text-white text-[16px] font-medium tracking-[-0.3px] text-center whitespace-nowrap">
                Explore our models
              </span>
            </a>
          </div>
        </div>

        {/* Video — full-width on mobile, free-floating on desktop */}
        <div
          className="relative shrink-0 w-full aspect-[414/297] md:w-[414px] md:h-[297px] md:aspect-auto"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to bottom, transparent, black 6%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to bottom, transparent, black 6%, black 88%, transparent)",
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster="/images/hero/hero-scribe.png"
            preload="none"
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover md:rounded-[20px]"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>

      {/* 5. Right floral — node 210:327 */}
      <div
        className="absolute hidden md:flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
        style={{ top: 0, right: 0, width: "295.01px", height: "256px" }}
      >
        <div style={{ transform: "scaleY(-1) rotate(180deg)" }}>
          <div className="relative" style={{ width: 295.01, height: 256 }}>
            <div
              className="absolute"
              style={{
                width: 448.609,
                height: 560.762,
                top: 7.31,
                left: 32.91,
                maskImage: "url('/images/hero/hero-floral-mask-right.svg')",
                maskMode: "alpha",
                maskSize: "754.07px 666.067px",
                maskPosition: "13.484px -107.848px",
                maskRepeat: "no-repeat",
                WebkitMaskImage: "url('/images/hero/hero-floral-mask-right.svg')",
                WebkitMaskSize: "754.07px 666.067px",
                WebkitMaskPosition: "13.484px -107.848px",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/hero-floral-texture.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Left floral — node 210:336 */}
      <div
        className="absolute hidden md:flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
        style={{ bottom: "245.2px", left: "-100.51px", width: "295.01px", height: "256px" }}
      >
        <div style={{ transform: "scaleY(-1) rotate(180deg)" }}>
          <div className="relative" style={{ width: 295.01, height: 256 }}>
            <div
              className="absolute"
              style={{
                width: 448.609,
                height: 560.762,
                top: -8.69,
                left: -111.09,
                maskImage: "url('/images/hero/hero-floral-mask-left.svg')",
                maskMode: "alpha",
                maskSize: "551.07px 550.067px",
                maskPosition: "-130.516px -116.848px",
                maskRepeat: "no-repeat",
                WebkitMaskImage: "url('/images/hero/hero-floral-mask-left.svg')",
                WebkitMaskSize: "551.07px 550.067px",
                WebkitMaskPosition: "-130.516px -116.848px",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero/hero-floral-texture.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ maxWidth: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
