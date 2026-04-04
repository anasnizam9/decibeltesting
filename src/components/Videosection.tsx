"use client";
import { useRef, useState, useEffect } from "react";

export default function IPadMockupSection({ videoSrc = "/video/demo.mp4" }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const userPausedRef = useRef(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
      userPausedRef.current = false;
    } else {
      video.pause();
      setIsPlaying(false);
      userPausedRef.current = true;
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.muted = true;

    const tryPlay = () => {
      if (userPausedRef.current) return;
      video.muted = true;
      video.play()
        .then(() => { setIsPlaying(true); })
        .catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
          setIsPlaying(false);
          userPausedRef.current = false;
        }
      },
      { threshold: 0.3 }
    );

    const startObserving = () => observer.observe(section);
    if (video.readyState >= 1) {
      startObserving();
    } else {
      video.addEventListener("loadedmetadata", startObserving, { once: true });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .mockup-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          background: #0a1a0f;
          overflow: hidden;
          position: relative;
          padding: 60px 24px;
        }
        .mockup-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(0,180,80,0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0,150,60,0.05) 0%, transparent 40%);
          pointer-events: none;
        }
        .layout {
          display: flex;
          align-items: center;
          gap: clamp(30px, 6vw, 80px);
          max-width: 1300px;
          width: 100%;
        }
        .copy { flex: 1; min-width: 200px; }
        .copy-title {
          font-family: inherit;
          font-size: clamp(1.5rem, 2.8vw, 2.2rem);
          font-weight: 800;
          color: #f5fff8;
          line-height: 1.25;
          margin: 0 0 10px 0;
          text-transform: uppercase;
        }
        .copy-title .accent { color: #4cf29a; }
        .copy-desc {
          font-size: 14px;
          color: rgba(205, 221, 211, 0.72);
          line-height: 1.65;
          margin: 14px 0 28px 0;
          max-width: 320px;
        }
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #4cf29a;
          text-transform: uppercase;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(76,242,154,0.45);
          padding-bottom: 3px;
          cursor: pointer;
          transition: gap 0.2s ease, border-color 0.2s;
        }
        .cta:hover { gap: 14px; border-color: #4cf29a; }
        .ipad-wrap {
          flex: 1;
          display: flex;
          justify-content: center;
          min-width: 280px;
        }
        .ipad-tilt { position: relative; }
        .ipad-shell {
          width: clamp(340px, 52vw, 550px);
          aspect-ratio: 4/3;
          background: linear-gradient(145deg, #1c1c1c, #2a2a2a, #111);
          border-radius: 28px;
          padding: 14px;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.08),
            0 40px 80px rgba(0,0,0,0.18),
            0 8px 30px rgba(0,0,0,0.1),
            inset 0 1px 0 rgba(255,255,255,0.08);
          position: relative;
          overflow: hidden;
        }
        .ipad-screen {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: #000;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ✅ Chota mute icon - bottom left */
        .mute-icon {
          position: absolute;
          bottom: 12px;
          left: 12px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background 0.2s;
        }
        .mute-icon:hover { background: rgba(0,0,0,0.85); }

        .play-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
          z-index: 10;
        }
        .ipad-screen:hover .play-btn { opacity: 1; }
        .glare {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          pointer-events: none;
        }
        .home-bar {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.25);
        }
        .ipad-glow {
          position: absolute;
          width: 60%;
          height: 40%;
          background: radial-gradient(ellipse, rgba(0,180,80,0.12) 0%, transparent 70%);
          bottom: -20%;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          filter: blur(20px);
        }
        @media (max-width: 720px) {
          .layout { flex-direction: column; text-align: center; }
          .copy-desc { margin-left: auto; margin-right: auto; }
        }
      `}</style>

      <section
        className="mockup-root"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="layout">
          <div className="copy">
            <h2 className="copy-title">
              Transforming Your Journey With AI and ML:{" "}
              <span className="accent">A Seamless Technological Enhancement</span>
            </h2>
            <p className="copy-desc">
              Streamline HR with a cloud-based solution that saves time and costs—so you can focus on core operations.
            </p>
            <button className="cta" onClick={togglePlay}>
              {isPlaying ? "⏸ Pause Demo" : "▶ Watch Full Demo"} →
            </button>
          </div>

          <div className="ipad-wrap">
            <div className="ipad-tilt" ref={cardRef}>
              <div className="ipad-glow" />
              <div className="ipad-shell">
                <div className="ipad-screen">
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                      display: "block",
                    }}
                  />

                  {/* ✅ Chota mute/unmute icon - bottom left */}
                  <button className="mute-icon" onClick={toggleMute} aria-label="Toggle sound">
                    {isMuted ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                        <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2.5"/>
                        <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2.5"/>
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                      </svg>
                    )}
                  </button>

                  {/* Play/Pause btn - bottom right, hover pe show */}
                  <button onClick={togglePlay} className="play-btn" aria-label={isPlaying ? "Pause" : "Play"}>
                    {isPlaying ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21"/>
                      </svg>
                    )}
                  </button>

                  <div
                    className="glare"
                    style={{
                      background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
                      opacity: glare.opacity > 0 ? 1 : 0,
                    }}
                  />
                </div>
                <div className="home-bar" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}