import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const quickStats = [
  { value: "16+", label: "Years Experience" },
  { value: "9", label: "Countries" },
  { value: "299,933+", label: "Active Employees" },
  { value: "300+", label: "Clients" },
  { value: "45+", label: "Clients Go-Live In 2024" },
  { value: "2,999,325+", label: "Hours Saved Annually" },
];

const companyHighlights = [
  { value: "15+", label: "Years Experience" },
  { value: "300+", label: "Clients Served" },
  { value: "9", label: "Countries" },
];

export default function AboutUsPage() {
  return (
    <main>
      <Navbar />

      <section className="hero-bg relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(168,255,211,0.14)_0%,transparent_38%),radial-gradient(circle_at_80%_10%,rgba(93,225,145,0.12)_0%,transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center text-white">
          
          <h1 className="mt-5 text-4xl font-bold md:text-5xl">About Us</h1>

          <p className="mx-auto mt-7 max-w-4xl text-base leading-[1.95] text-white/90 md:text-[18px]">
            Welcome to Decibel! With a commitment to shaping business better and thriving workplace, we specialize in
            offering the best HR solutions. From talent acquisition to performance management and employee engagement,
            we&apos;ve got you covered. In simple words, you can count on us, to help you navigate the entire workforce
            lifestyle in an advanced yet simple way. Embracing HR excellence is our top quality that drives
            innovations and achievement for a brighter and digital world.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/20"
          >
            Learn More
          </button>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-[#eaf2ef] bg-white md:grid-cols-3 lg:grid-cols-6">
            {quickStats.map((item) => (
              <div
                key={item.label}
                className="border-b border-r border-[#eef3f1] px-4 py-4 text-center last:border-r-0 md:px-5 md:py-5 lg:border-b-0"
              >
                <p className="text-xl font-extrabold text-[#11a86f] md:text-2xl">{item.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#8aa19a] md:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbf9] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#73a292]">About Decibel</p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#122f2b] md:text-5xl">
            Pakistan&apos;s Leading
            <span className="block text-[#12a06d]">Enterprise HR Platform</span>
          </h2>

          <div className="mt-7 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <div className="space-y-4 text-base leading-7 text-[#445a55] md:text-[17px]">
                <p>
                  Decibel stands as a reputable enterprise cloud service, boasting a track record of more than 15
                  years in delivering HR solutions to a diverse clientele across nine countries, including the UAE,
                  Egypt, Morocco, Lebanon, Global, UK, USA, Bahrain, and Saudi Arabia. Operating on cutting-edge
                  technology, we have catered to over 300 customers during this time.
                </p>
                <p>
                  Our platform embodies both cutting-edge sophistication and robust security, serving businesses of all
                  sizes with unwavering competence. Whether you&apos;re an emerging startup with a handful of team members
                  or a colossal corporation commanding a workforce exceeding 15,000, Decibel stands ready to adeptly
                  meet your demands.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {companyHighlights.map((item) => (
                  <div key={item.label} className="rounded-xl border border-[#dbede6] bg-white px-3 py-4 text-center">
                    <p className="text-2xl font-extrabold text-[#12a06d]">{item.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#7a958d]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#075941] via-[#0d8a5e] to-[#37c28f] p-2">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(171,255,224,0.28),transparent_42%)]" />
              <Image
                src="/images/one.jpg"
                alt="Team discussion at Decibel"
                width={740}
                height={430}
                className="relative h-full w-full rounded-xl object-cover"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
            <div className="relative order-2 overflow-hidden rounded-2xl bg-gradient-to-br from-[#075941] via-[#0d8a5e] to-[#37c28f] p-2 md:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(171,255,224,0.28),transparent_42%)]" />
              <Image
                src="/images/two.jpeg"
                alt="Business collaboration"
                width={740}
                height={430}
                className="relative h-full w-full rounded-xl object-cover"
                priority={false}
              />
            </div>

            <div className="order-1 flex flex-col justify-center md:order-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#73a292]">Our Mission</p>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight text-[#122f2b] md:text-4xl">
                Transforming HR into a
                <span className="block text-[#12a06d]">Strategic Advantage</span>
              </h3>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#445a55] md:text-[17px]">
                <p>
                  As the most secure platform available, we have effectively met our customers&apos; needs and
                  requirements. We have provided them with seamless management of HR processes and the employee life
                  cycle through our comprehensive range of products and services, all within a single, integrated
                  tool.
                </p>
                <p>
                  Our state-of-the-art technology has fundamentally transformed the landscape of human resources,
                  enabling companies to evolve their HR function from a traditional administrative task into a
                  strategic business advantage.
                </p>
              </div>

              <button
                type="button"
                className="mt-7 inline-flex w-fit items-center justify-center rounded-md bg-[#12a06d] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0d8a5e]"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
