'use client';
import React from 'react';
import Link from 'next/link';

const footerCols = [
  {
    title: 'Decibel',
    links: [
      { label: 'Discover Decibel', href: '#' },
      { label: 'Why Decibel', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Decibel Core HR', href: '#' },
      { label: 'Automated Payroll', href: '#' },
      { label: 'Biometric Devices', href: '#' },
      { label: 'Performance Suite', href: '#' },
      { label: 'Time and Attendance Management', href: '#' },
      { label: 'Recruitment', href: '#' },
      { label: 'Leave Management', href: '#' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Login', href: '#' },
      { label: 'Signup', href: '#' },
    ],
  },
];

const offices = [
  {
    flagCode: 'ae',
    country: 'UAE',
    addr: 'Office 205, 2nd Floor, Robot Park Tower, Al Khan, Sharjah.',
  },
  {
    flagCode: 'pk',
    country: 'Karachi Office',
    addr: 'Suite 405, 4th Floor, Fortune Center, PECHS Block 6, Shahra-e-Faisal, Karachi, 75400.',
  },
  {
    flagCode: 'pk',
    country: 'Lahore Office',
    addr: '3rd Floor, Vouge Towers, 15 C/2, Gulberg 3, M.M. Alam Road, Lahore, 54000.',
  },
];

export default function Footer() {
  return (
    // <footer className="bg-black border-t-4 border-green-500 text-white">
      <footer className="bg-[#008057] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-8 pt-10 pb-6">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-10 mb-10 items-start">

          {/* TEXT LOGO */}
          <div className="flex-shrink-0 w-56">
            <h2 className="text-white text-3xl font-bold tracking-wide">
              DECIBEL
            </h2>
          </div>

          {/* Nav Columns */}
          <div className="flex flex-1 flex-wrap gap-10">
            {footerCols.map((col) => (
              <div key={col.title} className="min-w-[140px]">
                <h4 className="text-white font-bold text-base mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-white/80 text-sm hover:text-green-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0">

            {/* Google Play */}
            <Link
              href="#"
              className="flex items-center gap-3 border border-white/15 rounded-xl px-4 py-3 hover:border-green-400 transition-colors shadow-sm bg-black/40"
              style={{ minWidth: '190px' }}
            >
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M3.18 23.76c.38.21.82.24 1.24.08l11.72-6.77-2.62-2.62-10.34 9.31z" fill="#EA4335" />
                <path d="M20.82 10.45l-3.2-1.85-2.93 2.93 2.93 2.93 3.22-1.86c.92-.53.92-1.62-.02-2.15z" fill="#FBBC04" />
                <path d="M4.42.24C4 .08 3.56.11 3.18.32L13.55 10.7l2.62-2.62L4.42.24z" fill="#4285F4" />
                <path d="M3.18.32C2.46.74 2 1.5 2 2.42v19.16c0 .92.46 1.68 1.18 2.1l10.37-10.38L3.18.32z" fill="#34A853" />
              </svg>
              <div>
                <p className="text-[10px] text-white/60 uppercase tracking-wide leading-tight">GET IT ON</p>
                <p className="text-sm font-bold text-white leading-tight">Google Play</p>
              </div>
            </Link>

            {/* App Store */}
            <Link
              href="#"
              className="flex items-center gap-3 border border-white/15 rounded-xl px-4 py-3 hover:border-green-400 transition-colors shadow-sm bg-black/40"
              style={{ minWidth: '190px' }}
            >
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="#fff">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.15 1.26-2.13 3.75.03 2.99 2.62 3.99 2.65 4l.04.01c-.03.07-.41 1.4-1.31 2.86zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <p className="text-[10px] text-white/60 uppercase tracking-wide leading-tight">DOWNLOAD ON THE</p>
                <p className="text-sm font-bold text-white leading-tight">App Store</p>
              </div>
            </Link>

              {/* 🔽 NEW IMAGE BELOW BUTTONS */}
<img
  src="/images/gdpr-compliance-lgoo.png"
  alt="Footer decoration"
  className="mt-16 w-64 h-auto object-contain opacity-90"
/>

          </div>
        </div>

        {/* Offices */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-white font-bold text-xl mb-6">Our Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
            {offices.map((o) => (
              <div key={o.country}>
                <img
                  src={`https://flagcdn.com/48x36/${o.flagCode}.png`}
                  alt={o.country}
                  className="mb-3 rounded-sm shadow-sm"
                />
                <p className="text-white font-semibold text-sm mb-1">{o.country}</p>
                <p className="text-white/75 text-sm leading-relaxed mb-2">{o.addr}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/70 text-xs">© 2024 DecibelBPO. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-white/70 text-xs hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/70 text-xs hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}