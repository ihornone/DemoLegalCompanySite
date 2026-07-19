import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const practices = [
  { slug: "family", title: "Сімейне право", desc: "Розлучення, аліменти, поділ майна.", icon: "👨‍👩‍👧" },
  { slug: "civil", title: "Цивільне право", desc: "Спори, відшкодування збитків, спадщина.", icon: "📜" },
  { slug: "criminal", title: "Кримінальне право", desc: "Захист, оскарження вироків.", icon: "⚖️" },
  { slug: "corporate", title: "Корпоративне право", desc: "Створення компаній, спори, M&A.", icon: "🏢" },
  { slug: "real-estate", title: "Нерухомість", desc: "Забудовники, оформлення прав.", icon: "🏠" },
  { slug: "tax", title: "Податкове право", desc: "Перевірки, оскарження, консультації.", icon: "💰" },
];

export default function PracticesPage() {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Практики</p>
          <h1 className="mb-5 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>Наші практики</h1>
          <p className="text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Широкий спектр юридичних послуг</p>
        </div>
      </section>
      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {practices.map((p) => (
              <Link key={p.slug} href={`/practices/${p.slug}`} className="group rounded-[28px] bg-obsidian p-7 hover:bg-graphite transition-all">
                <div className="mb-3 text-2xl">{p.icon}</div>
                <h2 className="mb-2 text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "19px", lineHeight: "1.21" }}>{p.title}</h2>
                <p className="text-platinum mb-3" style={{ fontSize: "14px", lineHeight: "1.43" }}>{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-halo font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: "14px" }}>Детальніше <IconArrowRight className="h-3.5 w-3.5" stroke={2} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-6 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Не знайшли потрібну послугу?</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Зверніться до нас — ми допоможемо</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Отримати консультацію</Link>
        </div>
      </section>
    </>
  );
}
