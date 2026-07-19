export default function TrustLogos() {
  const logos = ["Асоціація адвокатів", "ICAEW", "Українська асоціація юристів", "International Bar Assoc.", "ТПП", "Європейська бізнес асоціація"];

  return (
    <section className="bg-black border-t border-white/5">
      <div className="mx-auto max-w-[980px] px-6 md:px-10 py-14">
        <p className="mb-8 text-center text-silver font-semibold" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Нам довіряють</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((name, i) => (
            <div key={i} className="text-platinum hover:text-frost transition-colors" style={{ fontSize: "13px" }}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
