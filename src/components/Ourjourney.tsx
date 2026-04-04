// "use client";
// import { useEffect, useRef } from "react";

// const milestones = [
//   {
//     id: "2009", year: "2009", title: "Getting Started",
//     desc: "Joined hands with Syed Azhar Ali with a vision of introducing the concept of digitalization in HRMS field.",
//     img: "/images/timeline/2009.png", above: true,
//   },
//   {
//     id: "2011", year: "2011", title: "First Client: British Petroleum",
//     desc: "Achieved the successful conversion of our initial client — British Petroleum with over 50 Employees.",
//     img: "/images/timeline/2011.png", above: false,
//   },
//   {
//     id: "2013", year: "2013", title: "Converted 23 Clients",
//     desc: "Successfully converted 23 clients with 4396+ Employee base across multiple industries.",
//     img: "/images/timeline/2013.png", above: true,
//   },
//   {
//     id: "2014", year: "2014", title: "Launched Decibel 4",
//     desc: "Successfully introduced Decibel 4, accompanied by growth to 15 dedicated professionals, serving 30 clients on our Enterprise Cloud Platform.",
//     img: "/images/timeline/2014.jpg", above: false,
//   },
//   {
//     id: "2016", year: "2016", title: "Mobile App Launched",
//     desc: "Decibel embarked on a full digital transformation with the unveiling of our innovative Mobile App.",
//     img: "/images/timeline/2016.png", above: true,
//   },
//   {
//     id: "2017", year: "2017", title: "Platform as a Service",
//     desc: "Total Parco stood as our inaugural SaaS client — a landmark collaboration with over 400 dedicated employees.",
//     img: "/images/timeline/2017.png", above: false,
//   },
//   {
//     id: "2018", year: "2018", title: "50,000+ Employees",
//     desc: "Our cloud size increased to 50k+ employees with an annual payroll turnover of $10 Million.",
//     img: "/images/timeline/2018.png", above: true,
//   },
//   {
//     id: "2021", year: "2021", title: "5th Version of Decibel",
//     desc: "Launched the 5th Version of Decibel for Web Portal and Mobile App with major feature upgrades.",
//     img: "/images/timeline/2021.png", above: false,
//   },
//   {
//     id: "2022", year: "2022", title: "Global Expansion & Buyout",
//     desc: "Marked by a Management Buyout and impressive global expansion — seamless conversion of Mondelez and payroll management across 7 countries.",
//     img: "/images/timeline/2022.png", above: true,
//   },
//   {
//     id: "2024", year: "2024", title: "Best in BPO Services Award",
//     desc: 'Expanded to 9 countries, serving 300+ clients, and won the prestigious "Best in BPO Services" accreditation by HBL P@SHA.',
//     img: "/images/timeline/2024.png", above: false,
//   },
// ];

// const dots = [
//   { x: 160,  y: 60  },
//   { x: 380,  y: 240 },
//   { x: 600,  y: 60  },
//   { x: 820,  y: 240 },
//   { x: 1040, y: 60  },
//   { x: 1260, y: 240 },
//   { x: 1480, y: 60  },
//   { x: 1700, y: 240 },
//   { x: 1920, y: 60  },
//   { x: 2140, y: 240 },
// ];

// const svgPath = `
//   M 0,150 C 80,150 120,60 160,60
//   S 240,240 380,240 S 520,60 600,60
//   S 680,240 820,240 S 960,60 1040,60
//   S 1120,240 1260,240 S 1400,60 1480,60
//   S 1560,240 1700,240 S 1840,60 1920,60
//   S 2000,240 2140,240 S 2320,150 2400,150
// `;

// export default function OurJourney() {
//   const journeyRef = useRef(null);
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const journey = journeyRef.current;
//     const track = trackRef.current;
//     if (!journey || !track) return;

//     const svgMask = document.querySelector(".mask-path");
//     const menuLinks = document.querySelectorAll("#journey .yearbook ul li");
//     const marker = document.querySelector(".indicator");

//     menuLinks.forEach((item) => {
//       item.addEventListener("click", function () {
//         document.querySelectorAll("#journey .yearbook ul li.active").forEach((el) => el.classList.remove("active"));
//         this.classList.add("active");
//         if (marker) marker.style.transform = `translateX(${this.offsetLeft}px)`;
//       });
//     });

//     const handleScroll = () => {
//       if (!journey || !svgMask || !track) return;
//       const journeyRect = journey.getBoundingClientRect();
//       const journeyTop = window.scrollY + journeyRect.top;
//       const positionPath = window.scrollY - journeyTop;
//       svgMask.style.strokeDashoffset = String(Math.max(0, 10000 - positionPath * 3));
//       const maxScroll = journey.offsetHeight - window.innerHeight;
//       const progress = Math.max(0, Math.min(1, positionPath / Math.max(maxScroll, 1)));
//       const maxTranslate = track.scrollWidth - track.offsetWidth;
//       track.style.transform = `translateX(-${progress * maxTranslate}px)`;
//       const years = ["2009","2011","2013","2014","2016","2017","2018","2021","2022","2024"];
//       const idx = Math.min(Math.floor(progress * years.length), years.length - 1);
//       menuLinks.forEach((li) => li.classList.remove("active"));
//       if (idx >= 0 && menuLinks[idx]) {
//         menuLinks[idx].classList.add("active");
//         if (marker) marker.style.transform = `translateX(${menuLinks[idx].offsetLeft}px)`;
//       }
//     };

//     document.addEventListener("scroll", handleScroll);
//     return () => document.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{`
//         /* ─── Section ─── */
//         #journey {
//           font-family: inherit;
//           height: 400vh;
//           position: relative;
//         }
//         #journey .sticky-wrap {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           overflow: visible;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           background: #fff;
//           padding: 30px 0 0;
//         }

//         /* ─── Heading ─── */
//         #journey h2 {
//           font-size: 42px;
//           letter-spacing: -0.5px;
//           color: #16141a;
//           position: relative;
//           display: block;
//           font-weight: 700;
//           margin: 0 0 20px 0;
//           flex-shrink: 0;
//           text-align: center;
//         }
//         #journey h2::before {
//           content: "";
//           position: absolute;
//           right: calc(50% - 123px);
//           bottom: 5px;
//           z-index: -1;
//           width: 123px;
//           height: 16px;
//           background-color: #e5f7e5;
//         }

//         /* ─── Yearbook bar ─── */
//         #journey .yearbook-bar {
//           flex-shrink: 0;
//           padding: 0 40px 18px;
//           position: relative;
//         }
//         #journey .yearbook-bar ul {
//           display: flex;
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           border-bottom: 4px solid #b6f0b6;
//         }
//         #journey .yearbook-bar ul li {
//           font-size: 21px;
//           font-weight: 500;
//           color: #16141a;
//           flex: 1;
//           text-align: center;
//           padding-bottom: 8px;
//           cursor: pointer;
//         }
//         #journey .yearbook-bar ul li a {
//           color: #16141a;
//           text-decoration: none;
//           transition: color 0.3s;
//         }
//         #journey .yearbook-bar ul li.active a {
//           color: #22a722;
//           font-weight: 700;
//         }
//         #journey .yearbook-bar .indicator {
//           transition: transform 0.4s ease;
//           position: absolute;
//           bottom: 14px;
//           left: 40px;
//           width: 26px;
//           height: 26px;
//           border: 3px solid #22a722;
//           background-color: #fff;
//           border-radius: 100%;
//           display: block;
//           pointer-events: none;
//         }
//         #journey .yearbook-bar .indicator::before {
//           content: "";
//           position: absolute;
//           bottom: -13px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-style: solid;
//           border-width: 9px 5px 0 5px;
//           border-color: #22a722 transparent transparent transparent;
//         }

//         /* ─── Track ─── */
//         #journey .track-overflow {
//           flex: 1;
//           overflow: visible;
//         }
//         #journey .track {
//           display: flex;
//           align-items: center;
//           height: 100%;
//           transition: transform 0.05s linear;
//           will-change: transform;
//           padding: 0 60px;
//         }
//         #journey .svg-track {
//           position: relative;
//           height: 420px;
//           display: flex;
//           align-items: center;
//           overflow: visible;
//         }

//         /* ─── Circle wrapper ─── */
//         #journey .circle-wrap {
//           position: absolute;
//           transform: translate(-50%, -50%);
//           z-index: 10;
//           cursor: pointer;
//           /* Extra hitbox so tooltip doesn't flicker at edges */
//           padding: 16px;
//           margin: -16px;
//         }

//         /* ─── Circle ─── */
//         #journey .path-circle {
//           width: 160px;
//           height: 160px;
//           border-radius: 50%;
//           border: 5px solid #22a722;
//           background: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//         }
//         #journey .circle-wrap:hover .path-circle {
//           transform: scale(1.1);
//           box-shadow: 0 6px 24px rgba(34,167,34,0.35);
//         }
//         #journey .path-circle img {
//           max-width: 130px;
//           max-height: 130px;
//           object-fit: contain;
//           pointer-events: none;
//         }

//         /* ─── Year label ─── */
//         #journey .path-year {
//           position: absolute;
//           left: 50%;
//           transform: translateX(-50%);
//           font-size: 20px;
//           font-weight: 800;
//           color: #22a722;
//           white-space: nowrap;
//           pointer-events: none;
//         }

//         /* ─── Title label (always visible) ─── */
//         #journey .path-title {
//           position: absolute;
//           left: 50%;
//           transform: translateX(-50%);
//           font-size: 13px;
//           font-weight: 600;
//           color: #22a722;
//           text-align: center;
//           width: 200px;
//           white-space: normal;
//           line-height: 1.3;
//           pointer-events: none;
//         }

//         /* ════════════════════════════════════════
//            TOOLTIP — Pure CSS, no JS coordinates
//            Lives inside .circle-wrap → always
//            positioned relative to the circle.
//            ════════════════════════════════════════ */
//         #journey .journey-tooltip {
//           position: absolute;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 230px;
//           background: #fff;
//           border: 2px solid #22a722;
//           border-radius: 12px;
//           padding: 14px 16px;
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
//           pointer-events: none;
//           z-index: 9999;
//           text-align: center;

//           /* Hidden by default */
//           opacity: 0;
//           visibility: hidden;
//           transition: opacity 0.18s ease, visibility 0.18s ease;
//         }

//         /* Show on hover — parent (.circle-wrap) hover triggers it */
//         #journey .circle-wrap:hover .journey-tooltip {
//           opacity: 1;
//           visibility: visible;
//         }

//         #journey .journey-tooltip h3 {
//           font-size: 13px;
//           font-weight: 700;
//           color: #22a722;
//           margin: 0 0 7px;
//           line-height: 1.4;
//         }
//         #journey .journey-tooltip p {
//           font-size: 11.5px;
//           color: #444;
//           margin: 0;
//           line-height: 1.55;
//         }

//         /* Arrow when tooltip is ABOVE the circle */
//         #journey .journey-tooltip.tt-above {
//           bottom: calc(100% + 14px);
//         }
//         #journey .journey-tooltip.tt-above::after {
//           content: "";
//           position: absolute;
//           bottom: -9px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-style: solid;
//           border-width: 8px 7px 0 7px;
//           border-color: #22a722 transparent transparent transparent;
//         }
//         #journey .journey-tooltip.tt-above::before {
//           content: "";
//           position: absolute;
//           bottom: -6px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-style: solid;
//           border-width: 7px 6px 0 6px;
//           border-color: #fff transparent transparent transparent;
//           z-index: 1;
//         }

//         /* Arrow when tooltip is BELOW the circle */
//         #journey .journey-tooltip.tt-below {
//           top: calc(100% + 14px);
//         }
//         #journey .journey-tooltip.tt-below::after {
//           content: "";
//           position: absolute;
//           top: -9px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-style: solid;
//           border-width: 0 7px 8px 7px;
//           border-color: transparent transparent #22a722 transparent;
//         }
//         #journey .journey-tooltip.tt-below::before {
//           content: "";
//           position: absolute;
//           top: -6px;
//           left: 50%;
//           transform: translateX(-50%);
//           border-style: solid;
//           border-width: 0 6px 7px 6px;
//           border-color: transparent transparent #fff transparent;
//           z-index: 1;
//         }

//         /* ─── SVG mask ─── */
//         .mask-path {
//           stroke: white;
//           stroke-dasharray: 10000;
//           stroke-dashoffset: 10000;
//         }
//       `}</style>

//       <section id="journey" ref={journeyRef}>
//         <div className="sticky-wrap">
//           <h2>Our Evolution</h2>

//           {/* Yearbook bar */}
//           <div className="yearbook-bar">
//             <div className="yearbook">
//               <ul>
//                 {["2009","2011","2013","2014","2016","2017","2018","2021","2022","2024"].map((y) => (
//                   <li key={y} className={`y-${y}`}>
//                     <a href={`#yb-${y}`}>{y}</a>
//                   </li>
//                 ))}
//               </ul>
//               <span className="indicator" />
//             </div>
//           </div>

//           {/* Track */}
//           <div className="track-overflow">
//             <div className="track" ref={trackRef}>
//               <div className="svg-track">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 2400 300"
//                   height="300"
//                   width="2400"
//                   style={{ display: "block", flexShrink: 0, marginTop: 60 }}
//                 >
//                   <path
//                     id="Default"
//                     fill="none"
//                     stroke="#E6EAEB"
//                     strokeWidth="6"
//                     strokeMiterlimit="10"
//                     d={svgPath}
//                   />
//                   <path
//                     mask="url('#hmask')"
//                     id="Active"
//                     fill="none"
//                     stroke="#22a722"
//                     strokeWidth="6"
//                     strokeMiterlimit="10"
//                     d={svgPath}
//                   />
//                   <defs>
//                     <mask id="hmask">
//                       <path
//                         className="mask-path"
//                         fill="none"
//                         stroke="white"
//                         strokeWidth="60"
//                         strokeMiterlimit="10"
//                         d={svgPath}
//                       />
//                     </mask>
//                   </defs>
//                 </svg>

//                 {milestones.map((m, i) => {
//                   const dot = dots[i];
//                   const cx = dot.x;
//                   const cy = dot.y + 60;

//                   /*
//                    * Tooltip position rule:
//                    *  - m.above = true  → circle is on TOP of path  → tooltip goes ABOVE circle
//                    *  - m.above = false → circle is on BOTTOM        → tooltip goes BELOW circle
//                    *
//                    * Year label is always on the opposite side from the path centre (150px).
//                    * Title label sits opposite to the year.
//                    */
//                   // m.above=true  → circle is HIGH (y=60)   → tooltip goes BELOW (more space)
//                   // m.above=false → circle is LOW  (y=240)  → tooltip goes ABOVE (more space)
//                   const tooltipClass = m.above ? "tt-below" : "tt-above";

//                   return (
//                     <div
//                       key={m.id}
//                       id={`yb-${m.id}`}
//                       className="circle-wrap"
//                       style={{ left: cx, top: cy }}
//                     >
//                       {/* ── Tooltip (pure CSS hover, no JS) ── */}
//                       <div className={`journey-tooltip ${tooltipClass}`}>
//                         <h3>{m.title}</h3>
//                         <p>{m.desc}</p>
//                       </div>

//                       {/* ── Circle image ── */}
//                       <div className="path-circle">
//                         <img src={m.img} alt={m.year} />
//                       </div>

//                       {/* ── Year label ── */}
//                       <div
//                         className="path-year"
//                         style={m.above ? { bottom: "calc(100% + 8px)" } : { top: "calc(100% + 8px)" }}
//                       >
//                         {m.year}
//                       </div>

//                       {/* ── Title label ── */}
//                       <div
//                         className="path-title"
//                         style={m.above ? { top: "calc(100% + 32px)" } : { bottom: "calc(100% + 32px)" }}
//                       >
//                         {m.title}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";
import { useEffect, useRef } from "react";

const milestones = [
  {
    id: "2009", year: "2009", title: "Getting Started",
    desc: "Joined hands with Syed Azhar Ali with a vision of introducing the concept of digitalization in HRMS field.",
    img: "/images/timeline/2009.png", above: true,
  },
  {
    id: "2011", year: "2011", title: "First Client: British Petroleum",
    desc: "Achieved the successful conversion of our initial client — British Petroleum with over 50 Employees.",
    img: "/images/timeline/2011.png", above: false,
  },
  {
    id: "2013", year: "2013", title: "Converted 23 Clients",
    desc: "Successfully converted 23 clients with 4396+ Employee base across multiple industries.",
    img: "/images/timeline/2013.png", above: true,
  },
  {
    id: "2014", year: "2014", title: "Launched Decibel 4",
    desc: "Successfully introduced Decibel 4, accompanied by growth to 15 dedicated professionals, serving 30 clients on our Enterprise Cloud Platform.",
    img: "/images/timeline/2014.jpg", above: false,
  },
  {
    id: "2016", year: "2016", title: "Mobile App Launched",
    desc: "Decibel embarked on a full digital transformation with the unveiling of our innovative Mobile App.",
    img: "/images/timeline/2016.png", above: true,
  },
  {
    id: "2017", year: "2017", title: "Platform as a Service",
    desc: "Total Parco stood as our inaugural SaaS client — a landmark collaboration with over 400 dedicated employees.",
    img: "/images/timeline/2017.png", above: false,
  },
  {
    id: "2018", year: "2018", title: "50,000+ Employees",
    desc: "Our cloud size increased to 50k+ employees with an annual payroll turnover of $10 Million.",
    img: "/images/timeline/2018.png", above: true,
  },
  {
    id: "2021", year: "2021", title: "5th Version of Decibel",
    desc: "Launched the 5th Version of Decibel for Web Portal and Mobile App with major feature upgrades.",
    img: "/images/timeline/2021.png", above: false,
  },
  {
    id: "2022", year: "2022", title: "Global Expansion",
    desc: "Marked by a Management Buyout and impressive global expansion — seamless conversion of Mondelez and payroll management across 7 countries.",
    img: "/images/timeline/2022.png", above: true,
  },
  {
    id: "2024", year: "2024", title: "Best in BPO Services Award",
    desc: 'Expanded to 9 countries, serving 300+ clients, and won the prestigious "Best in BPO Services" accreditation by HBL P@SHA.',
    img: "/images/timeline/2024.png", above: false,
  },
];

const dots = [
  { x: 160,  y: 60  },
  { x: 380,  y: 240 },
  { x: 600,  y: 60  },
  { x: 820,  y: 240 },
  { x: 1040, y: 60  },
  { x: 1260, y: 240 },
  { x: 1480, y: 60  },
  { x: 1700, y: 240 },
  { x: 1920, y: 60  },
  { x: 2140, y: 240 },
];

const svgPath = `
  M 0,150 C 80,150 120,60 160,60
  S 240,240 380,240 S 520,60 600,60
  S 680,240 820,240 S 960,60 1040,60
  S 1120,240 1260,240 S 1400,60 1480,60
  S 1560,240 1700,240 S 1840,60 1920,60
  S 2000,240 2140,240 S 2320,150 2400,150
`;

const G = "#22b840"; // ← single source of truth for green

export default function OurJourney() {
  const journeyRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const journey = journeyRef.current;
    const track   = trackRef.current;
    if (!journey || !track) return;

    const svgMask   = document.querySelector(".mask-path") as SVGPathElement | null;
    const menuLinks = document.querySelectorAll("#journey .yearbook ul li");
    const marker    = document.querySelector(".indicator") as HTMLElement | null;

    menuLinks.forEach((item) => {
      item.addEventListener("click", function (this: HTMLElement) {
        document.querySelectorAll("#journey .yearbook ul li.active")
          .forEach((el) => el.classList.remove("active"));
        this.classList.add("active");
        if (marker) marker.style.transform = `translateX(${this.offsetLeft}px)`;
      });
    });

    const handleScroll = () => {
      if (!journey || !svgMask || !track) return;
      const journeyTop   = window.scrollY + journey.getBoundingClientRect().top;
      const positionPath = window.scrollY - journeyTop;
      svgMask.style.strokeDashoffset = String(Math.max(0, 10000 - positionPath * 3));
      const maxScroll    = journey.offsetHeight - window.innerHeight;
      const progress     = Math.max(0, Math.min(1, positionPath / Math.max(maxScroll, 1)));
      const maxTranslate = track.scrollWidth - track.offsetWidth;
      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      const years = ["2009","2011","2013","2014","2016","2017","2018","2021","2022","2024"];
      const idx   = Math.min(Math.floor(progress * years.length), years.length - 1);
      menuLinks.forEach((li) => li.classList.remove("active"));
      if (idx >= 0 && menuLinks[idx]) {
        (menuLinks[idx] as HTMLElement).classList.add("active");
        if (marker)
          marker.style.transform = `translateX(${(menuLinks[idx] as HTMLElement).offsetLeft}px)`;
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        #journey {
          font-family: inherit;
          height: 400vh;
          position: relative;
        }
        #journey .sticky-wrap {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #fff;
          padding-top: 32px;
          padding-bottom: 24px;
          box-sizing: border-box;
        }

        /* ─── Heading ─── */
        #journey h2 {
          font-size: 38px;
          letter-spacing: -0.5px;
          color: #16141a;
          position: relative;
          display: block;
          font-weight: 700;
          margin: 0 0 12px 0;
          flex-shrink: 0;
          text-align: center;
        }
        #journey h2::before {
          content: "";
          position: absolute;
          right: calc(50% - 123px);
          bottom: 5px;
          z-index: -1;
          width: 123px;
          height: 14px;
          
        }

        /* ─── Yearbook bar ─── */
        #journey .yearbook-bar {
          flex-shrink: 0;
          padding: 0 40px 14px;
          position: relative;
        }
        #journey .yearbook-bar ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          border-bottom: 4px solid #b6f5b6;
        }
        #journey .yearbook-bar ul li {
          font-size: 18px;
          font-weight: 500;
          color: #16141a;
          flex: 1;
          text-align: center;
          padding-bottom: 6px;
          cursor: pointer;
        }
        #journey .yearbook-bar ul li a {
          color: #16141a;
          text-decoration: none;
          transition: color 0.3s;
        }
        #journey .yearbook-bar ul li.active a {
          color: #22b840;
          font-weight: 700;
        }
        #journey .yearbook-bar .indicator {
          transition: transform 0.4s ease;
          position: absolute;
          bottom: 10px;
          left: 40px;
          width: 24px;
          height: 24px;
          border: 3px solid #22b840;
          background-color: #fff;
          border-radius: 100%;
          display: block;
          pointer-events: none;
        }
        #journey .yearbook-bar .indicator::before {
          content: "";
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          border-style: solid;
          border-width: 8px 5px 0 5px;
          border-color: #22b840 transparent transparent transparent;
        }

        /* ─── Track ─── */
        #journey .track-overflow {
          flex: 1;
          overflow: visible;
          min-height: 0;
          margin-top: 8px;
        }
        #journey .track {
          display: flex;
          align-items: center;
          height: 100%;
          transition: transform 0.05s linear;
          will-change: transform;
          padding: 0 60px;
        }
        #journey .svg-track {
          position: relative;
          height: 380px;
          display: flex;
          align-items: center;
          overflow: visible;
        }

        /* ─── Circle wrapper ─── */
        #journey .circle-wrap {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 10;
          cursor: pointer;
          padding: 16px;
          margin: -16px;
        }

        /* ─── Circle ─── */
        #journey .path-circle {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 5px solid #22b840;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        #journey .circle-wrap:hover .path-circle {
          transform: scale(1.08);
          box-shadow: 0 6px 24px rgba(34,184,64,0.3);
        }
        #journey .path-circle img {
          max-width: 115px;
          max-height: 115px;
          object-fit: contain;
          pointer-events: none;
        }

        /* ─── Year label ─── */
        #journey .path-year {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 18px;
          font-weight: 800;
          color: #22b840;
          white-space: nowrap;
          pointer-events: none;
        }

        /* ─── Title label ─── */
        #journey .path-title {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          font-weight: 600;
          color: #22b840;
          text-align: center;
          width: 180px;
          white-space: normal;
          line-height: 1.3;
          pointer-events: none;
        }

        /* ─── Tooltip ─── */
        #journey .journey-tooltip {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 220px;
          background: #fff;
          border: 2px solid #22b840;
          border-radius: 12px;
          padding: 12px 14px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          pointer-events: none;
          z-index: 9999;
          text-align: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.18s ease, visibility 0.18s ease;
        }
        #journey .circle-wrap:hover .journey-tooltip {
          opacity: 1;
          visibility: visible;
        }
        #journey .journey-tooltip h3 {
          font-size: 12px;
          font-weight: 700;
          color: #22b840;
          margin: 0 0 6px;
          line-height: 1.4;
        }
        #journey .journey-tooltip p {
          font-size: 11px;
          color: #444;
          margin: 0;
          line-height: 1.5;
        }
        #journey .journey-tooltip.tt-above {
          bottom: calc(100% + 12px);
        }
        #journey .journey-tooltip.tt-above::after {
          content: "";
          position: absolute;
          bottom: -9px; left: 50%;
          transform: translateX(-50%);
          border-style: solid;
          border-width: 8px 7px 0 7px;
          border-color: #22b840 transparent transparent transparent;
        }
        #journey .journey-tooltip.tt-above::before {
          content: "";
          position: absolute;
          bottom: -6px; left: 50%;
          transform: translateX(-50%);
          border-style: solid;
          border-width: 7px 6px 0 6px;
          border-color: #fff transparent transparent transparent;
          z-index: 1;
        }
        #journey .journey-tooltip.tt-below {
          top: calc(100% + 12px);
        }
        #journey .journey-tooltip.tt-below::after {
          content: "";
          position: absolute;
          top: -9px; left: 50%;
          transform: translateX(-50%);
          border-style: solid;
          border-width: 0 7px 8px 7px;
          border-color: transparent transparent #22b840 transparent;
        }
        #journey .journey-tooltip.tt-below::before {
          content: "";
          position: absolute;
          top: -6px; left: 50%;
          transform: translateX(-50%);
          border-style: solid;
          border-width: 0 6px 7px 6px;
          border-color: transparent transparent #fff transparent;
          z-index: 1;
        }

        .mask-path {
          stroke: white;
          stroke-dasharray: 10000;
          stroke-dashoffset: 10000;
        }
      `}</style>

      <section id="journey" ref={journeyRef}>
        <div className="sticky-wrap">
          <h2>Our Evolution</h2>

          {/* Yearbook bar */}
          <div className="yearbook-bar">
            <div className="yearbook">
              <ul>
                {["2009","2011","2013","2014","2016","2017","2018","2021","2022","2024"].map((y) => (
                  <li key={y} className={`y-${y}`}>
                    <a href={`#yb-${y}`}>{y}</a>
                  </li>
                ))}
              </ul>
              <span className="indicator" />
            </div>
          </div>

          {/* Track */}
          <div className="track-overflow">
            <div className="track" ref={trackRef}>
              <div className="svg-track">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2400 300"
                  height="300"
                  width="2400"
                  style={{ display: "block", flexShrink: 0, marginTop: 40 }}
                >
                  <path
                    fill="none"
                    stroke="#E6EAEB"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    d={svgPath}
                  />
                  <path
                    mask="url('#hmask')"
                    fill="none"
                    stroke={G}
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    d={svgPath}
                  />
                  <defs>
                    <mask id="hmask">
                      <path
                        className="mask-path"
                        fill="none"
                        stroke="white"
                        strokeWidth="60"
                        strokeMiterlimit="10"
                        d={svgPath}
                      />
                    </mask>
                  </defs>
                </svg>

                {milestones.map((m, i) => {
  const dot = dots[i];
  const cx  = dot.x;
  const cy  = dot.y + 40;
  const tooltipClass = m.above ? "tt-below" : "tt-above";

  return (
    <div
      key={m.id}
      id={`yb-${m.id}`}
      className="circle-wrap"
      style={{ left: cx, top: cy }}
    >
      <div className={`journey-tooltip ${tooltipClass}`}>
        <h3>{m.title}</h3>
        <p>{m.desc}</p>
      </div>

      <div className="path-circle">
        <img src={m.img} alt={m.year} />
      </div>

      {/* Year — ALWAYS below circle */}
      <div className="path-year" style={{ top: "calc(100% + 6px)" }}>
        {m.year}
      </div>

      {/* Title — ALWAYS below year */}
      <div className="path-title" style={{ top: "calc(100% + 30px)" }}>
        {m.title}
      </div>
    </div>
  );
})}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}