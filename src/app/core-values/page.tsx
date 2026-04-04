import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoreValuesSection from "@/components/CoreValuesSection";
import Link from "next/link";

export default function CoreValuesPage() {
  return (
    <main>
      <Navbar />

      <section className="hero-bg flex min-h-[300px] items-center overflow-hidden py-14 md:min-h-[360px] md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <div className="text-white">
              <h1 className="text-4xl font-extrabold md:text-5xl">Core Values</h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 md:text-base">
                Decibel&apos;s core values include maintaining ethical standards while fostering transparency. We focus
                on continuous improvement while prioritizing teamwork and partnerships, and we adapt confidently to
                advanced technology.
              </p>
              <Link
                href="#"
                className="mt-7 inline-block rounded-md border border-white/45 bg-white/10 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-end">
              <div className="relative h-56 w-full max-w-[330px] md:h-64 md:max-w-[390px]">
                <img
                  src="/images/core.png"
                  alt="Core Values Illustration"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreValuesSection />

      <Footer />
    </main>
  );
}
