// "use client";

// import { useEffect, useState, useCallback, useRef } from "react";

// /* ── constants ── */
// const SLIDE_DURATION = 15000;
// const FADE_DURATION = 850;
// const TOTAL_SLIDES = 5;

// /* Dark deep green — matches reference image */
// const DARK_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";

// /* Original brand gradient — kept for Slide 1 */
// const BRAND_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";

// /* ═══════════════════════════════════════════════════
//    SLIDE 1
// ═══════════════════════════════════════════════════ */
// function Slide1() {
//   return (
//     <section
//       className="overflow-hidden w-full h-full flex flex-col"
//       style={{ background: BRAND_BG }}
//     >
//       <div className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center md:pt-12">
//         <h1
//           className="text-3xl font-bold text-white md:text-5xl"
//           style={{ fontFamily: "'Syne', sans-serif" }}
//         >
//           The Largest Enterprise Cloud in Pakistan Powering Human Connections with AI
//         </h1>
//         <p
//           className="mt-0.5 text-base text-white md:text-lg"
//           style={{ fontFamily: "'DM Sans', sans-serif" }}
//         >
//           Decibel simplifies your HR digital transformation across all processes, from onboarding to retirement
//         </p>
//       </div>
//       <div className="relative z-0 -mt-20 flex-1 w-full overflow-hidden md:-mt-24">
//         <img
//           src="/images/hero trial.png"
//           alt="Hero Section"
//           style={{
//             width: "100%",
//             height: "calc(100% + 70px)",
//             objectFit: "cover",
//             objectPosition: "center top",
//             transform: "translateY(-105px) scale(0.9)",
//             display: "block",
//           }}
//         />
//       </div>
//     </section>
//   );
// }

// /* ═══════════════════════════════════════════════════
//    SHARED DARK SLIDE SHELL (Slides 2–5)
//    — matches reference: dark bg, natural text, CTA
// ═══════════════════════════════════════════════════ */
// function DarkSlide({ headline, body, cta, visual }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",          // ✅ vertical center
//         justifyContent: "center",
//         background: DARK_BG,
//         padding: "60px 24px",          // ✅ SAME spacing as video section
//         boxSizing: "border-box",
//       }}
//     >
//       {/* INNER LAYOUT (same as .layout) */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "clamp(30px, 6vw, 80px)",  // ✅ SAME gap
//           maxWidth: "1300px",
//           width: "100%",
//         }}
//       >

//         {/* LEFT — TEXT (same as .copy) */}
//         <div style={{ flex: 1, minWidth: 200 }}>
          
//           <h2 style={{
//             fontFamily: "'Syne', sans-serif",
//             fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", // ✅ SAME scale
//             fontWeight: 800,
//             color: "#f5fff8",
//             lineHeight: 1.25,
//             marginBottom: 10,
//             textTransform: "uppercase",
//           }}>
//             {headline.map((part, i) =>
//               part.yellow
//                 ? <span key={i} style={{ color: "#4cf29a" }}>{part.text}</span>
//                 : <span key={i}>{part.text}</span>
//             )}
//           </h2>

//           <p style={{
//             fontSize: 14,
//             color: "rgba(205, 221, 211, 0.72)",
//             lineHeight: 1.65,
//             margin: "14px 0 28px 0",
//             maxWidth: 320,   // ✅ MOST IMPORTANT (compact text)
//           }}>
//             {body}
//           </p>

      
//         </div>

//         {/* RIGHT — MOCKUP (same as .ipad-wrap) */}
//         <div style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           minWidth: 280,
//         }}>
//           {visual}
//         </div>

//       </div>
//     </div>
//   );
// }

// /* ── iPad mockup frame — taller, closer to reference ── */
// function ScreenFrame({ children }) {
//   return (
//     <div style={{
//       width: "clamp(340px, 52vw, 550px)",   // ✅ SAME
//       aspectRatio: "4 / 3",                 // ✅ SAME
//       background: "linear-gradient(145deg, #1c1c1c, #2a2a2a, #111)", // optional match
//       borderRadius: 28,
//       padding: 14,
//       boxShadow: `
//         0 0 0 1px rgba(0,0,0,0.08),
//         0 40px 80px rgba(0,0,0,0.18),
//         0 8px 30px rgba(0,0,0,0.1),
//         inset 0 1px 0 rgba(255,255,255,0.08)
//       `,
//       position: "relative",
//       overflow: "hidden",
//       zIndex: 1,
//     }}>

//       {/* screen */}
//       <div style={{
//         width: "100%",
//         height: "100%",
//         borderRadius: 16,
//         overflow: "hidden",
//         background: "#000",
//         position: "relative",
//       }}>
//         {children}
//       </div>

//       {/* home bar */}
//       <div style={{
//         position: "absolute",
//         bottom: 6,
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: 60,
//         height: 3,
//         borderRadius: 2,
//         background: "rgba(255,255,255,0.25)",
//       }} />
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════════════
//    VIDEO MOCKUP — clean, no badge overlay
// ═══════════════════════════════════════════════════ */
// function VideoMockup({ src }) {
//   const videoRef = useRef(null);
//   const [muted, setMuted] = useState(true);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setMuted(videoRef.current.muted);
//     }
//   };

//   return (
//     <ScreenFrame>
//     <video
//   ref={videoRef}
//   src={src}
//   autoPlay
//   loop
//   muted
//   playsInline
//   style={{
//     position: "absolute",
//     inset: 0,
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",     // ✅ fills entire frame (like 2nd image)
//     objectPosition: "center center", // ✅ perfect alignment
//   }}
// />

//       {/* mute button */}
//       <button
//         onClick={toggleMute}
//         style={{
//           position: "absolute",
//           bottom: 12,
//           left: 12,
//           zIndex: 4,
//           width: 28,
//           height: 28,
//           borderRadius: "50%",
//           background: "rgba(0,0,0,0.65)",
//           border: "1px solid rgba(255,255,255,0.15)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "pointer",
//           fontSize: 10,
//           color: "white",
//         }}
//       >
//         {muted ? "🔇" : "🔊"}
//       </button>
//     </ScreenFrame>
//   );
// }

// /* ═══════════════════════════════════════════════════
//    SLIDE CONFIG
// ═══════════════════════════════════════════════════ */
// const SLIDES_CONFIG = [
//   null,
//   {
//     headline: [
//       { text: "Transforming Your Journey with AI and ML: " },
//       { text: "A Seamless Technological Enhancement", yellow: true },
//     ],
//     body: "Streamline HR with a cloud-based solution that saves time and costs—so you can focus on core operations.",
//     cta: "Explore AI Features",
//     visual: <VideoMockup src="/video/0330(3).mp4" />,
//   },
//   {
//     headline: [
//       { text: "Zero Errors. Zero Delays. " },
//       { text: "Payroll On Autopilot.", yellow: true },
//     ],
//     body: "Fully automated payroll processing with tax compliance, multi-currency support, and one-click disbursement across Pakistan and beyond.",
//     cta: "See Payroll Module",
//     visual: <VideoMockup src="/video/slide 1.mp4" />,
//   },
//   {
//     headline: [
//       { text: "Hire Smarter, Hire Faster " },
//       { text: "with AI Matching.", yellow: true },
//     ],
//     body: "Let AI rank and shortlist your best-fit candidates automatically. Reduce time-to-hire by 60% with Decibel's intelligent recruitment engine.",
//     cta: "Explore Talent Module",
//     visual: <VideoMockup src="/video/slide 1.mp4" />,
//   },
//   {
//     headline: [
//       { text: "Every Employee. Every Journey. " },
//       { text: "One Platform.", yellow: true },
//     ],
//     body: "From goals to recognition, leaves to performance — give your people a workspace they'll love logging into every single day.",
//     cta: "Explore EX Module",
//     visual: <VideoMockup src="/video/slide 1.mp4" />,
//   },
// ];

// /* ═══════════════════════════════════════════════════
//    MAIN EXPORT
// ═══════════════════════════════════════════════════ */
// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const [prev, setPrev] = useState(null);
//   const [fading, setFading] = useState(false);

//   const goTo = useCallback((next) => {
//     if (fading) return;
//     setFading(true);
//     setPrev(current);
//     setCurrent(next);
//     setTimeout(() => { setPrev(null); setFading(false); }, FADE_DURATION);
//   }, [current, fading]);

//   useEffect(() => {
//     const t = setInterval(() => goTo((current + 1) % TOTAL_SLIDES), SLIDE_DURATION);
//     return () => clearInterval(t);
//   }, [current, goTo]);

//   const renderSlide = (idx) => {
//     if (idx === 0) return <Slide1 />;
//     const cfg = SLIDES_CONFIG[idx];
//     return <DarkSlide headline={cfg.headline} body={cfg.body} cta={cfg.cta} visual={cfg.visual} />;
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap');

//         @keyframes heroSlideIn {
//           from { opacity: 1; transform: translate3d(30%, 0, 0); }
//           to   { opacity: 1; transform: translate3d(0, 0, 0); }
//         }
//         @keyframes heroSlideOut {
//           from { opacity: 1; transform: translate3d(0, 0, 0); }
//           to   { opacity: 1; transform: translate3d(-30%, 0, 0); }
//         }
//         .hero-slide-in, .hero-slide-out { backface-visibility: hidden; will-change: transform; }
//         .hero-slide-in  { animation: heroSlideIn  ${FADE_DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
//         .hero-slide-out { animation: heroSlideOut ${FADE_DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
//       `}</style>

//       <section style={{ position: "relative", width: "100%", height: "112vh", minHeight: 700, overflow: "hidden" }}>

//         {prev !== null && (
//           <div key={`exit-${prev}`} className="hero-slide-out" style={{ position: "absolute", inset: 0, zIndex: 1 }}>
//             {renderSlide(prev)}
//           </div>
//         )}

//         <div key={`enter-${current}`} className="hero-slide-in" style={{ position: "absolute", inset: 0, zIndex: 2 }}>
//           {renderSlide(current)}
//         </div>

//         {/* dot nav */}
//         <div style={{
//           position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
//           zIndex: 200, display: "flex", gap: 8, alignItems: "center",
//         }}>
//           {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goTo(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               style={{
//                 width: current === i ? 28 : 8, height: 8, borderRadius: 4,
//                 padding: 0, border: "none", cursor: "pointer",
//                 background: current === i ? "#22c55e" : "rgba(255,255,255,0.25)",
//                 transition: "all 0.35s ease",
//               }}
//             />
//           ))}
//         </div>

//       </section>
//     </>
//   );
// }

"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const SLIDE_DURATION = 15000;
const FADE_DURATION = 850;
const TOTAL_SLIDES = 5;

const DARK_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";
const BRAND_BG = "linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)";

function Slide1() {
  return (
    <section
      className="overflow-hidden w-full h-full flex flex-col"
      style={{ background: BRAND_BG }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center md:pt-12">
        <h1
          className="text-3xl font-bold text-white md:text-5xl"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          The Largest Enterprise Cloud in Pakistan Powering Human Connections with AI
        </h1>
        <p
          className="mt-0.5 text-base text-white md:text-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Decibel simplifies your HR digital transformation across all processes, from onboarding to retirement
        </p>
      </div>
      <div className="relative z-0 -mt-20 flex-1 w-full overflow-hidden md:-mt-24">
        <img
          src="/images/hero trial.png"
          alt="Hero Section"
          style={{
            width: "100%",
            height: "calc(100% + 70px)",
            objectFit: "cover",
            objectPosition: "center top",
            transform: "translateY(-105px) scale(0.9)",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

function DarkSlide({ headline, body, cta, visual }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: DARK_BG,
        padding: "40px 48px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(40px, 7vw, 100px)",
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        {/* LEFT — TEXT */}
        <div style={{ flex: "0 0 38%" }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
            fontWeight: 800,
            color: "#f5fff8",
            lineHeight: 1.25,
            marginBottom: 10,
            textTransform: "uppercase",
          }}>
            {headline.map((part, i) =>
              part.yellow
                ? <span key={i} style={{ color: "#4cf29a" }}>{part.text}</span>
                : <span key={i}>{part.text}</span>
            )}
          </h2>

          <p style={{
            fontSize: 16,
            color: "rgba(205, 221, 211, 0.72)",
            lineHeight: 1.65,
            margin: "14px 0 28px 0",
            maxWidth: 420,
          }}>
            {body}
          </p>
        </div>

        {/* RIGHT — MOCKUP */}
        <div style={{
          flex: "0 0 55%",
          display: "flex",
          justifyContent: "center",
        }}>
          {visual}
        </div>
      </div>
    </div>
  );
}

function ScreenFrame({ children }) {
  return (
    <div style={{
      width: "clamp(420px, 62vw, 680px)",
      aspectRatio: "4 / 3",
      background: "linear-gradient(145deg, #1c1c1c, #2a2a2a, #111)",
      borderRadius: 28,
      padding: 14,
      boxShadow: `
        0 0 0 1px rgba(0,0,0,0.08),
        0 40px 80px rgba(0,0,0,0.18),
        0 8px 30px rgba(0,0,0,0.1),
        inset 0 1px 0 rgba(255,255,255,0.08)
      `,
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: "hidden",
        background: "#000",
        position: "relative",
        display: "flex",          // ✅ added
        alignItems: "center",     // ✅ added
        justifyContent: "center", // ✅ added
      }}>
        {children}
      </div>
      <div style={{
        position: "absolute",
        bottom: 6,
        left: "50%",
        transform: "translateX(-50%)",
        width: 60,
        height: 3,
        borderRadius: 2,
        background: "rgba(255,255,255,0.25)",
      }} />
    </div>
  );
}

function VideoMockup({ src }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <ScreenFrame>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",          // ✅ cover
          objectPosition: "center center",
          borderRadius: "16px",        // ✅ added
          display: "block",            // ✅ added
        }}
      />
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: 12,
          left: 12,
          zIndex: 4,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: 10,
          color: "white",
        }}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </ScreenFrame>
  );
}

const SLIDES_CONFIG = [
  null,
  {
    headline: [
      { text: "Transforming Your Journey with AI and ML: " },
      { text: "A Seamless Technological Enhancement", yellow: true },
    ],
    body: "Streamline HR with a cloud-based solution that saves time and costs—so you can focus on core operations.",
    cta: "Explore AI Features",
    visual: <VideoMockup src="/video/0330(3).mp4" />,
  },
  {
    headline: [
      { text: "Zero Errors. Zero Delays. " },
      { text: "Payroll On Autopilot.", yellow: true },
    ],
    body: "Fully automated payroll processing with tax compliance, multi-currency support, and one-click disbursement across Pakistan and beyond.",
    cta: "See Payroll Module",
    visual: <VideoMockup src="/video/slide 1.mp4" />,
  },
  {
    headline: [
      { text: "Hire Smarter, Hire Faster " },
      { text: "with AI Matching.", yellow: true },
    ],
    body: "Let AI rank and shortlist your best-fit candidates automatically. Reduce time-to-hire by 60% with Decibel's intelligent recruitment engine.",
    cta: "Explore Talent Module",
    visual: <VideoMockup src="/video/slide 1.mp4" />,
  },
  {
    headline: [
      { text: "Every Employee. Every Journey. " },
      { text: "One Platform.", yellow: true },
    ],
    body: "From goals to recognition, leaves to performance — give your people a workspace they'll love logging into every single day.",
    cta: "Explore EX Module",
    visual: <VideoMockup src="/video/slide 1.mp4" />,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((next) => {
    if (fading) return;
    setFading(true);
    setPrev(current);
    setCurrent(next);
    setTimeout(() => { setPrev(null); setFading(false); }, FADE_DURATION);
  }, [current, fading]);

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % TOTAL_SLIDES), SLIDE_DURATION);
    return () => clearInterval(t);
  }, [current, goTo]);

  const renderSlide = (idx) => {
    if (idx === 0) return <Slide1 />;
    const cfg = SLIDES_CONFIG[idx];
    return <DarkSlide headline={cfg.headline} body={cfg.body} cta={cfg.cta} visual={cfg.visual} />;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap');
        @keyframes heroSlideIn {
          from { opacity: 1; transform: translate3d(30%, 0, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes heroSlideOut {
          from { opacity: 1; transform: translate3d(0, 0, 0); }
          to   { opacity: 1; transform: translate3d(-30%, 0, 0); }
        }
        .hero-slide-in, .hero-slide-out { backface-visibility: hidden; will-change: transform; }
        .hero-slide-in  { animation: heroSlideIn  ${FADE_DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
        .hero-slide-out { animation: heroSlideOut ${FADE_DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94) forwards; }
      `}</style>

      <section style={{ position: "relative", width: "100%", height: "112vh", minHeight: 700, overflow: "hidden" }}>
        {prev !== null && (
          <div key={`exit-${prev}`} className="hero-slide-out" style={{ position: "absolute", inset: 0, zIndex: 1 }}>
            {renderSlide(prev)}
          </div>
        )}
        <div key={`enter-${current}`} className="hero-slide-in" style={{ position: "absolute", inset: 0, zIndex: 2 }}>
          {renderSlide(current)}
        </div>

        {/* dot nav */}
        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          zIndex: 200, display: "flex", gap: 8, alignItems: "center",
        }}>
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: current === i ? 28 : 8, height: 8, borderRadius: 4,
                padding: 0, border: "none", cursor: "pointer",
                background: current === i ? "#22c55e" : "rgba(255,255,255,0.25)",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}