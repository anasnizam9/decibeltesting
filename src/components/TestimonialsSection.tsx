"use client";
import React, { useEffect, useRef } from "react";

function useFadeIn(direction: "left" | "right" | "up" = "up", delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const translateMap = {
      left:  "translateX(-70px)",
      right: "translateX(70px)",
      up:    "translateY(50px)",
    };
    el.style.opacity = "0";
    el.style.transform = translateMap[direction];
    el.style.transition = `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);
  return ref;
}

type TestimonialItem = {
  text: string;
  name: string;
  company: string;
  avatar: string;
  companyUrl?: string;
  companyDisplay: string;
  headline: string;
  subhead: string;
  featured: boolean;
};

const testimonials: TestimonialItem[] = [
  {
    text: `DECIBEL HRMS has offered us with tools and services which has enabled us to become a virtual HR department regardless of where we are. The software, Decibel has provided us with is definitely one of the best time saving tools and an easy to use software. The team has displayed a real understanding of our issues and helped us develop a smooth and transparent HR function.`,
    name: "Ayesha Menai",
    company: "Jaffer Brothers",
    avatar: "/images/testimonals/jaffar.png",
    companyDisplay: "Jaffer Brothers",
    headline: "Jaffer Brothers Goes Virtual With Decibel HRMS",
    subhead: "Industry giant credits seamless HR transformation to next-gen platform",
    featured: true,
  },
  {
    text: `The vision of the HR department of EFU Life is to transition from an HR operations and recruitment centric function to a 75% knowledge-based function by 2025. We knew that the key to this transition, would be our choice of technology and technology partner. At the same time, we were also looking for an HR platform that would have the ability to power our new PMS, reduce our workload and streamline our backend operations.`,
    name: "Jalal H. Curmally",
    company: "EFU Life Assurance",
    avatar: "/images/testimonals/efu.jpg",
    companyDisplay: "EFU Life Assurance",
    headline: "EFU Life Charts Bold 2025 Vision With Decibel",
    subhead: "Landmark shift to knowledge-based HR powered by technology partnership",
    featured: false,
  },
  {
    text: `It's refreshing to see that a software provider listens to their clients needs! The team at Decibel HRMS were able to understand the specific needs of Sapphire Retail Limited & Designtex Limited, displayed their understanding in delivery of the services. The team has delivered a management system that takes out the stress of managing major HR Service Delivery operations; Recruitment and Performance Management.`,
    name: "Sadia Zahid",
    company: "Sapphire Retail Limited",
    avatar: "/images/testimonals/sapp.jpeg",
    companyDisplay: "Sapphire Retail Limited",
    headline: "Sapphire Retail Lauds Decibel's Client-First Approach",
    subhead: "Tailored HR delivery transforms recruitment and performance functions",
    featured: false,
  },
  {
    text: `Decibel HRMS as a group defines what a software company should be. When companies offer great products and so grow in size as a result of it, customer support and satisfaction suffers. Not so with Decibel HRMS. Their expertise and professionalism were evident throughout the implementation cycle, and we were pleased with the final deliverable. It is an amazing software offering great number of products to ease our work.`,
    name: "Khizar Imran",
    company: "Tetra Pak",
    avatar: "/images/testimonals/tetra.jpeg",
    companyDisplay: "Tetra Pak",
    headline: "Tetra Pak Praises Decibel's Unwavering Service Standards",
    subhead: "Global packaging leader reports flawless implementation and delivery",
    featured: false,
  },
  {
    text: `I am really impressed by the quality of services I received from Decibel HRMS. We were right on schedule for the whole project, they charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a one window solution for all my HR needs now. Our ROI has increased because of Decibel HRMS and I will definitely recommend others to have a system like Decibel HRMS in place.`,
    name: "Hammad Anwar",
    company: "Pak Kuwait Investment Company",
    avatar: "/images/testimonals/pk.jpeg",
    companyDisplay: "Pak Kuwait Investment Company",
    headline: "Pak Kuwait Reports Soaring ROI After Decibel Rollout",
    subhead: "Investment firm achieves one-window HR solution ahead of schedule",
    featured: false,
  },
  {
    text: `We have been thoroughly impressed with the services provided by DECIBEL BPO (PRIVATE) LIMITED. Their team is consistently reliable, efficient, and proactive in their support. Since partnering with them, our operations have run seamlessly, and their attention to our specific needs has made a significant impact on our success. Working with the Decibel team has been a truly positive and productive experience.`,
    name: "Khizar Hussain Khan",
    company: "JS Bank",
    avatar: "/images/testimonals/js.png",
    companyDisplay: "JS Bank",
    headline: "JS Bank Hails Decibel's Reliability & Seamless Support",
    subhead: "Leading Pakistani bank credits proactive partnership for operational excellence",
    featured: false,
  },
];

type Testimonial = (typeof testimonials)[0];

function ArticleCard({
  t,
  direction = "up",
  delay = 0,
}: {
  t: Testimonial;
  direction?: "left" | "right" | "up";
  delay?: number;
}) {
  const [imgError, setImgError] = React.useState(false);
  const [logoHovered, setLogoHovered] = React.useState(false);
  const fadeRef = useFadeIn(direction, delay);
  const firstLetter = t.text.replace(/^[\u201C\u201D"]/u, "")[0];
  const restText = t.text.replace(/^[\u201C\u201D"]/u, "").slice(1);
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      ref={fadeRef}
      style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 16, height: "100%" }}
    >
      {/* Headline */}
      <div style={{ borderBottom: "2px solid #a8d5b5", paddingBottom: 8 }}>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 16,
            color: "#1b4332",
            lineHeight: 1.15,
            letterSpacing: "-0.3px",
          }}
        >
          {t.headline}
        </div>
        <div
          style={{
            fontStyle: "italic",
            fontSize: 12,
            color: "#4a7c59",
            marginTop: 4,
            lineHeight: 1.4,
            fontFamily: "'IM Fell English', serif",
          }}
        >
          {t.subhead}
        </div>
      </div>

      {/* Byline */}
      <div
  style={{
    fontFamily: "'Courier Prime', monospace",
    fontSize: 10,
    color: "#4a7c59",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
  }}
>
  By <strong style={{ color: "#1b4332" }}>{t.name}</strong>
  {" · "}
  {t.companyUrl ? (
    <a
      href={t.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#2d6a4f",
        textDecoration: "none",
        borderBottom: "1px solid rgba(130,232,166,0.4)",
      }}
    >
      {t.companyDisplay}
    </a>
  ) : (
    <span style={{ color: "#4a7c59" }}>{t.companyDisplay}</span>
  )}
</div>

      {/* Portrait + Drop cap */}
      <div>
        <div
          style={{
            float: "right",
            marginLeft: 12,
            marginBottom: 8,
            background: "#ffffff",
            textAlign: "center",
          }}
        >
          {!imgError ? (
            <img
              src={t.avatar}
              alt={t.name}
              onError={() => setImgError(true)}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
              style={{
                width: 60,
                height: 60,
                objectFit: "contain",
                display: "block",
                cursor: "pointer",
                transition: "transform 0.35s ease, filter 0.35s ease",
                transform: logoHovered ? "scale(1.18)" : "scale(1)",
                filter: logoHovered
                  ? "grayscale(0%) brightness(1.1) drop-shadow(0 4px 10px rgba(45,106,79,0.4))"
                  : "grayscale(20%) brightness(1.05)",
              }}
            />
          ) : (
            <div
              style={{
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#4a7c59",
                background: "#f0f7f2",
              }}
            >
              {initials}
            </div>
          )}
        </div>
        <p
          style={{
            fontFamily: "'IM Fell English', serif",
            fontSize: 12.5,
            lineHeight: 1.85,
            color: "#1b4332",
            fontStyle: "italic",
            textAlign: "justify",
            hyphens: "auto",
            margin: 0,
          } as React.CSSProperties}
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 46,
              lineHeight: 0.75,
              float: "left",
              marginRight: 5,
              marginTop: 6,
              color: "#2d6a4f",
            }}
          >
            {firstLetter}
          </span>
          {restText}
        </p>
        <div style={{ clear: "both" }} />
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #a8d5b5",
          paddingTop: 7,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <span
          style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 10,
            color: "#2d6a4f",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          ★★★★★ Verified
        </span>
        <span
          style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 10,
            color: "#4a7c59",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          {t.companyDisplay}
        </span>
      </div>
    </article>
  );
}

function ColDivider() {
  return (
    <div
      className="np-col-divider"
      style={{ background: "#a8d5b5", width: 1, alignSelf: "stretch" }}
    />
  );
}

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  const mastheadRef = useFadeIn("up", 0);
  const dateRef     = useFadeIn("up", 0.12);
  const headlineRef = useFadeIn("up", 0.22);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .np-grid { grid-template-columns: 1fr !important; }
          .np-col-divider { display: none !important; }
        }
      `}</style>

      <section
        style={{
          background: "#ffffff",
          padding: "60px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            padding: "0 28px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Masthead ── */}
          <div
            ref={mastheadRef}
            style={{
              borderTop: "5px solid #2d6a4f",
              borderBottom: "4px solid #2d6a4f",
              textAlign: "center",
              padding: "10px 0",
              marginBottom: 6,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 6vw, 64px)",
                fontWeight: 900,
                letterSpacing: "-1px",
                color: "#000000",
                lineHeight: 1,
              }}
            >
              The Decibel Chronicle
            </div>
          </div>

          {/* ── Date strip ── */}
          <div
            ref={dateRef}
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "'Courier Prime', monospace",
              fontSize: 10,
              color: "#4a7c59",
              padding: "5px 0",
              borderBottom: "1px solid #a8d5b5",
              marginBottom: 6,
              letterSpacing: "1px",
            }}
          >
            <span>VOL. V · EST. 2019</span>
            <span style={{ fontStyle: "italic", color: "#2d6a4f" }}>
              &ldquo;Transforming HR, One Organisation at a Time&rdquo;
            </span>
            <span>SIX STARS · EVERY TIME</span>
          </div>

          {/* ── Section headline ── */}
          <div
            ref={headlineRef}
            style={{
              textAlign: "center",
              borderBottom: "2px solid #2d6a4f",
              paddingBottom: 12,
              marginBottom: 22,
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(20px, 3.5vw, 40px)",
                color: "#1b4332",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Industry Leaders Speak: Why Pakistan&apos;s Top Companies Choose Decibel HRMS
            </h2>
            <p
              style={{
                fontFamily: "'IM Fell English', serif",
                fontStyle: "italic",
                fontSize: 14,
                color: "#4a7c59",
                marginTop: 6,
              }}
            >
              Six exclusive testimonies on technology, trust, and transformation.
            </p>
          </div>

          {/* ══ ROW 1 ══════════════════════════════════════════════════════ */}
          <div
            className="np-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
              gap: "0 20px",
              alignItems: "start",
              marginBottom: 0,
            }}
          >
            <ArticleCard t={row1[0]} direction="left"  delay={0.10} />
            <ColDivider />
            <ArticleCard t={row1[1]} direction="up"    delay={0.20} />
            <ColDivider />
            <ArticleCard t={row1[2]} direction="right" delay={0.30} />
          </div>

          {/* ── Row separator ── */}
          <div
            style={{
              borderTop: "2px solid #2d6a4f",
              margin: "20px 0",
            }}
          />

          {/* ══ ROW 2 ══════════════════════════════════════════════════════ */}
          <div
            className="np-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
              gap: "0 20px",
              alignItems: "start",
            }}
          >
            <ArticleCard t={row2[0]} direction="left"  delay={0.10} />
            <ColDivider />
            <ArticleCard t={row2[1]} direction="up"    delay={0.20} />
            <ColDivider />
            <ArticleCard t={row2[2]} direction="right" delay={0.30} />
          </div>

          {/* ── Bottom bar ── */}
          <div
            style={{
              borderTop: "3px double #2d6a4f",
              marginTop: 22,
              paddingTop: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                color: "#4a7c59",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              © 2024 DecibelBPO · All Rights Reserved
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 14,
                color: "#000000",
                letterSpacing: "2px",
              }}
            >
              DECIBEL HRMS
            </span>
            <span
              style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: 10,
                color: "#4a7c59",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Verified Testimonials · Pakistan &amp; Beyond
            </span>
          </div>
        </div>
      </section>
    </>
  );
}