"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


type MenuItem = {
  label: string;
  href: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type MenuCategory = {
  label: string;
  sections: MenuSection[];
};

type MegaMenu = {
  categories: MenuCategory[];
};

const navLinks = [
  { label: "Why Decibel?", href: "#" },
  { label: "Products", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "#" },
  { label: "Company", href: "#" },
];

const whyDecibelDropdown: MenuItem[] = [
  { label: "Why we're Different?", href: "/why-we-are-different" },
  { label: "Value Additions", href: "/value-additions" },
  { label: "Solution Hosting Plans", href: "/solution-hosting-plans" },
  
];

const enablingHrProcessesDropdown: MenuItem[] = [
  { label: "Employee Data Management", href: "/Employee-data" },
  { label: "Payroll Tax & Benefit", href: "/payroll" },
  { label: "End of Service Benefits", href: "/End-of-service" },
  { label: "Attendance Management", href: "/attendance" },
  { label: "Leave Management", href: "/leave" },
  { label: "Expense Management", href: "/expense" },
  { label: "Travel & ExpenseManagement", href: "/travel" },
  { label: "Employee Services", href: "/employee" },
  { label: "Employee Asset Management", href: "/employee-asset" },
  { label: "People Helpdesk", href: "/helpdesk" },
  { label: "HR Analytics", href: "/analytics" },
  { label: "HR Budgeting", href: "/budget" },
];

const talentManagementDropdown: MenuItem[] = [
  { label: "Talent Acquisition", href: "/talent-acquisition" },
  { label: "Succession Planning", href: "/succession-planning" },
  { label: "Performance Management", href: "/performance-management" },
  { label: "Onboarding", href: "/on-boarding" },
  { label: "Learning, Planning and Administration", href: "/Learning" },
  { label: "Pulse Survey", href: "/pulse-survey" },
  { label: "360 Review", href: "360-reviews" },
];

const insightsDropdown: MenuItem[] = [
  // { label: "Blogs", href: "#" },
  { label: "Events & Webinars", href: "#" },
  { label: "Leap 2024", href: "/leap-2024" },
  { label: "What's New?", href: "#" },
];

const companyDropdown: MenuItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Leadership", href: "/our-leadership" },
  { label: "Our Customers", href: "/our-customers" },
  { label: "Core Values", href: "/core-values" },
  { label: "Contact Us", href: "/contact-us" },
];

const zelDropdown: MenuItem[] = [
  { label: "Zel Intro", href: "/zel-intro" },
  { label: "Zel AI Agent", href: "/zel-ai-agent" },
];

const zibelDropdown: MenuItem[] = [
  { label: "Zibel Intro", href: "/zibel-intro" },
  { label: "Zibel", href: "/zibel" },
];

const productsTopLevelDropdown: MenuItem[] = [
  { label: "Enabling HR Processes", href: "#" },
  { label: "Talent Management Processes", href: "#" },
  { label: "Zel AI Agent", href: "#" },
  { label: "Zibel", href: "#" },
];

const megaMenus: Record<string, MegaMenu> = {
  "Why Decibel?": {
    categories: [
      {
        label: "For Decision Makers",
        sections: [
          {
            title: "Core Highlights",
            items: [whyDecibelDropdown[0], whyDecibelDropdown[1]],
          },
          {
            title: "Advanced Value",
            items: [whyDecibelDropdown[2], whyDecibelDropdown[3]],
          },
        ],
      },
      {
        label: "For Operations",
        sections: [
          {
            title: "What Makes Us Different",
            items: [whyDecibelDropdown[0], whyDecibelDropdown[2]],
          },
          {
            title: "Automation Focus",
            items: [whyDecibelDropdown[1], whyDecibelDropdown[3]],
          },
        ],
      },
    ],
  },
  Products: {
    categories: [
      {
        label: "For HR Teams",
        sections: [
          {
            title: "Core Modules",
            items: [
              { label: "Payroll and Benefits", href: "#" },
              { label: "Attendance Management", href: "#" },
              { label: "Leave Management", href: "#" },
              { label: "Performance Management", href: "/performance-management" },
            ],
          },
          {
            title: "Talent Modules",
            items: [
              { label: "Talent Acquisition", href: "/talent-acquisition" },
              { label: "Succession Planning", href: "/succession-planning" },
              { label: "360 Reviews", href: "#" },
            ],
          },
        ],
      },
      {
        label: "For Finance",
        sections: [
          {
            title: "Payroll Controls",
            items: [
              { label: "Payroll and Benefits", href: "#" },
              { label: "Expense Management", href: "#" },
              { label: "Travel & Expense Management", href: "#" },
            ],
          },
          {
            title: "Insights",
            items: [
              { label: "HR Analytics", href: "#" },
              { label: "Employee Asset Management", href: "#" },
            ],
          },
        ],
      },
      {
        label: "For Managers",
        sections: [
          {
            title: "Team Performance",
            items: [
              { label: "Performance Management", href: "/performance-management" },
              { label: "Learning, Planning and Administration", href: "#" },
              { label: "Attendance Management", href: "#" },
            ],
          },
          {
            title: "Workflow",
            items: [
              { label: "Leave Management", href: "#" },
              { label: "Employee Service", href: "#" },
            ],
          },
        ],
      },
      {
        label: "For Employees",
        sections: [
          {
            title: "Daily Work",
            items: [
              { label: "Employee Data", href: "#" },
              { label: "Employee Service", href: "#" },
              { label: "Leave Management", href: "#" },
              { label: "Attendance Machines", href: "#" },
            ],
          },
          {
            title: "Career Growth",
            items: [
              { label: "Onboarding", href: "#" },
              { label: "Learning, Planning and Administration", href: "#" },
            ],
          },
        ],
      },
    ],
  },
  Insights: {
    categories: [
      {
        label: "Explore",
        sections: [
          {
            title: "Latest Content",
            items: insightsDropdown,
          },
        ],
      },
      {
        label: "Trending",
        sections: [
          {
            title: "Popular",
            items: [insightsDropdown[0], insightsDropdown[1]],
          },
          {
            title: "Product Updates",
            items: [insightsDropdown[2], insightsDropdown[3]],
          },
        ],
      },
    ],
  },
  Company: {
    categories: [
      {
        label: "About Decibel",
        sections: [
          {
            title: "Who We Are",
            items: [companyDropdown[0], companyDropdown[1], companyDropdown[3]],
          },
          {
            title: "Connect",
            items: [companyDropdown[2], companyDropdown[4]],
          },
        ],
      },
      {
        label: "Quick Access",
        sections: [
          {
            title: "Company Links",
            items: companyDropdown,
          },
        ],
      },
    ],
  },
};

const defaultMegaCategory: Record<string, string> = {
  "Why Decibel?": "For Decision Makers",
  Products: "For HR Teams",
  Insights: "Explore",
  Company: "About Decibel",
};

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
//   const [activeCategoryByMenu, setActiveCategoryByMenu] = useState<Record<string, string>>(defaultMegaCategory);
//   // No submenu open by default
//   const [activeProductsSubmenu, setActiveProductsSubmenu] = useState<"enabling" | "talent" | "zel" | "zibel" | null>(null);
//   const desktopNavRef = useRef<HTMLDivElement | null>(null);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [activeCategoryByMenu, setActiveCategoryByMenu] = useState<Record<string, string>>(defaultMegaCategory);

  const [activeProductsSubmenu, setActiveProductsSubmenu] = useState<
    "enabling" | "talent" | "zel" | "zibel" | null
  >(null);

  // ✅ YAHAN add karo
  const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const openDesktopMenu = (menuLabel: string) => {
    setActiveDesktopMenu(menuLabel);
    if (menuLabel === "Products") {
      setActiveProductsSubmenu(null); // No submenu open by default
    }
    setActiveCategoryByMenu((prev) => ({
      ...prev,
      [menuLabel]: prev[menuLabel] || megaMenus[menuLabel]?.categories[0]?.label,
    }));
  };

  const toggleDesktopMenu = (menuLabel: string) => {
    if (activeDesktopMenu === menuLabel) {
      setActiveDesktopMenu(null);
      if (menuLabel === "Products") setActiveProductsSubmenu(null);
      return;
    }
    openDesktopMenu(menuLabel);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!desktopNavRef.current) {
        return;
      }

      if (!desktopNavRef.current.contains(event.target as Node)) {
        setActiveDesktopMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-1">
          <img
            src="/images/header.png"
            alt="Logo"
            className="h-20 w-20 object-contain"
            style={{ maxHeight: "60px", maxWidth: "80px" }}
          />
        </Link>

        <div ref={desktopNavRef} className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const megaMenu = megaMenus[link.label];

            if (link.label === "Pricing") {
              return (
                <Link
                  key={link.label}
                  href={pathname === "/" ? "#pricing-section" : "/#pricing-section"}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-[#f3fbf7] hover:text-[#0e6f55]"
                >
                  {link.label}
                </Link>
              );
            }

            if (!megaMenu) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              );
            }

            const activeCategoryLabel =
              activeCategoryByMenu[link.label] || megaMenu.categories[0].label;

            const selectedCategory =
              megaMenu.categories.find((category) => category.label === activeCategoryLabel) ||
              megaMenu.categories[0];

            const isOpen = activeDesktopMenu === link.label;
            const isWhyDecibelMenu = link.label === "Why Decibel?";
            const isProductsMenu = link.label === "Products";
            const isInsightsMenu = link.label === "Insights";
            const isCompanyMenu = link.label === "Company";

            return (
              <div
  key={link.label}
  className="relative"
  onMouseEnter={() => openDesktopMenu(link.label)}
>
                <button
                  type="button"
                  onClick={() => toggleDesktopMenu(link.label)}
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isOpen
                      ? "bg-[#17a36b] text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`h-3 w-3 ${isOpen ? "text-white" : "text-gray-400"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className={`absolute left-0 top-full z-50 mt-3 rounded-2xl border border-gray-200 bg-white p-4 text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.18)] ${
                      isProductsMenu ? "w-[290px] p-2" : isInsightsMenu || isWhyDecibelMenu || isCompanyMenu ? "w-[440px] p-2" : "w-[860px]"
                    }`}
                  >
                    {isWhyDecibelMenu ? (
                      <div className="grid grid-cols-1 gap-3">
                        <div className="rounded-xl border border-gray-200 bg-[#fcfffd] p-3">
                          <div className="space-y-2">
                            {whyDecibelDropdown.map((item) => (
                              <Link
                                key={`why-decibel-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7]"
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : isInsightsMenu ? (
                      <div className="grid grid-cols-1 gap-3">
                        <div className="rounded-xl border border-gray-200 bg-[#fcfffd] p-3">
                          <div className="space-y-2">
                            {insightsDropdown.map((item) => (
                              <Link
                                key={`insights-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7]"
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : isCompanyMenu ? (
                      <div className="grid grid-cols-1 gap-3">
                        <div className="rounded-xl border border-gray-200 bg-[#fcfffd] p-3">
                          <div className="space-y-2">
                            {companyDropdown.map((item) => (
                              <Link
                                key={`company-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7]"
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : isProductsMenu ? (
                      <div className="relative grid grid-cols-1 gap-2 overflow-visible">
                        <div className="rounded-xl border border-gray-200 bg-[#fcfffd] p-2">
                          {productsTopLevelDropdown.map((item, index) => {
                            let submenuType: "enabling" | "talent" | "zel" | "zibel" = "enabling";
                            if (item.label === "Enabling HR Processes") submenuType = "enabling";
                            else if (item.label === "Talent Management Processes") submenuType = "talent";
                            else if (item.label === "Zel AI Agent") submenuType = "zel";
                            else if (item.label === "Zibel") submenuType = "zibel";
                            const isActiveRow = activeProductsSubmenu === submenuType;
                            return (
                              <button
                                key={`products-top-${item.label}`}
                                type="button"
                                onMouseEnter={() => {
  setActiveProductsSubmenu(submenuType);
  setSubmenuIndex(index);
}}
onFocus={() => {
  setActiveProductsSubmenu(submenuType);
  setSubmenuIndex(index);
}}
onClick={() => {
  setActiveProductsSubmenu(submenuType);
  setSubmenuIndex(index);
}}
                                className={`mb-1.5 flex w-full items-center justify-between rounded-lg border px-2.5 py-1.5 text-[12px] font-semibold transition-colors ${
                                  isActiveRow
                                    ? "border-[#29b27f] bg-[#d7f3eb] text-[#0e6f55]"
                                    : "border-gray-200 bg-white text-gray-800 hover:border-[#29b27f] hover:bg-[#f3fbf7]"
                                } ${index === productsTopLevelDropdown.length - 1 ? "mb-0" : ""}`}
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                <span className="flex-1 text-left">{item.label}</span>
                                <span className="text-sm leading-none">›</span>
                              </button>
                            );
                          })}
                        </div>

                        {activeProductsSubmenu && (
                          <div
  className="absolute left-full ml-2 w-[230px] rounded-xl border border-gray-200 bg-[#fcfffd] p-2 shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
  style={{
    top: submenuIndex !== null ? submenuIndex * 44 : 0,
  }}
>
                            {activeProductsSubmenu === "enabling" && enablingHrProcessesDropdown.map((item, index, arr) => (
                              <Link
                                key={`products-sub-enabling-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className={`mb-1.5 flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7] ${
                                  index === arr.length - 1 ? "mb-0" : ""
                                }`}
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                            {activeProductsSubmenu === "talent" && talentManagementDropdown.map((item, index, arr) => (
                              <Link
                                key={`products-sub-talent-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className={`mb-1.5 flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7] ${
                                  index === arr.length - 1 ? "mb-0" : ""
                                }`}
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                            {activeProductsSubmenu === "zel" && zelDropdown.map((item, index, arr) => (
                              <Link
                                key={`products-sub-zel-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className={`mb-1.5 flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7] ${
                                  index === arr.length - 1 ? "mb-0" : ""
                                }`}
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                            {activeProductsSubmenu === "zibel" && zibelDropdown.map((item, index, arr) => (
                              <Link
                                key={`products-sub-zibel-${item.label}`}
                                href={item.href}
                                onClick={() => setActiveDesktopMenu(null)}
                                className={`mb-1.5 flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7] ${
                                  index === arr.length - 1 ? "mb-0" : ""
                                }`}
                              >
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                                           </div>
                    ) : (
                      <div className="grid grid-cols-[220px_minmax(0,1fr)] gap-4">
                        <div className="rounded-xl border border-gray-200 bg-[#f7faf8] p-3">
                          {megaMenu.categories.map((category) => {
                            const isActive = activeCategoryLabel === category.label;

                            return (
                              <button
                                key={`${link.label}-${category.label}`}
                                type="button"
                                onMouseEnter={() =>
                                  setActiveCategoryByMenu((prev) => ({
                                    ...prev,
                                    [link.label]: category.label,
                                  }))
                                }
                                className={`mb-2 block w-full rounded-lg px-3 py-2 text-left text-xl font-semibold transition-colors ${
                                  isActive
                                    ? "bg-[#d7f3eb] text-[#0e6f55]"
                                    : "text-gray-700 hover:bg-[#eaf6ef]"
                                }`}
                              >
                                {category.label}
                              </button>
                            );
                          })}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {selectedCategory.sections.map((section) => (
                            <div
                              key={`${link.label}-${selectedCategory.label}-${section.title}`}
                              className="rounded-xl border border-gray-200 bg-[#fcfffd] p-3"
                            >
                              <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">
                                {section.title}
                              </p>
                              <div className="space-y-2">
                                {section.items.map((item) => (
                                  <Link
                                    key={`${link.label}-${selectedCategory.label}-${item.label}`}
                                    href={item.href}
                                    onClick={() => setActiveDesktopMenu(null)}
                                    className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-[12px] font-semibold text-gray-800 transition-colors hover:border-[#29b27f] hover:bg-[#f3fbf7]"
                                  >
                                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#26c88d]" />
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
              />
            </svg>
            EN
            <svg
              className="h-3 w-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <Link
            href="#"
            className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-green-600"
          >
            Schedule a Demo
          </Link>
        </div>

        <button className="p-2 text-gray-700 lg:hidden" onClick={() => setOpen(!open)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="space-y-1 border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          {navLinks.map((link) => {
            if (link.label === "Pricing") {
              return (
                <Link
                  key={link.label}
                  href={pathname === "/" ? "#pricing-section" : "/#pricing-section"}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-[#f3fbf7] hover:text-[#0e6f55]"
                >
                  {link.label}
                </Link>
              );
            }

            if (link.label === "Why Decibel?") {
              return (
                <div key={link.label} className="overflow-hidden rounded-lg border border-gray-200">
                  <button className="block w-full bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700">
                    {link.label}
                  </button>
                  {whyDecibelDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block w-full border-t border-gray-200 px-5 py-3 text-left text-sm text-green-600 transition-colors hover:bg-[#eef5ff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              );
            }

            if (link.label === "Products") {
              return (
                <div key={link.label} className="overflow-hidden rounded-lg border border-gray-200">
                  <button className="block w-full bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700">
                    {link.label}
                  </button>
                  {[...enablingHrProcessesDropdown, ...talentManagementDropdown, ...zelDropdown, ...zibelDropdown].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block w-full border-t border-gray-200 px-5 py-3 text-left text-sm text-green-600 transition-colors hover:bg-[#eef5ff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              );
            }

            if (link.label === "Insights") {
              return (
                <div key={link.label} className="overflow-hidden rounded-lg border border-gray-200">
                  <button className="block w-full bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700">
                    {link.label}
                  </button>
                  {insightsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block w-full border-t border-gray-200 px-5 py-3 text-left text-sm text-green-600 transition-colors hover:bg-[#eef5ff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              );
            }

            if (link.label === "Company") {
              return (
                <div key={link.label} className="overflow-hidden rounded-lg border border-gray-200">
                  <button className="block w-full bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700">
                    {link.label}
                  </button>
                  {companyDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block w-full border-t border-gray-200 px-5 py-3 text-left text-sm text-green-600 transition-colors hover:bg-[#eef5ff]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {link.label}
              </Link>
            );
          })}
          <div className="border-t border-gray-100 pt-3">
            <Link
              href="#"
              className="mt-2 block rounded-lg bg-green-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
