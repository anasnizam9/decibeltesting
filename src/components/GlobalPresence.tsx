// "use client";
// import { useEffect, useRef, useState } from "react";

// const COUNTRIES = [
//   { id: "us",  label: "United States",  cx: 175, cy: 150, type: "branch", labelPos: "below", flag: "https://flagcdn.com/w40/us.png" },
//   { id: "uk",  label: "United Kingdom", cx: 410, cy: 130, type: "hq",     labelPos: "above", flag: "https://flagcdn.com/w40/gb.png" },
//   { id: "lb",  label: "Lebanon",        cx: 530, cy: 135, type: "hq",     labelPos: "above", flag: "https://flagcdn.com/w40/lb.png" },
//   { id: "bh",  label: "Bahrain",        cx: 555, cy: 158, type: "hq",     labelPos: "right", flag: "https://flagcdn.com/w40/bh.png" },
//   { id: "pk",  label: "Pakistan",       cx: 612, cy: 188, type: "hq",     labelPos: "right", flag: "https://flagcdn.com/w40/pk.png" },
//   { id: "uae", label: "UAE",            cx: 558, cy: 215, type: "hq",     labelPos: "below", flag: "https://flagcdn.com/w40/ae.png" },
//   { id: "mo",  label: "Morocco",        cx: 430, cy: 208, type: "branch", labelPos: "below", flag: "https://flagcdn.com/w40/ma.png" },
//   { id: "eg",  label: "Egypt",          cx: 490, cy: 218, type: "branch", labelPos: "below", flag: "https://flagcdn.com/w40/eg.png" },
//   { id: "sa",  label: "Saudi Arabia",   cx: 520, cy: 228, type: "branch", labelPos: "below", flag: "https://flagcdn.com/w40/sa.png" },
// ] as const;

// type CountryId = (typeof COUNTRIES)[number]["id"];

// const CONNECTIONS: [CountryId, CountryId][] = [
//   ["us", "uk"], ["uk", "lb"], ["uk", "mo"], ["lb", "bh"],
//   ["bh", "uae"], ["uae", "pk"], ["sa", "uae"], ["mo", "eg"], ["eg", "sa"],
// ];

// const ARC_LIFT = 50;

// interface Packet { id: number; fromId: string; toId: string; t: number; speed: number; }
// let uid = 0;
// function getC(id: string) { return COUNTRIES.find(c => c.id === id)!; }
// function qBez(ax: number, ay: number, bx: number, by: number, t: number) {
//   const mx = (ax + bx) / 2, my = Math.min(ay, by) - ARC_LIFT;
//   return { x: (1-t)*(1-t)*ax + 2*(1-t)*t*mx + t*t*bx, y: (1-t)*(1-t)*ay + 2*(1-t)*t*my + t*t*by };
// }
// function pathD(aId: string, bId: string) {
//   const a = getC(aId), b = getC(bId);
//   return `M${a.cx},${a.cy} Q${(a.cx+b.cx)/2},${Math.min(a.cy,b.cy)-ARC_LIFT} ${b.cx},${b.cy}`;
// }
// function labelProps(c: (typeof COUNTRIES)[number]) {
//   if (c.labelPos === "above") return { x: c.cx,      y: c.cy - 28, anchor: "middle" as const };
//   if (c.labelPos === "below") return { x: c.cx,      y: c.cy + 26, anchor: "middle" as const };
//   return                             { x: c.cx + 16, y: c.cy + 4,  anchor: "start"  as const };
// }

// function CountryFlag({ cx, cy, flagUrl, color, isHq }: {
//   cx: number; cy: number; flagUrl: string; color: string; isHq: boolean;
// }) {
//   const r = 11, clipId = `cf-${cx}-${cy}`;
//   return (
//     <g>
//       <defs><clipPath id={clipId}><circle cx={cx} cy={cy} r={r} /></clipPath></defs>
//       <image href={flagUrl} x={cx-r} y={cy-r} width={r*2} height={r*2}
//         clipPath={`url(#${clipId})`} preserveAspectRatio="xMidYMid slice" />
//       <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="1.8"
//         filter={isHq ? "url(#gRed)" : "url(#gBlue)"} />
//     </g>
//   );
// }

// const PULSE_DURS = Object.fromEntries(COUNTRIES.map(c => [c.id, (2.4 + Math.random() * 1.2).toFixed(1)]));
// const STATS_DATA = [
//   { value: "16+",        label: "Years of Service" },
//   { value: "09",         label: "Countries" },
//   { value: "300,000+",   label: "Active Employees" },
//   { value: "300+",       label: "Clients" },
//   { value: "45+",        label: "Clients Over 1,000 Employees" },
//   { value: "3,000,000+", label: "Pay Slips Per Annum" },
// ];

// export default function GlobalNetworkMap() {
//   const rafRef    = useRef<number>(0);
//   const lastSpawn = useRef<number>(0);
//   const [packets, setPackets] = useState<Packet[]>([]);

//   useEffect(() => {
//     const loop = (ts: number) => {
//       if (ts - lastSpawn.current > 260) {
//         lastSpawn.current = ts;
//         const conn = CONNECTIONS[Math.floor(Math.random() * CONNECTIONS.length)];
//         const reverse = Math.random() > 0.5;
//         setPackets(prev => [...prev.slice(-80), {
//           id: uid++,
//           fromId: reverse ? conn[1] : conn[0],
//           toId:   reverse ? conn[0] : conn[1],
//           t: 0,
//           speed: 0.004 + Math.random() * 0.003,
//         }]);
//       }
//       setPackets(prev => prev.map(p => ({ ...p, t: p.t + p.speed })).filter(p => p.t < 1));
//       rafRef.current = requestAnimationFrame(loop);
//     };
//     rafRef.current = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   return (
//     <div style={{ width: "100%", fontFamily: "'Syne','DM Sans',sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
//         @keyframes scan { 0%{top:0%} 100%{top:110%} }
//         @keyframes pulseWhite {
//           0%,100% { opacity: .45; transform: scale(1);   }
//           50%     { opacity: 0;   transform: scale(2.1); }
//         }
//         .pulse-ring {
//           transform-box: fill-box;
//           transform-origin: center;
//           animation-name: pulseWhite;
//           animation-timing-function: ease-in-out;
//           animation-iteration-count: infinite;
//         }
//       `}</style>

//       <div style={{
//         background: "linear-gradient(135deg,#154d46 0%,#13674f 25%,#22b840 60%,#82e8a6 100%)",
//         position: "relative",
//         overflow: "hidden",
//       }}>
//         {/* Scan line */}
//         <div style={{
//           position: "absolute", left: 0, right: 0, height: 2,
//           background: "linear-gradient(transparent,rgba(255,255,255,.07),transparent)",
//           animation: "scan 5s linear infinite", pointerEvents: "none", zIndex: 2,
//         }} />
//         {/* Dot grid */}
//         <svg style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:.05,pointerEvents:"none",zIndex:1 }}>
//           <defs>
//             <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
//               <circle cx="1" cy="1" r="1" fill="#fff"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#dots)"/>
//         </svg>

//         {/* HEADING — FIX 1: padding bottom 18px → 32px */}
//         <div style={{
//           position: "relative", zIndex: 6, textAlign: "center",
//           padding: "28px 36px 32px",
//           background: "transparent", // ← yeh add karo
//           // borderBottom: "1px solid rgba(255,255,255,0.12)",
//         }}>
//           <div style={{
//             fontSize: 10, fontWeight: 700, letterSpacing: "2px",
//             textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8,
//           }}>
//             Breaking Barriers, Embracing Success With A Human Resource Management System
//           </div>
//           <div style={{
//             fontSize: "clamp(18px,2.8vw,32px)", fontWeight: 800, color: "#ffffff",
//             lineHeight: 1.15, letterSpacing: "1px", textTransform: "uppercase",
//             textShadow: "0 2px 16px rgba(0,0,0,0.3)",
//           }}>
//             Global Presence
//           </div>
//         </div>

//         {/* MAP SVG — FIX 2: marginTop + viewBox y 60→90 */}
//         <div style={{ position: "relative", zIndex: 5 }}>
//           <svg viewBox="60 -20 820 420" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
//             <defs>
//               <filter id="gRed"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
//               <filter id="gBlue"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
//               <filter id="gPkt"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
//             </defs>

//             <image href="/images/world-map.png" x="0" y="0" width="900" height="440"
//               preserveAspectRatio="xMidYMid slice" opacity={0.18} />

//             {CONNECTIONS.map(([aId, bId]) => (
//               <path key={`${aId}-${bId}`} d={pathD(aId, bId)} fill="none"
//                 stroke="rgba(130,232,166,0.28)" strokeWidth="1" strokeDasharray="5,5" />
//             ))}

//             {packets.map(p => {
//               const a = getC(p.fromId), b = getC(p.toId);
//               const pos = qBez(a.cx, a.cy, b.cx, b.cy, p.t);
//               const opacity = p.t < 0.08 ? p.t/0.08 : p.t > 0.92 ? (1-p.t)/0.08 : 1;
//               return <circle key={p.id} cx={pos.x} cy={pos.y} r="4"
//                 fill="rgba(255,255,255,0.95)" opacity={opacity} filter="url(#gPkt)" />;
//             })}

//             {COUNTRIES.map(c => {
//               const lbl = labelProps(c), dur = PULSE_DURS[c.id];
//               return (
//                 <g key={c.id}>
//                   <circle cx={c.cx} cy={c.cy} r="12" fill="none" stroke="#fff" strokeWidth="1.2"
//                     className="pulse-ring"
//                     style={{ animationDuration: `${dur}s` }} />
//                   <circle cx={c.cx} cy={c.cy} r="11" fill="rgba(10,25,15,0.8)" />
//                   <CountryFlag cx={c.cx} cy={c.cy} flagUrl={c.flag} color="#ffffff" isHq={c.type === "hq"} />
//                   <text x={lbl.x} y={lbl.y} textAnchor={lbl.anchor} fontSize="12" fontWeight="700"
//                     fill="#ffffff" fontFamily="'Syne',sans-serif">
//                     {c.label}
//                   </text>
//                 </g>
//               );
//             })}
//           </svg>
//         </div>

//         {/* STATS BAR */}
//         <div style={{ position: "relative", zIndex: 6, padding: "18px 24px 22px" }}>
//           <div style={{
//             background: "#ffffff", borderRadius: 14, padding: "4px 0",
//             boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
//           }}>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 0 }}>
//               {STATS_DATA.map((stat, i) => (
//                 <div key={stat.label} style={{
//                   textAlign: "center", padding: "14px 8px",
//                   borderRight: i < STATS_DATA.length - 1 ? "1.5px solid #e5e7eb" : "none",
//                 }}>
//                   <div style={{
//                     fontSize: "clamp(16px,2vw,26px)", fontWeight: 800, color: "#111111",
//                     fontFamily: "'Syne',sans-serif", lineHeight: 1, letterSpacing: "-0.5px",
//                   }}>{stat.value}</div>
//                   <div style={{
//                     fontSize: "clamp(7px,0.85vw,10px)", color: "#555555",
//                     marginTop: 5, fontWeight: 600, textTransform: "uppercase",
//                     letterSpacing: "0.5px", lineHeight: 1.4,
//                   }}>{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

const COUNTRIES = [
  { id: "us",  label: "United States",  cx: 175, cy: 150, type: "branch", flag: "https://flagcdn.com/w40/us.png" },
  { id: "uk",  label: "United Kingdom", cx: 430, cy: 130, type: "hq",     flag: "https://flagcdn.com/w40/gb.png" },
  { id: "lb",  label: "Lebanon",        cx: 530, cy: 135, type: "hq",     flag: "https://flagcdn.com/w40/lb.png" },
  { id: "bh",  label: "Bahrain",        cx: 555, cy: 158, type: "hq",     flag: "https://flagcdn.com/w40/bh.png" },
  { id: "pk",  label: "Pakistan",       cx: 612, cy: 188, type: "hq",     flag: "https://flagcdn.com/w40/pk.png" },
  { id: "uae", label: "UAE",            cx: 558, cy: 215, type: "hq",     flag: "https://flagcdn.com/w40/ae.png" },
  { id: "mo",  label: "Morocco",        cx: 430, cy: 208, type: "branch", flag: "https://flagcdn.com/w40/ma.png" },
  { id: "eg",  label: "Egypt",          cx: 490, cy: 218, type: "branch", flag: "https://flagcdn.com/w40/eg.png" },
  { id: "sa",  label: "Saudi Arabia",   cx: 520, cy: 228, type: "branch", flag: "https://flagcdn.com/w40/sa.png" },
] as const;

type CountryId = (typeof COUNTRIES)[number]["id"];

const CONNECTIONS: [CountryId, CountryId][] = [
  ["us", "uk"], ["uk", "lb"], ["uk", "mo"], ["lb", "bh"],
  ["bh", "uae"], ["uae", "pk"], ["sa", "uae"], ["mo", "eg"], ["eg", "sa"],
];

const ARC_LIFT = 50;

function getC(id: string) { return COUNTRIES.find(c => c.id === id)!; }

function arcPath(aId: string, bId: string) {
  const a = getC(aId), b = getC(bId);
  const mx = (a.cx + b.cx) / 2;
  const my = Math.min(a.cy, b.cy) - ARC_LIFT;
  return `M${a.cx},${a.cy} Q${mx},${my} ${b.cx},${b.cy}`;
}

// Pre-generate packets: each connection gets 3 forward + 2 reverse, staggered delays
const PACKETS: { id: string; path: string; dur: number; delay: number }[] = [];
CONNECTIONS.forEach(([aId, bId], ci) => {
  const baseDur = 7.5 + (ci % 4) * 0.8;
  [0, 1, 2].forEach((i) => {
    PACKETS.push({
      id: `pkt-${ci}-f-${i}`,
      path: arcPath(aId, bId),
      dur: baseDur,
      delay: -(i * (baseDur / 3) + ci * 0.4),
    });
  });
  [0, 1].forEach((i) => {
    PACKETS.push({
      id: `pkt-${ci}-r-${i}`,
      path: arcPath(bId, aId),
      dur: baseDur + 0.6,
      delay: -(i * ((baseDur + 0.6) / 2) + ci * 0.3 + 1.0),
    });
  });
});

const PIN_R = 11;
const PIN_OFFSET = 10;
const TIP_EXTRA = 8;

function pinPathD(cx: number, cy: number): string {
  const oy = cy - PIN_OFFSET;
  const dist = TIP_EXTRA + PIN_R;
  const a = Math.asin(PIN_R / dist);
  const lx = cx - Math.cos(a) * PIN_R;
  const ly = oy + Math.sin(a) * PIN_R;
  const rx = cx + Math.cos(a) * PIN_R;
  const ry = oy + Math.sin(a) * PIN_R;
  const tipY = oy + PIN_R + TIP_EXTRA;
  return `M ${cx} ${tipY} L ${lx} ${ly} A ${PIN_R} ${PIN_R} 0 1 1 ${rx} ${ry} Z`;
}

function tooltipWidth(label: string): number {
  return Math.max(label.length * 7 + 20, 60);
}

function CountryPin({
  cx, cy, flagUrl, label, isHq,
}: {
  cx: number; cy: number; flagUrl: string; label: string; isHq: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const circleY = cy - PIN_OFFSET;
  const clipId = `cf-${cx}-${cy}`;
  const tW = tooltipWidth(label);

  return (
    <g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Pin shadow */}
      <path
        d={pinPathD(cx, cy)}
        fill="rgba(0,0,0,0.28)"
        transform="translate(1,2)"
      />

      {/* Pin main shape */}
      <path
        d={pinPathD(cx, cy)}
        fill="rgba(10,25,15,0.92)"
        stroke="#ffffff"
        strokeWidth="1.5"
        filter={isHq ? "url(#gRed)" : "url(#gBlue)"}
      />

      {/* Flag clip */}
      <defs>
        <clipPath id={clipId}>
          <circle cx={cx} cy={circleY} r={PIN_R} />
        </clipPath>
      </defs>

      {/* Flag image */}
      <image
        href={flagUrl}
        x={cx - PIN_R} y={circleY - PIN_R}
        width={PIN_R * 2} height={PIN_R * 2}
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid slice"
      />

      {/* Circle border over flag */}
      <circle
        cx={cx} cy={circleY} r={PIN_R}
        fill="none" stroke="#ffffff" strokeWidth="1.8"
      />

      {/* Tooltip on hover */}
      {hovered && (
        <g style={{ pointerEvents: "none" }}>
          <rect
            x={cx - tW / 2}
            y={circleY - PIN_R - 24}
            width={tW}
            height={18}
            rx={4}
            fill="rgba(10,20,15,0.88)"
          />
          <polygon
            points={`${cx - 5},${circleY - PIN_R - 6} ${cx + 5},${circleY - PIN_R - 6} ${cx},${circleY - PIN_R - 1}`}
            fill="rgba(10,20,15,0.88)"
          />
          <text
            x={cx}
            y={circleY - PIN_R - 11}
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="#ffffff"
            fontFamily="'Syne',sans-serif"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

const STATS_DATA = [
  { value: "16+",        label: "Years of Service" },
  { value: "09",         label: "Countries" },
  { value: "300,000+",   label: "Active Employees" },
  { value: "300+",       label: "Clients" },
  { value: "45+",        label: "Clients Over 1,000 Employees" },
  { value: "3,000,000+", label: "Pay Slips Per Annum" },
];

export default function GlobalNetworkMap() {
  return (
    <div style={{ width: "100%", fontFamily: "'Syne','DM Sans',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        @keyframes scan { 0%{top:0%} 100%{top:110%} }
      `}</style>

      <div style={{
        background: "linear-gradient(135deg,#154d46 0%,#13674f 25%,#22b840 60%,#82e8a6 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Scan line */}
        <div style={{
          position: "absolute", left: 0, right: 0, height: 2,
          background: "linear-gradient(transparent,rgba(255,255,255,.07),transparent)",
          animation: "scan 5s linear infinite", pointerEvents: "none", zIndex: 2,
        }} />

        {/* Dot grid */}
        <svg style={{ position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:.05,pointerEvents:"none",zIndex:1 }}>
          <defs>
            <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#fff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>

        {/* Heading */}
        <div style={{
          position: "relative", zIndex: 6, textAlign: "center",
          padding: "28px 36px 32px",
        }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "2px",
            textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8,
          }}>
            Breaking Barriers, Embracing Success With A Human Resource Management System
          </div>
          <div style={{
            fontSize: "clamp(18px,2.8vw,32px)", fontWeight: 800, color: "#ffffff",
            lineHeight: 1.15, letterSpacing: "1px", textTransform: "uppercase",
            textShadow: "0 2px 16px rgba(0,0,0,0.3)",
          }}>
            Global Presence
          </div>
        </div>

        {/* Map SVG */}
        <div style={{ position: "relative", zIndex: 5 }}>
          <svg
            viewBox="60 -20 820 420"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block", overflow: "visible" }}
          >
            <defs>
              <filter id="gRed">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="gBlue">
                <feGaussianBlur stdDeviation="2.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="gPkt">
                <feGaussianBlur stdDeviation="1.5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* World map */}
            <image
              href="/images/world-map.png"
              x="0" y="0" width="900" height="440"
              preserveAspectRatio="xMidYMid slice"
              opacity={0.18}
            />

            {/* Connection arcs */}
            {CONNECTIONS.map(([aId, bId]) => (
              <path
                key={`arc-${aId}-${bId}`}
                d={arcPath(aId, bId)}
                fill="none"
                stroke="rgba(130,232,166,0.28)"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            ))}

            {/* Packets — pure SVG animateMotion, no JS loop */}
            {PACKETS.map(pkt => (
              <circle
                key={pkt.id}
                r="3.5"
                fill="rgba(255,255,255,0.92)"
                filter="url(#gPkt)"
              >
                <animateMotion
                  dur={`${pkt.dur}s`}
                  begin={`${pkt.delay}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.4 0 0.6 1"
                  path={pkt.path}
                />
                <animate
                  attributeName="opacity"
                  dur={`${pkt.dur}s`}
                  begin={`${pkt.delay}s`}
                  repeatCount="indefinite"
                  values="0;1;1;0"
                  keyTimes="0;0.08;0.92;1"
                />
              </circle>
            ))}

            {/* Country pins */}
            {COUNTRIES.map(c => (
              <CountryPin
                key={c.id}
                cx={c.cx}
                cy={c.cy}
                flagUrl={c.flag}
                label={c.label}
                isHq={c.type === "hq"}
              />
            ))}
          </svg>
        </div>

        {/* Stats Bar */}
        <div style={{ position: "relative", zIndex: 6, padding: "18px 24px 22px" }}>
          <div style={{
            background: "#ffffff", borderRadius: 14, padding: "4px 0",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 0 }}>
              {STATS_DATA.map((stat, i) => (
                <div key={stat.label} style={{
                  textAlign: "center", padding: "14px 8px",
                  borderRight: i < STATS_DATA.length - 1 ? "1.5px solid #e5e7eb" : "none",
                }}>
                  <div style={{
                    fontSize: "clamp(16px,2vw,26px)", fontWeight: 800, color: "#111111",
                    fontFamily: "'Syne',sans-serif", lineHeight: 1, letterSpacing: "-0.5px",
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: "clamp(7px,0.85vw,10px)", color: "#555555",
                    marginTop: 5, fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.5px", lineHeight: 1.4,
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}