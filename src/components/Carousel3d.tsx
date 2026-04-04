import React, { useState, useEffect } from 'react';

export default function CardCarousel3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const features = [
    {
      id: 1,
      title: 'Multi-currency',
      icon: '💱',
      bgColor: 'linear-gradient(to right, #1a7f7e, #06b6d4)',
      description: 'Support for 150+ currencies with real-time conversion rates and automatic currency handling across all transactions.',
      details: ['Real-time rates', 'Auto conversion', '150+ currencies', 'Instant settlement']
    },
    {
      id: 2,
      title: 'Multi Language',
      icon: '🌐',
      bgColor: 'linear-gradient(to right, #64748b, #475569)',
      description: 'Interface available in 45+ languages with localized content and regional compliance built-in.',
      details: ['45+ languages', 'Native speakers', 'Auto-detect', 'RTL support']
    },
    {
      id: 3,
      title: '100% Localized',
      icon: '📍',
      bgColor: 'linear-gradient(to right, #16a34a, #0d9488)',
      description: 'Complete localization for every market including local compliance, regulations, and cultural preferences.',
      details: ['Local compliance', 'Regional laws', 'Cultural fit', 'Tax optimized']
    },
    {
      id: 4,
      title: 'Enterprise Cloud',
      icon: '☁️',
      bgColor: 'linear-gradient(to right, #475569, #1e293b)',
      description: 'Scalable cloud infrastructure with 99.99% uptime SLA and enterprise-grade security protocols.',
      details: ['99.99% uptime', 'Auto-scaling', 'Global CDN', 'Redundancy']
    },
    {
      id: 5,
      title: '24/7 Accessible',
      icon: '⏰',
      bgColor: 'linear-gradient(to right, #d97706, #eab308)',
      description: 'Round-the-clock access to your data and systems with our dedicated support team available anytime.',
      details: ['24/7 support', 'Real-time help', 'No downtime', 'Priority queue']
    },
    {
      id: 6,
      title: 'Integration',
      icon: '🔗',
      bgColor: 'linear-gradient(to right, #06b6d4, #14b8a6)',
      description: 'Seamless integration with 200+ popular business tools and custom API access for any platform.',
      details: ['200+ integrations', 'REST API', 'Custom webhooks', 'Zapier ready']
    },
    {
      id: 7,
      title: 'Security Certified',
      icon: '🔒',
      bgColor: 'linear-gradient(to right, #4b5563, #334155)',
      description: 'ISO 27001, SOC 2, and GDPR certified with end-to-end encryption and regular security audits.',
      details: ['ISO 27001', 'SOC 2 certified', 'GDPR compliant', 'Pen tested']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % features.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX((e.clientX - rect.left - rect.width / 2) / 20);
    setMouseY((e.clientY - rect.top - rect.height / 2) / 20);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  const getCardStyle = (index: number) => {
    const total = features.length;
    let distance = index - activeIndex;
    // normalize distance to range [-floor(n/2), floor(n/2)]
    if (distance > total / 2) distance -= total;
    if (distance < -total / 2) distance += total;

    const absDistance = Math.abs(distance);
    let translateX = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 10 - absDistance;

    if (distance === 0) {
      translateX = 0; rotateY = 0; scale = 1; opacity = 1; zIndex = 50;
    } else if (distance === 1) {
      translateX = 280; rotateY = -25; scale = 0.85; opacity = 0.7;
    } else if (distance === -1) {
      translateX = -280; rotateY = 25; scale = 0.85; opacity = 0.7;
    } else if (distance === 2) {
      translateX = 500; rotateY = -35; scale = 0.7; opacity = 0.4;
    } else if (distance === -2) {
      translateX = -500; rotateY = 35; scale = 0.7; opacity = 0.4;
    } else {
      translateX = distance > 0 ? 650 : -650; rotateY = distance > 0 ? -40 : 40; scale = 0.6; opacity = 0;
    }

    return {
      transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
    };
  };

  const CARD_SIZE = 320;

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #154d46 0%, #13674f 25%, #22b840 60%, #82e8a6 100%)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 16px',
      boxSizing: 'border-box',
    }}>

      {/* Animated Background blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[
          { top: '40px', left: 'calc(25% - 96px)', color: 'rgba(20,184,166,0.4)', delay: '0s' },
          { top: 'calc(33% - 96px)', right: 'calc(25% - 96px)', color: 'rgba(107,114,128,0.4)', delay: '2s' },
          { bottom: '-32px', left: 'calc(50% - 96px)', color: 'rgba(217,119,6,0.4)', delay: '4s' },
        ].map((b, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...b,
            width: '384px', height: '384px',
            background: `radial-gradient(circle, ${b.color}, transparent)`,
            borderRadius: '9999px',
            filter: 'blur(64px)',
            opacity: 0.15,
            animation: `blob 7s infinite ${b.delay}`,
          }} />
        ))}
      </div>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 20, textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '3.75rem', fontWeight: 'bold', color: 'white', margin: '0 0 16px' }}>
          The Difference We Deliver
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '512px', margin: '0 auto' }}>
          Decibel HRMS offers effortless HR management solutions, catering to businesses of all sizes, across the entire world.
        </p>
      </div>

      {/* ── Carousel ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 30,
          width: '100%',
          maxWidth: '80rem',
          /* height exactly fits the card so it's perfectly centred */
          height: `${CARD_SIZE}px`,
          perspective: '1200px',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => setActiveIndex(index)}
              style={{
                position: 'absolute',
                /* anchor at horizontal centre, vertical centre of container */
                top: '50%',
                left: '50%',
                width: `${CARD_SIZE}px`,
                height: `${CARD_SIZE}px`,
                /* pull back by half width/height so the card centre aligns with anchor */
                marginLeft: `-${CARD_SIZE / 2}px`,
                marginTop: `-${CARD_SIZE / 2}px`,
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
                ...getCardStyle(index),
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  background: feature.bgColor,
                  borderRadius: '16px',
                  padding: '32px',
                  boxSizing: 'border-box',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  overflow: 'hidden',
                  transformStyle: 'preserve-3d',
                  transform: activeIndex === index ? `rotateX(${-mouseY}deg) rotateY(${mouseX}deg)` : 'none',
                  transition: activeIndex === index ? 'transform 0.1s ease-out' : 'transform 0.6s ease-out',
                }}
              >
                {/* Decorative large icon */}
                <div style={{
                  position: 'absolute',
                  top: '24px', right: '24px',
                  fontSize: '64px',
                  opacity: 0.2,
                }}>
                  {feature.icon}
                </div>

                {/* Card content */}
                <div style={{
                  position: 'relative', zIndex: 10,
                  height: '100%',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  color: 'white',
                }}>
                  <div>
                    {/* Icon box */}
                    <div style={{
                      fontSize: '40px',
                      marginBottom: '16px',
                      display: 'inline-flex',
                      alignItems: 'center', justifyContent: 'center',
                      width: '72px', height: '72px',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.3)',
                    }}>
                      {feature.icon}
                    </div>
                    <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 10px' }}>
                      {feature.title}
                    </h2>
                    <p style={{
                      fontSize: '13px', lineHeight: '1.5', opacity: 0.9,
                      display: '-webkit-box',
                      WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      margin: 0,
                    }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {feature.details.slice(0, 2).map((detail, idx) => (
                      <span key={idx} style={{
                        padding: '4px 12px',
                        fontSize: '12px', fontWeight: '500',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255,255,255,0.3)',
                      }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Number badge */}
                <div style={{
                  position: 'absolute', bottom: '16px', right: '16px',
                  width: '32px', height: '32px',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: 'bold', color: 'white',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%       { transform: translate(30px,-50px) scale(1.1); }
          66%       { transform: translate(-20px,20px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}