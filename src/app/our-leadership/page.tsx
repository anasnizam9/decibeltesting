"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

type Leader = {
  name: string;
  title: string;
  bio: string;
  image: string;
  fullBio?: string;
};

const leaders: Leader[] = [
  {
    name: "Faisal Qamar",
    title: "Co-founder & CEO",
    bio: "Faisal Qamar, a visionary leader based out of the UAE, is one of the founders of Decibel BPO. He has played a pivotal role in pioneering the concept of business process management.",
    image: "/images/newfq.png",
    fullBio:
      "Faisal Qamar, a visionary leader based out of the UAE, is one of the founders of Decibel BPO. He has played a pivotal role in pioneering the concept of business process outsourcing in developing economies. With over two decades of extensive global experience as a senior corporate executive, Faisal brings a wealth of expertise in designing and implementing innovative strategies that propel business growth and success.\n\nFaisal's journey in leadership spans across various prominent positions, including Group COO at SIDDCO Group, CFO at Pakistan Textile Company Limited, and General Manager for Financial Developments at the Arfeen Group of Companies. His diverse background and leadership roles have equipped him with a deep understanding of diverse industries and business environments.\n\nA distinguished chartered accountant, Faisal holds a master's certification in human resources from Cornell University, further enhancing his strategic acumen and leadership capabilities. His relentless commitment to excellence and passion for driving positive change continue to inspire and shape the success of Decibel BPO and its clients.",
  },
  {
    name: "Umair Ahmed",
    title: "Co-founder & COO",
    bio: "Umair Ahmed, serving as the Chief Operating Officer at Decibel BPO, plays a pivotal role in defining the company's technology strategy and maintaining architectural coherence across the Products and Technology departments.",
    image: "/images/umairsir.png",
    fullBio:
      "Umair Ahmed, serving as the Chief Operating Officer at Decibel BPO, plays a pivotal role in defining the company's technology strategy and maintaining architectural coherence across the Products and Technology departments.\n\nWith a tenure dating back to 2009, Umair has occupied several leadership positions, notably as the Chief Technology Architect. In this capacity, he spearheaded cross-platform initiatives and offered technical supervision for significant acquisitions.",
  },
  {
    name: "Abdul Samad",
    title: "Senior General Manager - Business Development | Projects & Product",
    bio: "Abdul Samad, the Senior General Manager - Business Development | Projects & Product at Decibel BPO, plays a pivotal role in driving the company's strategic projects in addition to overseeing business growth strategies.",
    image: "/images/xyx.png",
    fullBio:
      "Abdul Samad, the Senior General Manager - Business Development | Projects & Product at Decibel BPO, plays a pivotal role in driving the company's strategic projects in addition to overseeing business growth strategies. His responsibilities encompass enhancing the current portfolio, exploring new business opportunities, and aligning strategies with Decibel's objectives.\n\nFurthermore, Abdul collaborates closely with regional partners to identify market opportunities. He builds strong relationships with buyers and sellers, assessing market demand effectively to introduce new offerings. His adaptability to the evolving business environment underscores his effectiveness in driving Decibel's success.",
  },
  {
    name: "Andaleeb Dawood",
    title: "General Manager - Service Delivery & HR",
    bio: "Andaleeb Dawood, serving as the General Manager - Service Delivery & HR and a pivotal member of the Business Leadership Team at Decibel BPO, spearheads client transformation on the enterprise cloud.",
    image: "/images/and.png",
    fullBio:
      "Andaleeb Dawood, serving as the General Manager - Service Delivery & HR and a pivotal member of the Business Leadership Team at Decibel BPO, spearheads client transformation on the enterprise cloud.\n\nWith nearly 12 years of experience garnered from esteemed organizations like Habib University, Aman Foundation, and Hunar Foundation, Andaleeb brings profound expertise in various HR and Finance domains. Her specialization includes employee retirement benefits, taxation, legal and compliance matters. As an ACCA member and a certified HR practitioner, she holds a gold medal in EMBA (HRM), showcasing her dedication to excellence.",
  },
  {
    name: "Nabeel Baig",
    title: "General Manager - Information Technology",
    bio: "Nabeel Baig, an articulate and results-oriented IT professional, currently serves as the General Manager Information Technology at Decibel BPO.",
    image: "/images/nba.png",
    fullBio:
      "Nabeel Baig, an articulate and results-oriented IT professional, currently serves as the General Manager Information Technology at Decibel BPO. With over two decades of extensive industry experience, Nabeel is renowned for his expertise in software project management, strategic IT planning, and systems integration. Holding certifications of PMP, MCP, and ITIL, he specializes in developing business plans, IT audits, cybersecurity, and cloud computing.\n\nThroughout his career, Nabeel has successfully led cross-functional teams, driving business value through customized solutions. He excels in optimizing operations, managing multiple projects, and enhancing software functionality. His commitment to continuous learning keeps him at the forefront of emerging technologies, enabling him to deliver exceptional results and maintain high client satisfaction.",
  },
];

function LeaderCard({ leader, onClick }: { leader: Leader; onClick: () => void }) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#1D9E75]"
    >
      {/* Photo */}
      <div className="relative h-[260px] w-full overflow-hidden bg-gray-100">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="px-5 py-4 text-center">
        <h3
          className="text-[17px] font-bold text-[#1D9E75]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {leader.name}
        </h3>
        <div className="mx-auto my-2 h-[2px] w-8 rounded-full bg-[#1D9E75] opacity-60" />
        <p
          className="text-[11px] font-semibold uppercase tracking-widest text-gray-400"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {leader.title}
        </p>
        <button
          type="button"
          className="mt-3 text-[11px] font-bold text-[#1D9E75] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          Read More &gt;&gt;
        </button>
      </div>
    </article>
  );
}

export default function OurLeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const modalParagraphs = (selectedLeader?.fullBio ?? selectedLeader?.bio ?? "")
    .split("\n\n")
    .filter(Boolean);

  useEffect(() => {
    if (!selectedLeader) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedLeader(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedLeader]);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="hero-bg flex min-h-[270px] items-center justify-center py-14 md:min-h-[300px] md:py-16">
        <div className="px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-6xl">Our Leaderships</h1>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#f5f7f6] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {leaders.slice(0, 3).map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                onClick={() => setSelectedLeader(leader)}
              />
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="mt-6 grid grid-cols-2 gap-6 sm:w-2/3 sm:mx-auto">
            {leaders.slice(3).map((leader) => (
              <LeaderCard
                key={leader.name}
                leader={leader}
                onClick={() => setSelectedLeader(leader)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 md:p-6"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex flex-col gap-4 rounded-t-3xl bg-[#1D9E75] px-6 pb-6 pt-6 md:flex-row md:items-end md:px-8">
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute right-4 top-3 text-5xl leading-none text-white transition-opacity hover:opacity-80"
                aria-label="Close"
              >
                ×
              </button>
              <div className="h-[140px] w-[140px] overflow-hidden rounded-2xl border-4 border-white/30 md:h-[165px] md:w-[165px]">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  width={210}
                  height={210}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="pb-1 text-white">
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">{selectedLeader.name}</h2>
                <div className="my-2 h-[2px] w-10 rounded-full bg-white/60" />
                <p className="text-base font-semibold uppercase tracking-wider opacity-90 md:text-lg">
                  {selectedLeader.title}
                </p>
              </div>
            </div>
            <div className="space-y-4 px-6 py-6 md:px-8 md:py-7">
              {modalParagraphs.map((paragraph, index) => (
                <p
                  key={`${selectedLeader.name}-p-${index}`}
                  className="text-[15px] leading-relaxed text-gray-700 md:text-base md:leading-[1.65]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}