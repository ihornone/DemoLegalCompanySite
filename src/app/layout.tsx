import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LexNova — Юридичний захист",
  description: "Допомагаємо фізичним особам та бізнесу вирішувати юридичні питання швидко, професійно та конфіденційно.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1 pb-[72px]">{children}</main>
        <Footer />
        <StickyCTA />
        <BackToTop />
      </body>
    </html>
  );
}
