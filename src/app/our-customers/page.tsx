// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";

// export default function OurCustomersPage() {
//   // ✅ 177 images auto generate
//   const clients = Array.from({ length: 177 }, (_, i) => `/images/New Folder/Picture${i + 1}.png`);

//   return (
//     <main>
//       <Navbar />

//       {/* 🔹 GREEN HERO SECTION */}
//       <section className="hero-bg flex min-h-[300px] items-center justify-center py-14 md:min-h-[360px] md:py-16">
//         <div className="px-6 text-center text-white">
//           <h1 className="text-4xl font-extrabold md:text-6xl">Our Customers</h1>
//           <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed md:text-base">
//             At Decibel, customer satisfaction is our priority. There are over 300 companies who have trusted us, for
//             getting a diverse range of services. We partner with startups to established enterprises to help them in
//             all stages and help them step into the world of digitalization. Allow your business to dive into the world of success today!

//           </p>
          
//           <Link
//             href="#"
//             className="mt-8 inline-block rounded-md border border-white/45 bg-white/10 px-10 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
//           >
//             Learn More
//           </Link>
//         </div>
//       </section>

//       {/* 🔥 HEADING BEFORE LOGOS */}
//       <section className="bg-white pt-12">
//         <h2 className="text-center text-2xl md:text-3xl font-bold text-green-600">
//           300+ Companies Digitally Empowered, Are You?
//         </h2>
//       </section>

//       {/* 🔥 CLIENT LOGOS GRID */}
//       <section className="bg-white py-8">
//         <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {clients.map((logo, index) => (
//             <div key={index} className="flex items-center justify-center">
//               <img
//                 src={logo}
//                 alt={`client-${index}`}
//                 className="h-12 object-contain transition hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function OurCustomersPage() {
  const clients = Array.from({ length: 177 }, (_, i) => `/images/New Folder/Picture${i + 1}.png`);

  // 🔹 Split into chunks of 20
  const chunkSize = 10;
  const rows = [];
  for (let i = 0; i < clients.length; i += chunkSize) {
    rows.push(clients.slice(i, i + chunkSize));
  }

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero-bg flex min-h-[300px] items-center justify-center py-14 md:min-h-[360px] md:py-16">
        <div className="px-6 text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-6xl">Our Customers</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed md:text-base">
            At Decibel, customer satisfaction is our priority...
          </p>

          <Link
            href="#"
            className="mt-8 inline-block rounded-md border border-white/45 bg-white/10 px-10 py-3 text-sm font-bold text-white hover:bg-white/20"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* HEADING */}
      <section className="bg-white pt-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-green-600">
          300+ Companies Digitally Empowered, Are You?
        </h2>
      </section>

      {/* 🔥 MARQUEE LOGOS */}
      <section className="bg-white py-12 space-y-10 overflow-hidden fade-edges">
      {/* <section className="bg-white py-12 space-y-10 overflow-hidden"> */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div
              className={`flex gap-16 md:gap-24 ${
                rowIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"
              }`}
            >
              {/* Duplicate for infinite loop */}
              {[...row, ...row].map((logo, index) => (
                <div
                  key={index}
                  className="w-24 md:w-28 flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={logo}
                    alt="client-logo"
                    className="h-7 md:h-9 object-contain opacity-70 hover:opacity-100 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}