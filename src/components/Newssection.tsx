"use client";
import { useState, useEffect, useRef, useCallback } from "react";

type NewsTag = "breaking" | "partnership" | "award" | "update" | "launch" | "culture";

interface NewsItem {
  id: number;
  tag: NewsTag;
  headline: string;
  shortDesc: string;
  fullContent: string;
  date: string;
  bgImage?: string;
}

const allNews: NewsItem[] = [
  {
    id: 1,
    tag: "partnership",
    headline: "Engro Enfrashare & Decibel HRMS — Strategic Partnership",
    shortDesc: "Infrastructure excellence meets smart digital HR. A new era of workforce transformation begins.",
    fullContent: `We are excited to announce a strategic partnership between Engro Enfrashare (Engro Group) and Decibel HRMS, bringing together infrastructure excellence and smart digital HR solutions.
Engro Enfrashare is a key player in Pakistan's telecom infrastructure landscape, known for building, managing, and scaling reliable shared infrastructure that supports nationwide connectivity. With a strong focus on operational excellence and sustainable growth, Engro Enfrashare continues to strengthen the country's digital backbone.
Through the integration of Decibel HRMS's advanced technology, this collaboration will streamline HR operations, enhance workforce efficiency, and empower teams with data-driven, agile HR processes.
This partnership reflects Engro Enfrashare's commitment to innovation and operational excellence, enabling the organization to scale efficiently in a fast-evolving industry.
A special thanks to Engro Enfrashare's leadership team, including Farooq Niaz - MCIPD and Shoaib Qureshi, whose vision and support made this collaboration possible.
Together, we are setting new standards in digital HR transformation and building a stronger, more connected future of work.`,
    date: "25.02.2025",
    bgImage: "/images/engro.png",
  },
  {
    id: 2,
    tag: "culture",
    headline: "Decibel HRMS Goes Live at YKK Pakistan",
    shortDesc: "It's the alignment behind the ambition. The collaboration behind the milestones. The people behind the performance.",
    fullContent: `A global leader renowned for precision, quality, and operational excellence, YKK Pakistan continues to set high standards across its business. The successful deployment of Decibel HRMS further strengthens YKK’s commitment to efficiency, accuracy, and scalable digital transformation.
The implementation spans key HR functions including Employee Data Management, Attendance, Leave, Payroll, Expense Management, and HR Helpdesk, enabling seamless automation, stronger controls, and improved visibility across the entire HR ecosystem.
This go-live reflects YKK Pakistan’s trust in Decibel HRMS as a long-term technology partner capable of supporting enterprise-grade, compliant, and future-ready HR operations.`,
    date: "20.02.2025",
    bgImage: "/images/news test.png",
  },
  {
    id: 3,
    tag: "partnership",
    headline: "Hascol Petroleum & Decibel HRMS — Strategic Partnership",
    shortDesc: "Driving digital transformation across Hascol's workforce and operations. Powering industries and communities across Pakistan.",
    fullContent: `We are thrilled to announce a strategic partnership between Hascol Petroleum Limited and Decibel HRMS to drive digital transformation across Hascol's workforce and operations.
As a leader in Pakistan's energy sector, Hascol Petroleum is committed to operational excellence, efficiency, and sustainable growth, powering industries and communities across the nation. This collaboration will integrate Decibel HRMS's cutting-edge technology to enhance workforce management, streamline HR operations, and equip Hascol's teams with data-driven tools to fuel performance and growth.
This partnership underscores Hascol's dedication to innovation and modernization, empowering them to scale efficiently and meet the dynamic demands of today's business landscape.
We extend our sincere appreciation to Javed Ahmedjee, CEO of Hascol, whose vision and leadership were instrumental in bringing this collaboration to life. Special thanks as well to Maira Akhtar and the Hascol HR team for their continued support, expertise, and dedication throughout this journey.
Together, Hascol and Decibel HRMS are setting new benchmarks in digital HR transformation driving efficiency, innovation, and long-term value creation across the petroleum sector.
Here's to a smarter, more connected, and future-ready workplace!`,
    date: "15.02.2025",
    bgImage: "/images/hascol.png",
  },
];

const tickerItems = [
  "Engro Enfrashare & Decibel HRMS — Strategic Partnership Announced",
  "Decibel HRMS 3.0 Now Live — Biggest Update Yet",
  "Best HR Tech Company — P@SHA ICT Awards 2024",
  "200+ Enterprise Clients Now on Decibel HRMS Platform",
];

const tagConfig: Record<NewsTag, { label: string; className: string }> = {
  breaking:    { label: "Breaking",    className: "bg-red-600 text-white" },
  partnership: { label: "Partnership", className: "text-emerald-400 border border-emerald-400" },
  award:       { label: "Award",       className: "text-emerald-300 border border-emerald-300" },
  update:      { label: "Update",      className: "text-gray-300 border border-gray-500" },
  launch:      { label: "Launch",      className: "text-emerald-400 border border-emerald-400" },
  culture:     { label: "Culture",     className: "text-rose-300 border border-rose-400" },
};

const SLIDE_DURATION = 7000;

// ── Decibel Green Palette ──
// Primary green:  #1D9E75
// Dark green bg:  #0a2e1f
// Mid green:      #0f4a30
// Accent bright:  #22c98a
// Progress bar:   #1D9E75

const styles = `
  .ns-syne { font-family: inherit; }
  .ns-mono { font-family: monospace; }

  .ns-live-dot { animation: ns-live 1.4s ease-in-out infinite; }
  @keyframes ns-live {
    0%,100% { opacity:1; transform:scale(1); }
    50%     { opacity:.4; transform:scale(.7); }
  }

  .ns-carousel {
    position: relative;
    overflow: hidden;
    height: 560px;
    background: transparent;
  }

  /* ── Slide ── */
  .ns-slide {
    position: absolute; inset: 0;
    display: grid; grid-template-columns: 1fr 1fr;
    opacity: 0; transform: translateX(40px);
    transition: opacity .65s ease, transform .65s ease;
    pointer-events: none;
  }
  .ns-slide.ns-active { opacity:1; transform:translateX(0); pointer-events:all; }
  .ns-slide.ns-exit   { opacity:0; transform:translateX(-40px); transition:opacity .45s ease, transform .45s ease; }

  /* ── Left pane ── */
  .ns-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 70px;
  position: relative;
  z-index: 2;

  background: linear-gradient(
    135deg,
    #061b14 0%,     /* deep black-green */
    #0a2e1f 35%,    /* base dark */
    #0f4a30 65%,    /* mid emerald */
    #1D9E75 100%    /* main green */
  );
}

/* ✨ Sexy Glow Overlay */
.ns-left::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;

  background: radial-gradient(
    circle at 20% 40%,
    rgba(43, 255, 173, 0.12),
    transparent 55%
  );

  pointer-events: none;
}

/* ensure content stays above overlay */
.ns-left > * {
  position: relative;
  z-index: 1;
}

  // background: linear-gradient(
  //   90deg,
  //   #0a2e1f 0%,
  //   #0f4a30 40%,
  //   #1D9E75 75%,
  //   rgba(29,158,117,0.85) 100%
  // );
}
  }

  /* subtle green grain overlay on left */
  .ns-left::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 20% 50%, rgba(233, 240, 238, 0.97) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── Right pane ── */
  .ns-right {
  width: 100  %;
  height: 100%;
  position: relative;
}
.ns-right-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ns-slide.ns-active .ns-right-img {
  transform: scale(1);
}

  /* Blend: dark green → transparent going right */
  .ns-right-fade {
    position: absolute; inset: 0; z-index: 1;
    .ns-right-fade {
  // background: linear-gradient(
  //   to right,
  //   rgba(10,46,31,0.95) 0%,
  //   rgba(232, 227, 224, 0.92) 30%,
  //   rgba(10,46,31,0.2) 60%,
  //   transparent 100%
  // );
}
  }

  /* ── Progress bars ── */
  .ns-prog-wrap {
    position: absolute; bottom: 0; left: 0; right: 0;
    z-index: 20; display: flex; gap: 2px;
  }
  // .ns-prog-seg {
  //   flex: 1; height: 3px;
  //   background: rgb(239, 231, 231);
  //   position: relative; overflow: hidden; cursor: pointer;
  // }
  // .ns-prog-fill {
  //   position: absolute; inset: 0;
  //   background: #000000;
  //   transform: scaleX(0); transform-origin: left;
  // }
  .ns-prog-seg.ns-prog-active .ns-prog-fill {
    animation: ns-fillbar var(--dur) linear forwards;
  }
  .ns-prog-seg.ns-prog-done .ns-prog-fill { transform: scaleX(1); }
  @keyframes ns-fillbar { from{transform:scaleX(0)} to{transform:scaleX(1)} }

  /* ── Nav arrows ── */
  // .ns-nav {
  //   position: absolute; top: 50%; transform: translateY(-50%);
  //   z-index: 20; width: 40px; height: 40px;
  //   background: rgb(0, 0, 0);
  //   border: 1px solid rgba(29,158,117,.35);
  //   color: #fff; font-size: 20px; cursor: pointer;
  //   display: flex; align-items: center; justify-content: center;
  //   transition: background .2s;
  // }
  // .ns-nav:hover { background: rgba(29,158,117,.35); }

  /* ── Read more ── */
  .ns-readmore {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;
    cursor: pointer; border: none; background: none; padding: 0;
    color: #1D9E75; position: relative; font-family: monospace;
  }
  .ns-readmore::after {
    content: ''; position: absolute; bottom: -2px; left: 0;
    width: 0; height: 1px; background: #1D9E75; transition: width .3s;
  }
  .ns-readmore:hover::after { width: 100%; }

  /* ── Ticker ── */
  .ns-ticker-track { animation: ns-ticker 28s linear infinite; display:flex; white-space:nowrap; }
  @keyframes ns-ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* ── Modal ── */
  .ns-modal-bg {
    position:fixed; inset:0; z-index:9999;
    background:rgba(0, 0, 0, 0.8); backdrop-filter:blur(6px);
    display:flex; align-items:center; justify-content:center; padding:20px;
    animation:ns-fadein .2s ease;
  }
  @keyframes ns-fadein { from{opacity:0} to{opacity:1} }
  .ns-modal {
    background:#fff; max-width:680px; width:100%;
    max-height:88vh; overflow-y:auto; position:relative;
    animation:ns-slidein .25s ease;
  }
  @keyframes ns-slidein {
    from{opacity:0;transform:translateY(24px)}
    to{opacity:1;transform:translateY(0)}
  }
  .ns-modal-header {
    background: linear-gradient(135deg, #0a2e1f 0%, #0f4a30 40%, #1D9E75 80%, #22c98a 100%);
    padding:36px 40px 28px; position:relative;
  }
  .ns-modal-body { padding:32px 40px 40px; }
  .ns-modal-body p { font-size:15px; line-height:1.85; color:rgba(0,0,0,.7); margin-bottom:18px; }
  .ns-modal-close {
    position:absolute; top:16px; right:16px; width:36px; height:36px;
    background:rgba(255,255,255,.1); border:none; cursor:pointer; color:white;
    font-size:18px; display:flex; align-items:center; justify-content:center;
    transition:background .2s;
  }
  .ns-modal-close:hover { background:rgba(255,255,255,.2); }

  /* Responsive */
  @media(max-width:768px){
    .ns-carousel { height:auto; }
    .ns-slide { grid-template-columns:1fr; position:relative; }
    .ns-right { height:260px; }
    .ns-left { padding:36px 28px; }
  }
`;

function NewsModal({ news, onClose }: { news: NewsItem; onClose: () => void }) {
  const tag = tagConfig[news.tag];
  const paragraphs = news.fullContent.split("\n\n").filter(Boolean);
  return (
    <div className="ns-modal-bg" onClick={onClose}>
      <div className="ns-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ns-modal-header">
          <button className="ns-modal-close" onClick={onClose}>✕</button>
          <span className={`ns-mono mb-4 inline-block px-2.5 py-1 text-[9px] uppercase tracking-[.2em] ${tag.className}`}>
            {tag.label}
          </span>
          <h2 className="mt-2 leading-none text-white" style={{ fontSize: 34, fontWeight: 700 }}>
            {news.headline}
          </h2>
          <p className="ns-mono mt-3 text-[11px] tracking-wider" style={{ color: "rgb(0, 0, 0)" }}>
            {news.date}
          </p>
        </div>
        <div className="ns-modal-body">
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="flex overflow-hidden" style={{ height: 38, background: "#ff2b2b" }}>
      <div
        className="ns-mono flex shrink-0 items-center px-4 text-[9px] uppercase tracking-[.2em] text-white whitespace-nowrap"
        style={{ background: "#1D9E75" }}
      >
        Latest
      </div>
      <div className="flex items-center overflow-hidden" style={{ borderTop: "1px solid rgba(255, 0, 0, 0.93)" }}>
        <div className="ns-ticker-track">
          {doubled.map((text, i) => (
            <span key={i} className="ns-mono px-10 text-[12px] tracking-widest" style={{ color: "rgba(255,255,255,.6)" }}>
              <span className="ns-mono px-10 text-[12px] tracking-widest" style={{ color: "#ff2b2b" }}></span>
              {text} <span style={{ color: "#1D9E75", opacity: .6 }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NewsSection() {
  const [current, setCurrent] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => { setPrevIndex(c); return (c + 1) % allNews.length; });
    }, SLIDE_DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), 700);
    return () => clearTimeout(t);
  }, [prevIndex]);

  const handleNav = (dir: number) => {
    const next = (current + dir + allNews.length) % allNews.length;
    setPrevIndex(current);
    setCurrent(next);
    startTimer();
  };

  return (
    <>
      <style>{styles}</style>
      {activeNews && <NewsModal news={activeNews} onClose={() => setActiveNews(null)} />}

      <section className="ns-syne w-full px-4 py-8 sm:px-6 lg:px-10">
        {/* Top bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-y-3">
          <span className="ns-mono text-[13px] uppercase tracking-[.4em]" style={{ color: "rgba(0, 0, 0, 0.99)" }}>
            Company News
          </span>
          <div
            className="ns-mono flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[.15em]"
            style={{ color: "#1D9E75", border: "1px solid rgba(29,158,117,.4)" }}
          >
            <span className="ns-live-dot inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#070707" }} />
            Live Updates
          </div>
        </div>

        {/* Carousel */}
        <div className="ns-carousel">
          {allNews.map((news, i) => {
            const tag = tagConfig[news.tag];
            const isActive = i === current;
            const isExit = i === prevIndex;

            return (
              <div
                key={news.id}
                className={`ns-slide${isActive ? " ns-active" : ""}${isExit ? " ns-exit" : ""}`}
              >
                {/* LEFT */}
                <div className="ns-left">
                  <span className={`ns-mono mb-5 inline-flex w-fit items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-[.2em] ${tag.className}`}>
                    {tag.label}
                  </span>

                  <h2
  style={{
    fontSize: "clamp(34px, 4vw, 64px)",
    lineHeight: 1.05,
    fontWeight: 800,
    letterSpacing: "-0.01em",
    color: "#E6F4EE",
    marginBottom: 20,
  }}
>
                    {news.headline.split("Decibel HRMS").map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          // <em className="not-italic" style={{ color: "#1D9E75" }}>Decibel HRMS</em>
                          <em
  className="not-italic"
  style={{
    color: "#22c98a",
    fontWeight: 900,
  }}
>
  Decibel HRMS
</em>
                        )}
                      </span>
                    ))}
                  </h2>

                  {/* <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgb(255, 255, 255)", maxWidth: 380, marginBottom: 32 }}> */}
                  <p
  style={{
    fontSize: 15,
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.75)",
    maxWidth: 420,
    marginBottom: 36,
  }}
>
                    {news.shortDesc}
                  </p>

                  <div
                    className="flex items-center justify-between"
                    style={{ borderTop: "1px solid rgb(216, 232, 227)", paddingTop: 18, maxWidth: 380 }}
                  >
                    {/* <span className="ns-mono text-[11px] tracking-wider" style={{ color: "rgb(255, 255, 255)" }}> */}
                    <span
  className="ns-mono mb-5 inline-flex w-fit items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-[.2em]"
  style={{
    border: "1px solid #22c98a",
    color: "#22c98a",
  }}
>
                      {news.date}
                    </span>
                    <button className="ns-readmore" onClick={() => setActiveNews(news)}>
                      Read More ↗
                    </button>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="ns-right">
                  <div
                    className="ns-right-img"
                    style={{
                      backgroundImage: news.bgImage ? `url('${news.bgImage}')` : "none",
                      backgroundColor: "#ffffff",
                    }}
                  />
                  <div className="ns-right-fade" />
                </div>
              </div>
            );
          })}

          {/* Progress bars */}
          <div className="ns-prog-wrap">
            {allNews.map((_, i) => (
              <div
                key={i}
                className={`ns-prog-seg${i === current ? " ns-prog-active" : ""}${i < current ? " ns-prog-done" : ""}`}
                style={{ "--dur": `${SLIDE_DURATION}ms` } as React.CSSProperties}
                onClick={() => { setPrevIndex(current); setCurrent(i); startTimer(); }}
              >
                <div className="ns-prog-fill" />
              </div>
            ))}
          </div>

          {/* Nav */}
          <button className="ns-nav" style={{ left: 16 }} onClick={() => handleNav(-1)}>‹</button>
          <button className="ns-nav" style={{ right: 16 }} onClick={() => handleNav(1)}>›</button>
        </div>

        <Ticker />
      </section>
    </>
  );
}