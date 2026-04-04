# Decibel HRMS – Next.js Landing Page

## 📁 Folder Structure

```
decibel-next/
├── public/                          ← Static assets (add your images here)
│
├── src/
│   ├── app/
│   │   ├── globals.css              ← Global CSS + Tailwind + all custom styles
│   │   ├── layout.tsx               ← Root HTML layout + Google Fonts
│   │   └── page.tsx                 ← Main page (imports all sections)
│   │
│   └── components/
│       ├── Navbar.tsx               ← Top navigation bar (logo, links, CTA)
│       ├── HeroSection.tsx          ← Hero + Dashboard mockup + Cert badges
│       ├── StatsSection.tsx         ← Logo bar + World map + Stats numbers
│       ├── FeaturesSection.tsx      ← "The Difference We Deliver" feature cards
│       ├── SolutionsSection.tsx     ← "Smarter Solutions" tabbed section
│       ├── PricingSection.tsx       ← Plan cards (Small/Medium/Large) + Values
│       └── TestimonialsSection.tsx  ← Client testimonials + Full Footer
│
├── tailwind.config.js               ← Custom green colors
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📐 Sections Covered (from your screenshots)

| Screenshot | Component           | Description                              |
|------------|---------------------|------------------------------------------|
| Image 1    | HeroSection         | Hero text + Dashboard UI mockup          |
| Image 2    | StatsSection        | Client logos + World map + stat numbers  |
| Image 3    | FeaturesSection     | Feature cards (Multi-currency, etc.)     |
| Image 3    | SolutionsSection    | Tabbed HR solutions section              |
| Image 4    | PricingSection      | Small/Medium/Large plan cards            |
| Image 4    | PricingSection      | Our Values animated section              |
| Image 5    | TestimonialsSection | Client testimonials slider               |
| Image 5    | TestimonialsSection | Full footer with offices + app links     |

## 🎨 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Inter)
