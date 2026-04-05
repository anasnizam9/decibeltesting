"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Leap2024Page() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-03-04T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --green-dark:    #154d46;
          --green-bright:  #22b840;
          --green-light:   #82e8a6;
          --hero-gradient: linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%);
          --white:         #ffffff;
          --bg-white:      #f8fafb;
        }

        body { font-family: 'DM Sans', sans-serif; background: var(--bg-white); }

        /* ── HERO ── */
        .hero {
          background: var(--hero-gradient);
          padding: 64px 20px 84px;
          text-align: center;
        }

        .hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 48px;
        }

        /* ── COUNTDOWN ── */
        .countdown {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 44px;
        }

        .count-box {
          background: rgba(255, 255, 255, 0.13);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 10px;
          width: 140px;
          padding: 22px 16px 16px;
          text-align: center;
        }

        .count-box .num {
          font-family: 'Sora', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1;
        }

        .count-box .label {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.78);
          margin-top: 7px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── BUTTONS ── */
        .btn-outline {
          display: inline-block;
          padding: 13px 40px;
          background: transparent;
          border: 2px solid var(--white);
          color: var(--white);
          font-family: 'Sora', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.22s, color 0.22s;
        }
        .btn-outline:hover { background: var(--white); color: var(--green-dark); }

        .btn-solid {
          display: inline-block;
          padding: 13px 40px;
          background: var(--green-bright);
          border: 2px solid var(--green-bright);
          color: var(--white);
          font-family: 'Sora', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .btn-solid:hover { opacity: 0.85; }

        /* ── INFO BAR ── */
        .info-bar {
          background: #fff;
          border-bottom: 1px solid #e4ede9;
          padding: 26px 40px;
          display: flex;
          justify-content: center;
          gap: clamp(24px, 5vw, 80px);
          flex-wrap: wrap;
        }

        .info-item { display: flex; align-items: center; gap: 12px; }

        .info-item .icon {
          width: 38px;
          height: 38px;
          background: var(--green-bright);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-item .icon svg { width: 18px; height: 18px; fill: white; }

        .ititle { font-weight: 600; color: #1a2e28; font-size: 0.95rem; }
        .isub   { font-size: 0.8rem; color: #7a9e94; }

        /* ── ABOUT ── */
        .about-wrap { background: #fff; padding: 64px 20px; }
        .about-inner { max-width: 740px; margin: 0 auto; text-align: center; }
        .about-inner h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: var(--green-bright);
          margin-bottom: 18px;
          font-weight: 700;
        }
        .about-inner p { color: #4a6660; line-height: 1.8; font-size: 0.94rem; }

        /* ── VIDEO ── */
        .video-section {
          background: var(--bg-white);
          padding: 60px 20px;
          text-align: center;
        }
        .video-section h3 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1rem, 2.2vw, 1.4rem);
          color: var(--green-bright);
          font-weight: 600;
          max-width: 700px;
          margin: 0 auto 30px;
        }
        .video-wrapper {
          max-width: 860px;
          margin: 0 auto;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 16px 50px rgba(21, 77, 70, 0.14);
          background: #0e1f1c;
          aspect-ratio: 16/9;
        }
        .video-wrapper video { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── SPLIT ── */
        .split {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 60px clamp(24px, 5vw, 80px);
          gap: 60px;
          background: #fff;
        }
        .split.reversed {
          background: var(--bg-white);
        }
        @media (max-width: 768px) {
          .split { flex-direction: column; padding: 40px 20px; gap: 30px; }
          .split.reversed { flex-direction: column; }
          .count-box { width: 120px; }
          .count-box .num { font-size: 2.4rem; }
        }

        .text-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .img-col {
          flex-shrink: 0;
          width: 420px;
          height: 480px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        @media (max-width: 900px) {
          .img-col { width: 300px; height: 360px; }
        }
        @media (max-width: 768px) {
          .img-col { width: 100%; height: 280px; }
        }
        .img-col img { width: 100%; height: 100%; object-fit: cover; object-position: center; }

        .eyebrow {
          font-family: 'Sora', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          color: rgba(34, 184, 64, 0.10);
          line-height: 1;
          letter-spacing: 0.04em;
          margin-bottom: -6px;
        }
        .sec-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: var(--green-bright);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .sec-body {
          color: #4a6660;
          line-height: 1.78;
          font-size: 0.92rem;
          margin-bottom: 28px;
        }


      `}</style>

      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <h1>Decibel HRMS at Leap 2024</h1>

        <div className="countdown">
          {[
            { num: timeLeft.days,    label: "Days"    },
            { num: timeLeft.hours,   label: "Hours"   },
            { num: timeLeft.minutes, label: "Minutes" },
            { num: timeLeft.seconds, label: "Seconds" },
          ].map(({ num, label }) => (
            <div className="count-box" key={label}>
              <div className="num">{String(num).padStart(2, "0")}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>

        <a href="#" className="btn-outline">Meet us at Leap 2024</a>
      </section>

      {/* ── INFO BAR ── */}
      <div className="info-bar">
        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
          </div>
          <div>
            <div className="ititle">Malham, Riyadh</div>
            <div className="isub">Saudi Arabia</div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
          </div>
          <div>
            <div className="ititle">Starting on March 4</div>
            <div className="isub">March 4–7, 2024</div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div>
            <div className="ititle">Sponsors</div>
            <div className="isub">Sponsors</div>
          </div>
        </div>

        <div className="info-item">
          <div className="icon">
            <svg viewBox="0 0 24 24"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/></svg>
          </div>
          <div>
            <div className="ititle">170,000 Tech Pros</div>
            <div className="isub">170,000 Tech Pros</div>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div className="about-wrap">
        <div className="about-inner">
          <h2>Decibel HRMS at Leap 2024</h2>
          <p>
            Decibel HRMS is excited to join the vibrant community at LEAP 2024, the region&apos;s biggest
            technology event in Riyadh this March. We will explore the future of technology and artificial
            intelligence, the evolving field of HR and much more. Join us as we explore human-led,
            tech-powered innovations made real for our region.
          </p>
        </div>
      </div>

      {/* ── VIDEO ── */}
      <section className="video-section">
        <h3>Learn about Human-led, tech-powered innovations made real for our region</h3>
        <div className="video-wrapper">
          {/* Apni video /public/videos/ceo-message.mp4 mein rakh do */}
          <video controls>
            <source src="/public/videos/leap.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── RIYADH — text left, image right ── */}
      <div className="split">
        <div className="text-col">
          <div className="eyebrow">RIYADH</div>
          <h2 className="sec-heading">The Heart of<br />Saudi Arabia</h2>
          <p className="sec-body">
            LEAP 2024 emerges as a trailblazer in HR and tech leaders for cutting-edge discussions,
            networking, and exploring game-changing tools. It highlights its innovative features, the
            influence on HR practices, and the transformative future it signifies.
          </p>
          <a href="#" className="btn-solid">Meet us at Leap 2024</a>
        </div>
        <div className="img-col">
          <img src="/images/riyadh.jpg" alt="Riyadh Kingdom Tower" />
        </div>
      </div>

      {/* ── EPICENTER — image left, text right ── */}
      <div className="split reversed">
        <div className="img-col">
          <img src="/images/leap2024.jpeg" alt="LEAP 2024 Venue" />
        </div>
        <div className="text-col">
          <div className="eyebrow">LEAP 2024</div>
          <h2 className="sec-heading">An Innovation<br />Epicenter</h2>
          <p className="sec-body">
            At LEAP, dive deeper into the future with Decibel&apos;s booth. Get hands-on with interactive
            demos, participate in stimulating discussions, and learn how AI, DeciBot, and other innovations
            are shaping the future of work. Join the conversation – stop by our booth!
          </p>
          <a href="#" className="btn-solid">Meet us at Leap 2024</a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}