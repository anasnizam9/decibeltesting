import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decibel HRMS – The Largest Enterprise Cloud in Pakistan",
  description:
    "Decibel simplifies your HR digital transformation across all processes, from onboarding to retirement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
