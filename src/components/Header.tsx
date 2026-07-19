"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Головна" },
  { label: "Практики", children: [
    { href: "/practices/family", label: "Сімейне право" }, { href: "/practices/civil", label: "Цивільне право" },
    { href: "/practices/criminal", label: "Кримінальне право" }, { href: "/practices/corporate", label: "Корпоративне право" },
    { href: "/practices/real-estate", label: "Нерухомість" }, { href: "/practices/tax", label: "Податкове право" },
  ]},
  { href: "/team", label: "Команда" }, { href: "/cases", label: "Кейси" },
  { href: "/blog", label: "Блог" }, { href: "/contacts", label: "Контакти" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-3">
      <motion.div
        className="w-full max-w-[980px] rounded-full border border-white/10 px-5 py-2.5 flex items-center justify-between"
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.6)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          paddingTop: scrolled ? "8px" : "10px",
          paddingBottom: scrolled ? "8px" : "10px",
        }}
        transition={{ duration: 0.3 }}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-frost font-bold tracking-tight" style={{ fontSize: "17px", letterSpacing: "-0.02em" }}>ЮК</span>
          <span className="text-platinum hidden sm:block" style={{ fontSize: "12px" }}>LexNova</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative" onMouseEnter={() => setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <button className="flex items-center gap-1 rounded-full px-3 py-1.5 text-silver hover:text-frost transition-colors" style={{ fontSize: "12px" }}>
                  {link.label}
                  <IconChevronDown className={`h-2.5 w-2.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} stroke={2} />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-2xl bg-obsidian border border-white/10 p-1.5">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className={`block rounded-xl px-3 py-2 transition-colors ${pathname === child.href ? "text-frost bg-white/5" : "text-silver hover:text-frost hover:bg-white/5"}`} style={{ fontSize: "12px" }}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href!} className={`rounded-full px-3 py-1.5 transition-colors ${pathname === link.href ? "text-frost" : "text-silver hover:text-frost"}`} style={{ fontSize: "12px" }}>{link.label}</Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contacts" className="hidden md:inline-flex rounded-full bg-blue px-4 py-1.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "12px" }}>Записатися</Link>
          <button className="md:hidden text-frost p-1" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Меню">
            {mobileOpen ? <IconX className="h-5 w-5" stroke={1.5} /> : <IconMenu2 className="h-5 w-5" stroke={1.5} />}
          </button>
        </div>
      </motion.div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-xl z-40 px-6 py-6 overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)} className="flex w-full items-center justify-between py-3 text-frost border-b border-white/10" style={{ fontSize: "17px" }}>
                  {link.label}
                  <IconChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} stroke={1.5} />
                </button>
                {openDropdown === link.label && (
                  <div className="pl-4 pb-3">{link.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block py-2 text-platinum hover:text-frost transition-colors" style={{ fontSize: "14px" }} onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}</div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href!} className={`block py-3 border-b border-white/10 ${pathname === link.href ? "text-frost" : "text-frost"}`} style={{ fontSize: "17px" }} onClick={() => setMobileOpen(false)}>{link.label}</Link>
            )
          )}
          <div className="mt-6">
            <Link href="/contacts" className="block w-full rounded-full bg-blue py-3 text-center text-paper font-semibold" style={{ fontSize: "17px" }} onClick={() => setMobileOpen(false)}>Записатися</Link>
          </div>
        </div>
      )}
    </header>
  );
}
