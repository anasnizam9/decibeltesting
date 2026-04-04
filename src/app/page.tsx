"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSlider from "@/components/ClientsSlider";
import GlobalPresence from "@/components/GlobalPresence";
import OurJourney from "@/components/Ourjourney";
import Modulessection from "@/components/Modulessection";
import Carousel3d from "@/components/Carousel3d";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/Newssection";
import Videosection from "@/components/Videosection";
import Footer from "@/components/Footer";


type Achievement = {
  year: number;
  title: string;
  description: string;
  category: 'career' | 'personal' | 'milestone';
};

const achievements: Achievement[] = [
  {
    year: 2009,
    title: 'Getting Started',
    description: 'Joined hands with Syed Azhar Ali with a vision of introducing the concept of digitalization in HRMS field',
    category: 'career',
  },
  {
    year: 2011,
    title: 'Achieve the Successful Conversion of Our Initial Client',
    description: 'British Petroleum with over 50 Employees',
    category: 'milestone',
  },
  {
    year: 2013,
    title: 'Converted 23 clients',
    description: 'Successfully converted 23 clients with 4396+ Employee base',
    category: 'career',
  },
  {
    year: 2014,
    title: 'Launched Decibel 4',
    description: 'Successfully Introduced Decibel 4, Accompanied by a Growth in Our Workforce to 15 Dedicated Professionals, Effectively Serving 30 Valued Clients On Our Enterprise Cloud Platform.',
    category: 'milestone',
  },
  {
    year: 2016,
    title: 'Mobile App Launched',
    description: 'Decibel Embarked on a Full Digital Transformation with the Unveiling of Our Innovative Mobile App.',
    category: 'career',
  },
  {
    year: 2017,
    title: 'Began Providing Platform as a Service to Our Valued Clients',
    description: 'Total Parco Stood as our Inaugural SaaS Client, Signifying a Landmark Collaboration with Over 400 Dedicated Employees.',
    category: 'milestone',
  },
  {
    year: 2018,
    title: '50,000+ Employees',
    description: 'Our cloud size increased to 50k+ employees with an annual payroll turnover of $10 Million',
    category: 'career',
  },
  {
    year: 2021,
    title: '5th Version of Decibel',
    description: 'Launched 5th Version of Decibel for Web Portal and Mobile App',
    category: 'milestone',
  },
  {
    year: 2022,
    title: 'Marked by a Management Buyout and an Impressive Global Expansion',
    description: 'Decibel Achieved a Milestone in the Tech Industry this Year. Our Accomplishments Included the Seamless Conversion of Mondelez, Coupled with Expert Payroll Management Across Seven Distinct Countries, Setting a Resounding Benchmark for Excellence.',
    category: 'career',
  },
  {
    year: 2024,
    title: 'Expands to 9 Countries, Serves 300+ Clients, and Wins "Best in BPO Services" Award',
    description: 'Decibel marks a major milestone with a presence in 9 countries, a growing client base of 300+, and the prestigious "Best in BPO Services" accreditation by HBL P@SHA.',
    category: 'milestone',
  },
];

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <section data-reveal style={{ transitionDelay: "0ms" }}>
        <HeroSection />
      </section>
      <section data-reveal style={{ transitionDelay: "90ms" }}>
        <ClientsSlider />
      </section>
      <section data-reveal style={{ transitionDelay: "140ms" }}>
        <GlobalPresence />
      </section>
      <section data-reveal style={{ transitionDelay: "180ms" }}>
        <Videosection />
      </section>
      <section data-reveal style={{ transitionDelay: "220ms" }}>
        <OurJourney />
      </section>
      <section data-reveal style={{ transitionDelay: "260ms" }}>
        <Modulessection />
      </section>
      <section data-reveal style={{ transitionDelay: "300ms" }}>
        <NewsSection />
      </section>
      <section data-reveal style={{ transitionDelay: "340ms" }}>
        <Carousel3d />
      </section>
      <section data-reveal style={{ transitionDelay: "380ms" }}>
        <PricingSection />
      </section>
      <section data-reveal style={{ transitionDelay: "420ms" }}>
        <TestimonialsSection />
      </section>
      <section data-reveal style={{ transitionDelay: "460ms" }}>
        <Footer />
      </section>
    </main>
  );
}