"use client";
import { useState, useEffect } from "react";

const plans = [
  {
    icon: "🏢",
    title: "Small Enterprise",
    size: "1-100 Employees",
    desc: "Empowering Small Enterprises: Unleashing Exponential Growth with HRMS",
    features: [
      "Payroll and Benefits",
      "Employee Data",
      "Org Structure",
      "Attendance & Overtime",
      "Hiring",
      "Performance Appraisals",
      "Tax Management",
      "Training and Development",
    ],
  },
  {
    icon: "🏭",
    title: "Medium Enterprise",
    size: "101 - 999 Employees",
    desc: "Empowering Medium Enterprises: Revolutionize HR with Seamless Digitization",
    features: [
      "Payroll and Benefits",
      "Employee Data",
      "Org Structure",
      "Attendance & Overtime",
      "Employee Service",
      "Expense Management",
      "Tax Management",
      "Onboarding",
      "Performance Appraisals",
      "Training and Development",
    ],
  },
  {
    icon: "🏗️",
    title: "Large Enterprise",
    size: "1000+ Employees",
    desc: "Empowering Large Enterprise: Elevate HR Excellence with Future-Oriented HRMS",
    features: [
      "Payroll and Benefits",
      "Employee Data",
      "Org Structure",
      "Attendance & Overtime",
      "Roster Management",
      "Employee Self Service",
      "Expense Management",
      "Onboarding",
      "Talent Acquisition",
      "Talent Management",
      "Performance Appraisals",
      "Tax Management",
      "Training and Development",
      "HR Helpdesk",
    ],
  },
];

const PREVIEW_COUNT = 7; // how many features to show before "SEE MORE"

const values = ["INNOVATION", "INTEGRITY", "COLLABORATION", "EXCELLENCE", "CUSTOMER FOCUS"];

export default function PricingSection() {
  const [valIdx, setValIdx] = useState(0);
  // Use array indexed by plan index for truly independent state
  const [expanded, setExpanded] = useState([false, false, false]);

  // Auto slideshow for values
  useEffect(() => {
    const interval = setInterval(() => {
      setValIdx((prev) => (prev + 1) % values.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleExpand = (idx) => {
    setExpanded((prev) => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <>
      {/* ── Pricing ── */}
      <section id="pricing-section" className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-black text-base md:text-lg mb-2">
            Unified HRMS: Empowering Every Industry on One Platform
          </p>
          <h2 className="text-center text-black text-3xl md:text-5xl font-bold mb-12">
            Your Needs, Your Budget, Your Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => {
              const isExpanded = expanded[idx] === true;
              const visibleFeatures = isExpanded
                ? plan.features
                : plan.features.slice(0, PREVIEW_COUNT);
              const hasMore = plan.features.length > PREVIEW_COUNT;

              return (
                <div key={plan.title} className="plan-card light-green-bg">
                  <div className="text-4xl text-center mb-3">{plan.icon}</div>
                  <h3 className="text-center text-xl font-black text-black mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-center text-xs text-black mb-3 font-semibold">
                    {plan.size}
                  </p>
                  <p className="text-center text-sm text-black leading-relaxed mb-6 px-2">
                    {plan.desc}
                  </p>

                  <div className="space-y-0">
                    {visibleFeatures.map((f) => (
                      <div key={f} className="plan-feature text-black">
                        <span className="plan-arrow text-sm">→</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {hasMore && (
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="mt-6 w-full text-center text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors"
                    >
                      {isExpanded ? "SEE LESS ↓" : "SEE MORE ↑"}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="pt-24 pb-40 text-center relative min-h-[80vh]"
        style={{
          backgroundImage: "url('/images/values.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2
            className="text-white font-black text-2xl md:text-4xl lg:text-5xl tracking-widest mt-0 mb-12 uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            OUR VALUES
          </h2>
          <div style={{ height: "40px" }}></div>
          <div className="w-full flex justify-center">
            <span
              className="text-white font-black text-3xl md:text-5xl lg:text-6xl tracking-widest mb-4 transition-all duration-500"
              style={{ minHeight: "56px", display: "inline-block" }}
            >
              {values[valIdx]}
            </span>
          </div>
          <div style={{ height: "40px" }}></div>
          <p className="text-white/70 text-lg italic mt-2">
            These values give us the foundations we need.
          </p>
        </div>
      </section>
    </>
  );
}