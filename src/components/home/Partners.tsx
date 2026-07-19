import Image from "next/image";

const partners = [
  { name: "Асоціація адвокатів України", logo: "https://i.pravatar.cc/120?img=1" },
  { name: "ICAEW", logo: "https://i.pravatar.cc/120?img=2" },
  { name: "Українська асоціація юристів", logo: "https://i.pravatar.cc/120?img=3" },
  { name: "International Bar Association", logo: "https://i.pravatar.cc/120?img=4" },
  { name: "Торгово-промислова палата", logo: "https://i.pravatar.cc/120?img=6" },
  { name: "Європейська бізнес асоціація", logo: "https://i.pravatar.cc/120?img=7" },
];

export default function Partners() {
  return (
    <section className="bg-carbon border-y border-white/5">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-12 md:py-16">
        <p className="mb-8 text-center text-gold font-medium" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Партнери та сертифікати</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-obsidian border border-white/5 px-5 py-3 hover:border-gold/20 transition-colors">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden shrink-0">
                <Image src={p.logo} alt={p.name} fill className="object-cover grayscale opacity-60" sizes="32px" />
              </div>
              <span className="text-ash-mute" style={{ fontSize: "13px" }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
