// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Image from "next/image";

// export default function ValueAdditionsPage() {
//   return (
//     <main>
//       <Navbar />

//       <section className="hero-bg py-10 md:py-16 min-h-[500px] flex items-center">
//         <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 text-white md:grid-cols-2">
//           <div>
//             <h1 className="text-3xl font-bold leading-tight md:text-5xl">Value Additions</h1>
//             <p className="mt-4 max-w-2xl text-justify text-base leading-relaxed md:text-[18px]">
//               Adding value to businesses makes us satisfied. We believe in the power of technology while
//               understanding that your team would not be able to handle wide screens 24/7. That&apos;s why, we offer,
//               the best HR Mobile app. At Decibel, we are highly focused to encompass enhanced customer experiences,
//               innovative products/services, streamlined processes, and a focus on sustainability. You will find
//               Cloud-based HR Systems, Mobile HRMS Software, Applicant and tracking system.
//             </p>

//             <button
//               type="button"
//               className="mt-4 inline-flex items-center justify-center bg-white px-5 py-2 text-sm font-medium text-[#2f9e44] transition-colors hover:bg-gray-100"
//             >
//               Learn More
//             </button>
//           </div>

//           <div className="flex items-end justify-center">
//             <Image
//               src="/images/value1.png"
//               alt="Value additions illustration"
//               width={760}
//               height={560}
//               className="h-auto w-full max-w-[500px] object-contain"
//               priority={false}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Chain Features Section */}
//       <section className="bg-white py-8 md:py-12">
//         <div className="mx-auto max-w-5xl px-4">
//           <Image
//             src="/images/add.png"
//             alt="Value additions features"
//             width={1200}
//             height={500}
//             className="h-auto w-full max-w-4xl mx-auto object-contain"
//           />
//         </div>
//       </section>


//       <Footer />
//     </main>
//   );
// }

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="30" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="6 3" />
        <path d="M20 32 Q26 20 32 32 Q38 44 44 32" stroke="#1D9E75" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="44" cy="32" r="4" fill="#1D9E75" />
        <path d="M42 30 L46 32 L42 34" fill="#1D9E75" />
      </svg>
    ),
    title: "Connect",
    desc: "Decibel Connect your company's social media.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="30" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="6 3" />
        <rect x="20" y="18" width="24" height="30" rx="3" stroke="#1D9E75" strokeWidth="2.5" />
        <path d="M25 26h14M25 32h14M25 38h8" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" />
        <circle cx="43" cy="43" r="6" fill="white" stroke="#1D9E75" strokeWidth="2" />
        <path d="M41 43l2 2 3-3" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Tracker",
    desc: "A dedicated platform to track employee info.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="30" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="6 3" />
        <rect x="18" y="38" width="6" height="10" rx="1.5" fill="#1D9E75" />
        <rect x="27" y="30" width="6" height="18" rx="1.5" fill="#1D9E75" />
        <rect x="36" y="22" width="6" height="26" rx="1.5" fill="#1D9E75" />
        <path d="M20 28 L30 22 L42 16" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" />
        <path d="M39 16 L42 16 L42 19" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Analytics",
    desc: "Go far with analytics for headcounts diversity.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="30" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="6 3" />
        <rect x="26" y="14" width="12" height="22" rx="3" stroke="#1D9E75" strokeWidth="2.2" />
        <circle cx="32" cy="33" r="1.5" fill="#1D9E75" />
        <path d="M20 44h24" stroke="#1D9E75" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M28 44v4h8v-4" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Portal & Mobile App",
    desc: "User-friendly Web Portal and Mobile App – 24/7.",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <circle cx="32" cy="32" r="30" stroke="#1D9E75" strokeWidth="2.5" strokeDasharray="6 3" />
        <rect x="14" y="20" width="36" height="24" rx="4" stroke="#1D9E75" strokeWidth="2.2" />
        <circle cx="32" cy="30" r="6" stroke="#1D9E75" strokeWidth="2" />
        <path d="M26 36 Q32 42 38 36" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M22 44l4 4h12l4-4" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Assistant",
    desc: "Your trusted virtual assistant – similar to Siri and Alexa.",
  },
];

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  return (
    <div
      style={{
        minHeight: 220,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className="group flex flex-col items-center justify-start rounded-2xl border border-gray-100 bg-white px-5 py-8 text-center shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#1D9E75] cursor-default"
    >
      <div className="mb-5 flex items-center justify-center">{feature.icon}</div>
      <p
        className="text-[15px] font-semibold leading-snug text-gray-700"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {feature.title}
      </p>
      <p
        className="mt-2 text-[13px] leading-relaxed text-gray-500"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {feature.desc}
      </p>
    </div>
  );
}

export default function ValueAdditionsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-bg py-10 md:py-16 min-h-[500px] flex items-center">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 text-white md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">Value Additions</h1>
            <p className="mt-4 max-w-2xl text-justify text-base leading-relaxed md:text-[18px]">
              Adding value to businesses makes us satisfied. We believe in the power of technology while
              understanding that your team would not be able to handle wide screens 24/7. That&apos;s why, we offer,
              the best HR Mobile app. At Decibel, we are highly focused to encompass enhanced customer experiences,
              innovative products/services, streamlined processes, and a focus on sustainability. You will find
              Cloud-based HR Systems, Mobile HRMS Software, Applicant and tracking system.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center bg-white px-5 py-2 text-sm font-medium text-[#2f9e44] transition-colors hover:bg-gray-100"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-end justify-center">
            <Image
              src="/images/value1.png"
              alt="Value additions illustration"
              width={760}
              height={560}
              className="h-auto w-full max-w-[500px] object-contain"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            className="mb-12 text-center text-3xl font-bold md:text-4xl"
            style={{ color: "#1D9E75", fontFamily: "Syne, sans-serif" }}
          >
            Solution Hosting Plans
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}