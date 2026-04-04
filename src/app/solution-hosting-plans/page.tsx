// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Image from "next/image";

// export default function SolutionHostingPlansPage() {
//   return (
//     <main>
//       <Navbar />

//       <section className="hero-bg py-10 md:py-16 min-h-[500px] flex items-center">
//         <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 text-white md:grid-cols-2">
//           <div>
//             <h1 className="text-3xl font-bold leading-tight md:text-5xl">Solution Hosting Plans</h1>
//             <p className="mt-4 max-w-2xl text-justify text-base leading-relaxed md:text-[18px]">
//               We offer scalable and reliable hosting solutions tailored to your business needs. Whether it&apos;s
//               secure data storage or high-performance servers, we take care of everything. Businesses can line up
//               their strategies and advanced technology using the best HR SaaS platform.
//             </p>
//             <button
//               type="button"
//               className="mt-4 inline-flex items-center justify-center bg-white px-5 py-2 text-sm font-medium text-[#2f9e44] transition-colors hover:bg-gray-100"
//             >
//               Learn More
//             </button>
//           </div>

//           <div className="flex items-center justify-center">
//             <Image
//               src="/images/solu.png"
//               alt="Solution hosting plans illustration"
//               width={760}
//               height={560}
//               className="h-auto w-full max-w-[500px] object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-12 md:py-16">
//         <div className="mx-auto max-w-5xl px-6">
//           {/* Section heading */}
//           <div className="mb-10 text-center">
//             <h2 className="text-xl font-bold text-[#2f9e44] md:text-2xl">Vendor Managed Service (VMS)</h2>
//             <p className="mt-2 text-sm text-gray-500 md:text-base">
//               A solution to focus on your core processes while outsourcing the extended HR activities.
//             </p>
//           </div>

//           {/* On-Site */}
//           <div className="mb-12 grid items-center gap-6 md:grid-cols-2">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 md:text-xl">On-Site</h3>
//               <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
//                 Preferable to large organizations when process(s) is outsourced and quantum requires on-site
//                 deployment of Decibel team.
//               </p>
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/images/onsite.png"
//                 alt="On-Site"
//                 width={380}
//                 height={280}
//                 className="h-auto w-full max-w-[340px] object-contain"
//               />
//             </div>
//           </div>

//           {/* Off-Site */}
//           <div className="mb-12 grid items-center gap-6 md:grid-cols-2">
//             <div className="flex justify-center md:order-1">
//               <Image
//                 src="/images/offsite.png"
//                 alt="Off-Site"
//                 width={380}
//                 height={280}
//                 className="h-auto w-full max-w-[340px] object-contain"
//               />
//             </div>
//             <div className="md:order-2">
//               <h3 className="text-lg font-semibold text-gray-800 md:text-xl">Off-Site</h3>
//               <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
//                 Preferable to small to midsize enterprises when process(s) is outsourced and manageable in an off
//                 shore manner i.e. extra saving for ground staff.
//               </p>
//             </div>
//           </div>

//           {/* SaaS */}
//           <div className="grid items-center gap-6 md:grid-cols-2">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 md:text-xl">SaaS</h3>
//               <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
//                 Preferable for all types of organizations intend to manage &amp; accountable to run Decibel with in
//                 house team.
//               </p>
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/images/saas.png"
//                 alt="SaaS"
//                 width={380}
//                 height={280}
//                 className="h-auto w-full max-w-[340px] object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Solution Hosting Plans Cards */}
//       <section className="bg-white py-10 md:py-14">
//         <div className="mx-auto max-w-5xl px-6">
//           <h2 className="mb-8 text-center text-xl font-bold text-[#2f9e44] md:text-2xl">Solution Hosting Plans</h2>
//           <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
//             {/* Card 1 */}
//             <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm">
//               <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="26" cy="24" r="14" stroke="#2f9e44" strokeWidth="3" fill="none"/>
//                 <path d="M20 24l4 4 8-8" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M44 44c0-7-4-12-10-14" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round"/>
//                 <circle cx="48" cy="48" r="8" fill="#e8f5e9"/>
//                 <path d="M45 48h6M48 45v6" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round"/>
//               </svg>
//               <p className="text-sm font-medium text-gray-600 leading-snug">Benchmarked knowledge band-width</p>
//             </div>
//             {/* Card 2 */}
//             <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm">
//               <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="32" cy="32" r="20" stroke="#2f9e44" strokeWidth="3" fill="none"/>
//                 <circle cx="32" cy="32" r="12" stroke="#2f9e44" strokeWidth="2" strokeDasharray="4 3" fill="none"/>
//                 <circle cx="32" cy="15" r="3" fill="#2f9e44"/>
//                 <path d="M32 20v8l5 3" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 <path d="M40 14l-2 5" stroke="#2f9e44" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//               <p className="text-sm font-medium text-gray-600 leading-snug">Strategy Driven</p>
//             </div>
//             {/* Card 3 */}
//             <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm">
//               <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M32 10l6 10H26l6-10z" stroke="#2f9e44" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
//                 <rect x="20" y="20" width="24" height="28" rx="3" stroke="#2f9e44" strokeWidth="2.5" fill="none"/>
//                 <path d="M26 32h12M26 38h8" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round"/>
//                 <circle cx="46" cy="46" r="8" fill="#e8f5e9"/>
//                 <path d="M43 46l2 2 4-4" stroke="#2f9e44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <p className="text-sm font-medium text-gray-600 leading-snug">Lifetime saving of infrastructure cost</p>
//             </div>
//             {/* Card 4 */}
//             <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm">
//               <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="32" cy="32" r="20" stroke="#2f9e44" strokeWidth="3" fill="none"/>
//                 <path d="M32 18v14l8 5" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//                 <text x="36" y="20" fontSize="10" fill="#2f9e44" fontWeight="bold">24</text>
//               </svg>
//               <p className="text-sm font-medium text-gray-600 leading-snug">24/7 un-interrupted service for all</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SolutionHostingPlansPage() {
  return (
    <main>
      <Navbar />
      <section className="hero-bg py-10 md:py-16 min-h-[500px] flex items-center">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 text-white md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">Solution Hosting Plans</h1>
            <p className="mt-4 max-w-2xl text-justify text-base leading-relaxed md:text-[18px]">
              We offer scalable and reliable hosting solutions tailored to your business needs. Whether it&apos;s
              secure data storage or high-performance servers, we take care of everything. Businesses can line up
              their strategies and advanced technology using the best HR SaaS platform.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center bg-white px-5 py-2 text-sm font-medium text-[#2f9e44] transition-colors hover:bg-gray-100"
            >
              Learn More
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/solu.png"
              alt="Solution hosting plans illustration"
              width={760}
              height={560}
              className="h-auto w-full max-w-[500px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-[#2f9e44] md:text-2xl">Vendor Managed Service (VMS)</h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              A solution to focus on your core processes while outsourcing the extended HR activities.
            </p>
          </div>
          {/* On-Site */}
          <div className="mb-12 grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 md:text-xl">On-Site</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
                Preferable to large organizations when process(s) is outsourced and quantum requires on-site
                deployment of Decibel team.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/onsite.png"
                alt="On-Site"
                width={380}
                height={280}
                className="h-auto w-full max-w-[340px] object-contain"
              />
            </div>
          </div>
          {/* Off-Site */}
          <div className="mb-12 grid items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center md:order-1">
              <Image
                src="/images/offsite.png"
                alt="Off-Site"
                width={380}
                height={280}
                className="h-auto w-full max-w-[340px] object-contain"
              />
            </div>
            <div className="md:order-2">
              <h3 className="text-lg font-semibold text-gray-800 md:text-xl">Off-Site</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
                Preferable to small to midsize enterprises when process(s) is outsourced and manageable in an off
                shore manner i.e. extra saving for ground staff.
              </p>
            </div>
          </div>
          {/* SaaS */}
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 md:text-xl">SaaS</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">
                Preferable for all types of organizations intend to manage &amp; accountable to run Decibel with in
                house team.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/saas.png"
                alt="SaaS"
                width={380}
                height={280}
                className="h-auto w-full max-w-[340px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Hosting Plans Cards */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-xl font-bold text-[#2f9e44] md:text-2xl">Solution Hosting Plans</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            {/* Card 1 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2f9e44] cursor-default">
              <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="24" r="14" stroke="#2f9e44" strokeWidth="3" fill="none"/>
                <path d="M20 24l4 4 8-8" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M44 44c0-7-4-12-10-14" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="48" cy="48" r="8" fill="#e8f5e9"/>
                <path d="M45 48h6M48 45v6" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <p className="text-sm font-medium text-gray-600 leading-snug">Benchmarked knowledge band-width</p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2f9e44] cursor-default">
              <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="20" stroke="#2f9e44" strokeWidth="3" fill="none"/>
                <circle cx="32" cy="32" r="12" stroke="#2f9e44" strokeWidth="2" strokeDasharray="4 3" fill="none"/>
                <circle cx="32" cy="15" r="3" fill="#2f9e44"/>
                <path d="M32 20v8l5 3" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40 14l-2 5" stroke="#2f9e44" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-sm font-medium text-gray-600 leading-snug">Strategy Driven</p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2f9e44] cursor-default">
              <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 10l6 10H26l6-10z" stroke="#2f9e44" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
                <rect x="20" y="20" width="24" height="28" rx="3" stroke="#2f9e44" strokeWidth="2.5" fill="none"/>
                <path d="M26 32h12M26 38h8" stroke="#2f9e44" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="46" cy="46" r="8" fill="#e8f5e9"/>
                <path d="M43 46l2 2 4-4" stroke="#2f9e44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm font-medium text-gray-600 leading-snug">Lifetime saving of infrastructure cost</p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2f9e44] cursor-default">
              <svg viewBox="0 0 64 64" fill="none" className="mb-4 h-14 w-14" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="20" stroke="#2f9e44" strokeWidth="3" fill="none"/>
                <path d="M32 18v14l8 5" stroke="#2f9e44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="36" y="20" fontSize="10" fill="#2f9e44" fontWeight="bold">24</text>
              </svg>
              <p className="text-sm font-medium text-gray-600 leading-snug">24/7 un-interrupted service for all</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
