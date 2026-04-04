"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const successionEssentialFeatures = [
  {
    title: "Talent Identification",
    description:
      "Easily identify high-potential employees with the skills and attributes necessary for future leadership roles.",
    icon: "🎯",
  },
  {
    title: "Customized Development Plans",
    description:
      "Create tailored development plans for identified talent, focusing on skill enhancement and leadership readiness.",
    icon: "📋",
  },
  {
    title: "Performance Tracking",
    description:
      "Continuously monitor and evaluate the progress of potential successors to ensure they meet leadership expectations.",
    icon: "📈",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export default function SuccessionPlanningPage() {
  const [openFeatureIndex, setOpenFeatureIndex] = useState<number | null>(0);

  const toggleFeature = (index: number) => {
    setOpenFeatureIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="bg-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="hero-bg overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className="text-white">
              <h1 className="text-4xl font-bold md:text-5xl">
                Succession Planning
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-relaxed md:text-lg">
                By planning succession, you can keep your organization on track
                and ensure its success. We assist you in identifying,
                developing, and transitioning strategic talent. To foster
                sustainable workforces and better candidates, our leadership
                service aligns with business objectives and minimizes
                disruptions.
              </p>
              <Link
                href="#"
                className="mt-7 inline-block bg-white px-7 py-2.5 text-base font-medium text-[#2e7d32] transition-colors hover:bg-gray-100"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/planning.png"
                alt="Succession Planning"
                className="h-auto w-full max-w-[420px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Desktop Preview Banner ── */}
      <section className="relative -mt-10 bg-gradient-to-b from-transparent to-white pb-10 md:-mt-16 md:pb-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border-4 border-green-500 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.15)]">
            <img
              src="/images/Decibel_Desktop-2048x1458.jpg"
              alt="Succession Planning Product Interface"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Essential Features ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#238c43]">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-black md:text-3xl">
              All the essential features for{" "}
              <span className="text-black">working productively</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
              Streamline your succession planning workflow with powerful tools
              designed for modern HR teams.
            </p>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {successionEssentialFeatures.map((item, index) => {
                const isOpen = openFeatureIndex === index;
                return (
                  <div
                    key={item.title}
                    className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#238c43] shadow-[0_4px_20px_rgba(35,140,67,0.12)]"
                        : "border-gray-200 hover:border-[#238c43]/40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFeature(index)}
                      className={`flex w-full items-center justify-between px-5 py-4 text-left ${
                        isOpen ? "bg-[#f0faf3]" : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg text-lg ${
                            isOpen
                              ? "bg-[#238c43] text-white"
                              : "bg-green-50 text-[#238c43]"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className="text-base font-semibold text-gray-800">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs">▼</span>
                    </button>
                    {isOpen && (
                      <div className="border-t px-5 py-4 text-sm text-gray-600 md:text-base">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src="/images/succession planning.jpeg"
                alt="Succession Planning Feature Interface"
                className="rounded-2xl border-4 border-[#238c43] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Download App ── */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/mob.png"
                alt="Decibel app preview on mobile"
                className="h-auto w-full max-w-[280px]"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#238c43] md:text-4xl">
                Download Our App
              </h3>
              <p className="mt-3 text-sm text-[#2b2b2b] md:text-lg">
                Experience convenience with the Decibel HRMS app.
              </p>
              <div className="mt-5 flex gap-3">
                <img src="/images/app.png" className="w-[155px]" />
                <img src="/images/google.png" className="w-[155px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}