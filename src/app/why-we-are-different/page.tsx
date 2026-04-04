"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const tabData = [
  {
    id: "informationSecurity",
    label: "Information Security",
    kicker: "INFORMATION SECURITY",
    title: "Zero Tolerance",
    description:
      "We're aiming to deliver you increasingly intelligent and tailored experiences, using machine learning, extensible frameworks, analytics, and more. Our technology inhibits:",
    highlights: [
      "ISO 27001 & GDPR Compliant",
      "Infrastructure Hosting at Certified Tier 4 Data Centers",
      "Yearly Pen Test for both Web & Mobile Apps by Top 4 Audit Firm",
      "Client Level SOC Audit Type II Certified",
    ],
    image: "/images/zero.jpg",
    imageAlt: "Information security illustration",
  },
  {
    id: "technologyArchitect",
    label: "Technology Architect",
    kicker: "TECHNOLOGY ARCHITECT",
    title: "Most Sustainable",
    description:
      "Decibel HRMS is the expert in engineering the processes of fusing the individual component sub-systems into one:",
    highlights: [
      "Enterprise Cloud with Cutting Edge Technology",
      "24/7 Accessible Cloud Service on Web & Mobile",
      "Real Time Infrastructure Upgrades with no Hassle",
      "With no on-prem & pvt. Clouds, IT ensures focus on core business",
    ],
    image: "/images/tech.jpg",
    imageAlt: "Technology architecture illustration",
  },
  {
    id: "governanceLocalization",
    label: "Governance & Localization",
    kicker: "GOVERNANCE & LOCALIZATION",
    title: "Governance As a Value with Cost Saving",
    description:
      "We secure your journey to the cloud by ensuring all the governance complexities are being taken care of:",
    highlights: [
      "100% Localized as per labor law and statutory compliances",
      "All in One Platform",
      "Offer VMS & SaaS Solutions with min. 20% ROI",
    ],
    image: "/images/govern.jpg",
    imageAlt: "Governance and localization workflow",
  },
  {
    id: "digitalization",
    label: "Digitalization",
    kicker: "DIGITALIZATION",
    title: "Strategy Delivered",
    description:
      "Decibel HRMS helps you enhance your experience in the virtual world by providing you enhanced technology on your finger tips:",
    highlights: [
      "Native Mobile App (iOS and Android)",
      "No More User Licenses Fee with Web & Mobile Access to all",
      "Artificial Intelligence (AI) Based Business Analytics & Geo-Fencing",
    ],
    image: "/images/digital.jpg",
    imageAlt: "Digital HR platform",
  },
  {
    id: "integrationCapability",
    label: "Unmatched Integration Capability",
    kicker: "UNMATCHED",
    title: "Integration Capability",
    description:
      "With multiple options for different HR functions and the ability to easily reshape itself to your need, Decibel stands in a league of its own when it comes to giving you what you want:",
    highlights: [
      "Flexible in Terms of Methods including: SFTP, Web Sources, Neutral etc.",
      "Integration with all Global ERPs including Oracle, Success Factor, Microsoft, Workday and SAP.",
      "Covered Business Areas Include: Payroll, EDM, Outlook, ABS, Leave, End of Service.",
    ],
    image: "/images/unmatched.jpg",
    imageAlt: "Integration capability overview",
  },
];

export default function WhyWeAreDifferentPage() {
  const [activeTab, setActiveTab] = useState("technologyArchitect");
  const activeTabData = tabData.find((tab) => tab.id === activeTab) ?? tabData[0];

  return (
    <main>
      <Navbar />

      <section className="hero-bg py-10 md:py-16 min-h-[500px] flex items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Why we&apos;re Different?
          </h1>

          <div className="mx-auto mt-5 max-w-5xl space-y-3 text-base leading-[1.8] md:text-[18px] md:leading-[1.9]">
            <p>
              The first thing that makes us different from others is our dedicated expertise in recruitment,
              employee management, and strategic HR solutions.  Decibel is the BEST HR BPO COMPANY that allows your business to achieve goals while saving a ton of time.
              We are committed to making ease in each level of your business while building the best relationships that
              matter to the performance. With a nuanced understanding of workforce dynamics and regulations, Decibel
              tailors all your business needs that foster growth and success.
            </p>

          </div>

          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center bg-white px-5 py-2 text-sm font-medium text-[#2f9e44] transition-colors hover:bg-gray-100"
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="bg-[#efefef] py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-5">
          <div className="grid grid-cols-1 overflow-hidden border border-[#e4e4e4] bg-white lg:grid-cols-2">
            <div className="lg:col-span-2 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-[#2f9e44] text-white">
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full px-3 py-3 text-center text-xs font-semibold md:text-sm ${activeTab === tab.id ? "bg-[#1f6b4a]" : "bg-transparent"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#2f9e44]">{activeTabData.kicker}</p>
                <h2 className="mt-2 text-3xl font-bold text-[#1f6b4a] md:text-4xl">{activeTabData.title}</h2>

                <p className="mt-4 text-base leading-relaxed text-black md:text-[17px]">
                  {activeTabData.description}
                </p>

                <div className="mt-5 border-2 border-[#2f9e44] px-3 py-1.5">
                  {activeTabData.highlights.map((item, index) => (
                    <div
                      key={item}
                      className={`flex items-start gap-2.5 py-2.5 ${index !== activeTabData.highlights.length - 1 ? "border-b border-[#2f9e44]" : ""}`}
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#2f9e44]" />
                      <p className="text-base leading-relaxed text-black md:text-[16px]">{item}</p>
                    </div>
                  ))}
                </div>
            </div>

            <div className="flex items-center justify-center bg-white p-3 md:p-4">
                <Image
                  src={activeTabData.image}
                  alt={activeTabData.imageAlt}
                  width={520}
                  height={460}
                  className="h-auto w-full max-w-[500px] object-contain"
                  priority={false}
                />
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
