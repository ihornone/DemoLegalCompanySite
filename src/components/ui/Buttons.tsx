import Link from "next/link";

export function GoldPillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-[15.75px] text-washed-black border border-washed-black font-medium hover:bg-gold/90 transition-all"
      style={{ fontSize: "14px", lineHeight: "1.4" }}
    >
      {children}
    </Link>
  );
}

export function OutlinedPillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-washed-black px-7 py-[15.75px] text-washed-black hover:bg-washed-black hover:text-white transition-all"
      style={{ fontSize: "14px", lineHeight: "1.4" }}
    >
      {children}
    </Link>
  );
}

export function WhitePillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-[10.5px] text-ink border border-ink hover:bg-pearl transition-all"
      style={{ fontSize: "14px", lineHeight: "1.4" }}
    >
      {children}
    </Link>
  );
}

export function UltramarinePillButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-ultramarine px-7 py-[15.75px] text-white border border-ultramarine hover:bg-ultramarine/90 transition-all font-medium"
      style={{ fontSize: "14px", lineHeight: "1.4" }}
    >
      {children}
    </Link>
  );
}
