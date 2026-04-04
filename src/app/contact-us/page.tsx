// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

// const contactCards = [
//   {
//     title: "Address",
//     description: "405, 4th Floor, Fortune Centre, P.E.C.H.S Block-06, Shahrah-e-Faisal, Karachi 75400, Pakistan.",
//     icon: MapPin,
//   },
//   {
//     title: "Hours",
//     description: "Mon - Fri: 9 am - 5 pm\nSat - Sun: closed",
//     icon: Clock3,
//   },
//   {
//     title: "Email",
//     description: "info@decibel360cloud.com",
//     icon: Mail,
//   },
//   {
//     title: "Phone",
//     description: "03 111 166 624",
//     icon: PhoneCall,
//   },
// ];

// const quickContact = [
//   { label: "Email", value: "info@decibel360cloud.com" },
//   { label: "Call", value: "03 111 166 624" },
//   { label: "Hours", value: "Mon - Fri, 9 am - 5 pm" },
// ];

// export default function ContactUsPage() {
//   return (
//     <main>
//       <Navbar />

//       <section className="hero-bg relative overflow-hidden py-14 md:py-16">
//         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(167,255,208,0.16),transparent_38%),radial-gradient(circle_at_88%_12%,rgba(133,255,191,0.12),transparent_36%)]" />

//         <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
//           <div className="text-white">
//             <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-bold tracking-[0.17em] text-white/90">
//               LET&apos;S CONNECT
//             </p>
//             <h1 className="mt-5 text-4xl font-extrabold md:text-6xl">Contact Us</h1>
//             <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 md:text-base">
//               Discover how Decibel can support your team with faster, smarter HR operations. Share your goals and our
//               team will connect with the right solution for your business.
//             </p>
//             <div className="mt-7 flex flex-wrap items-center gap-3">
//               <Link
//                 href="#contact-form"
//                 className="inline-block rounded-md border border-white/45 bg-white/10 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
//               >
//                 Contact Team
//               </Link>
//               <Link
//                 href="#"
//                 className="inline-block rounded-md bg-white px-8 py-3 text-sm font-bold text-[#177e41] transition-colors hover:bg-[#f3fff6]"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>

//           <div className="rounded-2xl border border-white/30 bg-white/12 p-5 text-white backdrop-blur-sm md:p-6">
//             <h2 className="text-lg font-extrabold uppercase tracking-wide text-white/90">Quick Contact</h2>
//             <div className="mt-4 space-y-3">
//               {quickContact.map((item) => (
//                 <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3">
//                   <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">{item.label}</p>
//                   <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact-form" className="bg-[#f5f7f6] py-12 md:py-16">
//         <div className="mx-auto max-w-6xl px-6">
//           <h2 className="mb-8 text-center text-3xl font-extrabold text-[#1f9f45] md:mb-10 md:text-5xl">
//             Our Team Is Ready To Assist You
//           </h2>

//           <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
//             <div className="overflow-hidden rounded-2xl border border-[#d7e7dc] bg-white shadow-[0_8px_30px_rgba(18,77,43,0.06)]">
//               <div className="bg-[#1f9f45] px-6 py-5 text-white md:px-8">
//                 <h3 className="text-2xl font-extrabold md:text-3xl">Tell Us About Your Requirement</h3>
//                 <p className="mt-2 text-sm text-white/90 md:text-base">
//                   Share your query and our specialists will respond with the right guidance.
//                 </p>
//               </div>

//               <form className="space-y-4 px-6 py-6 md:px-8 md:py-7">
//                 <div className="grid gap-3 sm:grid-cols-2">
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     className="w-full rounded-md border border-[#cdded3] bg-white px-4 py-3 text-sm text-[#1b2b24] placeholder:text-[#7f9187] outline-none transition-colors focus:border-[#1f9f45]"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full rounded-md border border-[#cdded3] bg-white px-4 py-3 text-sm text-[#1b2b24] placeholder:text-[#7f9187] outline-none transition-colors focus:border-[#1f9f45]"
//                   />
//                 </div>

//                 <div className="grid gap-3 sm:grid-cols-2">
//                   <input
//                     type="text"
//                     placeholder="Company Name"
//                     className="w-full rounded-md border border-[#cdded3] bg-white px-4 py-3 text-sm text-[#1b2b24] placeholder:text-[#7f9187] outline-none transition-colors focus:border-[#1f9f45]"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="w-full rounded-md border border-[#cdded3] bg-white px-4 py-3 text-sm text-[#1b2b24] placeholder:text-[#7f9187] outline-none transition-colors focus:border-[#1f9f45]"
//                   />
//                 </div>

//                 <textarea
//                   placeholder="Message"
//                   rows={6}
//                   className="w-full resize-none rounded-md border border-[#cdded3] bg-white px-4 py-3 text-sm text-[#1b2b24] placeholder:text-[#7f9187] outline-none transition-colors focus:border-[#1f9f45]"
//                 />

//                 <label className="flex items-start gap-3 text-sm text-[#5f6f66]">
//                   <input type="checkbox" className="mt-1 h-4 w-4 rounded border-[#b6c9be] text-[#1f9f45]" />
//                   <span>I agree to receive updates and responses from Decibel regarding my inquiry.</span>
//                 </label>

//                 <button
//                   type="submit"
//                   className="w-full rounded-md bg-[#1f9f45] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#19853b]"
//                 >
//                   Submit Request
//                 </button>
//               </form>
//             </div>

//             <div className="space-y-2.5">
//               <div className="grid gap-3 sm:grid-cols-2">
//                 {contactCards.map((card) => {
//                   const Icon = card.icon;
//                   return (
//                     <article
//                       key={card.title}
//                       className="flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-[#dce8e0] bg-white px-3.5 py-4 text-center"
//                     >
//                       <div className="rounded-full border border-[#d3e6d5] bg-[#f4fbf6] p-2 text-[#2f8a49]">
//                         <Icon className="h-4.5 w-4.5" strokeWidth={2} />
//                       </div>
//                       <h4 className="mt-2 text-xl font-extrabold text-[#2f8a49] md:text-2xl">{card.title}</h4>
//                       <p className="mt-1.5 whitespace-pre-line text-[13px] leading-relaxed text-[#6f7479] md:text-sm">{card.description}</p>
//                     </article>
//                   );
//                 })}
//               </div>

//               <div className="rounded-xl border border-[#dce8e0] bg-white p-3.5 md:p-4">
//                 <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6d8f7c]">Office Location</p>
//                 <h4 className="mt-1.5 text-xl font-extrabold text-[#1f9f45] md:text-2xl">Karachi, Pakistan</h4>
//                 <p className="mt-1 text-[13px] leading-relaxed text-[#5f6f66] md:text-sm">
//                   405, 4th Floor, Fortune Centre, P.E.C.H.S Block-06, Shahrah-e-Faisal, Karachi 75400.
//                 </p>
//               </div>
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
import Link from "next/link";
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

const contactCards = [
  {
    title: "Address",
    description: "405, 4th Floor, Fortune Centre, P.E.C.H.S Block-06, Shahrah-e-Faisal, Karachi 75400, Pakistan.",
    icon: MapPin,
  },
  {
    title: "Hours",
    description: "Mon - Fri: 9 am - 5 pm\nSat - Sun: closed",
    icon: Clock3,
  },
  {
    title: "Email",
    description: "info@decibel360cloud.com",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "03 111 166 624",
    icon: PhoneCall,
  },
];

export default function ContactUsPage() {
  return (
    <main style={{ fontFamily: "DM Sans, sans-serif" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero-bg relative overflow-hidden py-16 md:py-20">
        {/* subtle radial glows */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(167,255,208,0.18),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(133,255,191,0.13),transparent_38%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* pill badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-white/85 uppercase">Let&apos;s Connect</span>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div className="text-white">
              <h1
                className="text-4xl font-extrabold leading-tight md:text-6xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Contact Us
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-base">
                Discover how Decibel can support your team with faster, smarter HR operations. Share your goals and
                our team will connect with the right solution for your business.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#contact-form"
                  className="rounded-lg bg-white px-7 py-3 text-sm font-bold text-[#177e41] shadow-md transition-all hover:bg-[#f0fdf4] hover:shadow-lg"
                >
                  Contact Team
                </Link>
                <Link
                  href="#"
                  className="rounded-lg border border-white/40 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Quick contact glass card */}
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] text-white/60"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Quick Contact
              </p>
              <h2 className="mt-1 text-lg font-extrabold text-white">Reach Us Directly</h2>

              <div className="mt-5 space-y-3">
                {[
                  { icon: Mail, label: "Email", value: "info@decibel360cloud.com" },
                  { icon: PhoneCall, label: "Call", value: "03 111 166 624" },
                  { icon: Clock3, label: "Hours", value: "Mon – Fri, 9 am – 5 pm" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Icon className="h-3.5 w-3.5 text-emerald-300" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/55">{label}</p>
                      <p className="text-[13px] font-semibold text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section id="contact-form" className="bg-[#f4f7f5] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">

          {/* Section heading */}
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1D9E75]">Get In Touch</p>
            <h2
              className="mt-2 text-3xl font-extrabold text-gray-800 md:text-4xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Our Team Is Ready To Assist You
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500">
              Fill in the form below and a Decibel specialist will get back to you within one business day.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

            {/* ── FORM CARD ── */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
              {/* green header strip */}
              <div
                className="relative overflow-hidden px-7 py-6"
                style={{ background: "#46d649" }}
              >
                {/* decorative circles */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/8" />
                <div className="pointer-events-none absolute -bottom-4 -right-2 h-16 w-16 rounded-full bg-white/6" />
                <h3 className="relative text-2xl font-extrabold text-white md:text-3xl" style={{ fontFamily: "Syne, sans-serif" }}>
                  Tell Us About Your Requirement
                </h3>
                <p className="relative mt-1.5 text-[13px] text-white/80">
                  Share your query and our specialists will respond with the right guidance.
                </p>
              </div>

              <form className="space-y-4 px-7 py-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/10"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/10"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Company</label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/10"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Phone</label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/10"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Message</label>
                  <textarea
                    placeholder="Tell us about your HR requirements…"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:border-[#1D9E75] focus:bg-white focus:ring-2 focus:ring-[#1D9E75]/10"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-500">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#1D9E75]"
                  />
                  <span>I agree to receive updates and responses from Decibel regarding my inquiry.</span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md active:scale-[0.99]"
                  style={{ background: "#46d649" }}
                >
                  Submit Request →
                </button>
              </form>
            </div>

            {/* ── RIGHT SIDE ── */}
            <div className="flex flex-col gap-5">

              {/* 4 info cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={card.title}
                      className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1D9E75] hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0fdf4] transition-colors group-hover:bg-[#1D9E75]">
                        <Icon className="h-4 w-4 text-[#1D9E75] transition-colors group-hover:text-white" strokeWidth={2} />
                      </div>
                      <h4
                        className="mt-3 text-[15px] font-extrabold text-gray-800"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {card.title}
                      </h4>
                      <p className="mt-1.5 whitespace-pre-line text-[12px] leading-relaxed text-gray-500">
                        {card.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              {/* Office location card */}
              <div className="flex-1 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                {/* map placeholder / decorative header */}
                <div
                  className="relative flex h-[140px] items-center justify-center overflow-hidden"
                  style={{ background: "#46d649" }}
                >
                  {/* grid lines decoration */}
                  <div className="pointer-events-none absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative flex flex-col items-center text-white">
                    <MapPin className="h-8 w-8 drop-shadow-lg" strokeWidth={1.5} />
                    <p className="mt-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1D9E75]">Our Office</p>
                  <h4
                    className="mt-1 text-lg font-extrabold text-gray-800"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Fortune Centre, Karachi
                  </h4>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-gray-500">
                    405, 4th Floor, Fortune Centre, P.E.C.H.S Block-06,<br />
                    Shahrah-e-Faisal, Karachi 75400, Pakistan.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}