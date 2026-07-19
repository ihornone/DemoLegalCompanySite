import Link from "next/link";
import Image from "next/image";

const team = [
  { name: "Олександр Петренко", role: "Керуючий партнер", exp: "15+ років", slug: "petrenko", spec: "Корпоративне право", photo: "https://i.pravatar.cc/400?img=68" },
  { name: "Марія Коваленко", role: "Старший адвокат", exp: "12+ років", slug: "kovalenko", spec: "Сімейне право", photo: "https://i.pravatar.cc/400?img=45" },
  { name: "Дмитро Шевченко", role: "Адвокат", exp: "8+ років", slug: "shevchenko", spec: "Кримінальне право", photo: "https://i.pravatar.cc/400?img=53" },
  { name: "Анна Мельник", role: "Юрист", exp: "5+ років", slug: "melnyk", spec: "Податкове право", photo: "https://i.pravatar.cc/400?img=47" },
  { name: "Ігор Бондаренко", role: "Адвокат", exp: "10+ років", slug: "bondarenko", spec: "Нерухомість", photo: "https://i.pravatar.cc/400?img=59" },
  { name: "Катерина Ткаченко", role: "Юрист", exp: "4+ роки", slug: "tkachenko", spec: "IT право", photo: "https://i.pravatar.cc/400?img=44" },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="mb-2 text-orange font-semibold" style={{ fontSize: "17px", letterSpacing: "-0.19px" }}>Команда</p>
          <h1 className="mb-5 text-frost font-bold" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.024em" }}>Наша команда</h1>
          <p className="text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Професіонали, яким можна довірити вашу справу</p>
        </div>
      </section>
      <section className="bg-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[980px] px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {team.map((m) => (
              <Link key={m.slug} href={`/team/${m.slug}`} className="group rounded-[28px] bg-obsidian overflow-hidden hover:bg-graphite transition-all">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={m.photo} alt={m.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-paper font-semibold" style={{ fontSize: "13px" }}>Детальніше →</span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="mb-1 text-frost font-semibold group-hover:text-blue transition-colors" style={{ fontSize: "17px" }}>{m.name}</h2>
                  <p className="text-platinum" style={{ fontSize: "14px" }}>{m.role}</p>
                  <p className="text-smoke mt-1" style={{ fontSize: "12px" }}>{m.spec} · {m.exp}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-white/5">
        <div className="mx-auto max-w-[980px] px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="mb-4 text-frost font-bold" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.07" }}>Оберіть адвоката</h2>
          <p className="mb-8 text-platinum mx-auto max-w-lg" style={{ fontSize: "17px", lineHeight: "1.47" }}>Отримайте консультацію</p>
          <Link href="/contacts" className="inline-flex items-center justify-center rounded-full bg-blue px-5 py-2.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "14px" }}>Записатися</Link>
        </div>
      </section>
    </>
  );
}
