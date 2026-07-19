import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-[980px] px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="mb-3 text-frost font-semibold" style={{ fontSize: "12px" }}>Практики</h4>
            <ul className="space-y-2">
              {["Сімейне", "Цивільне", "Кримінальне", "Корпоративне", "Нерухомість", "Податкове"].map((p) => (
                <li key={p}><Link href="/practices" className="text-platinum hover:text-frost transition-colors" style={{ fontSize: "12px" }}>{p}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-frost font-semibold" style={{ fontSize: "12px" }}>Компанія</h4>
            <ul className="space-y-2">
              {["Команда", "Кейси", "Блог", "Контакти"].map((c) => (
                <li key={c}><Link href={`/${c === "Команда" ? "team" : c === "Кейси" ? "cases" : c === "Блог" ? "blog" : "contacts"}`} className="text-platinum hover:text-frost transition-colors" style={{ fontSize: "12px" }}>{c}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-frost font-semibold" style={{ fontSize: "12px" }}>Правова інформація</h4>
            <ul className="space-y-2">
              {["Ліцензії", "Політика конфіденційності", "Публічна оферта", "Вакансії"].map((l) => (
                <li key={l}><a href="#" className="text-platinum hover:text-frost transition-colors" style={{ fontSize: "12px" }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-frost font-semibold" style={{ fontSize: "12px" }}>Контакти</h4>
            <div className="space-y-2 text-platinum" style={{ fontSize: "12px" }}>
              <p><a href="tel:+380441234567" className="hover:text-frost transition-colors">+38 (044) 123-45-67</a></p>
              <p><a href="mailto:info@legal.ua" className="hover:text-frost transition-colors">info@legal.ua</a></p>
              <p>м. Київ, вул. Хрещатик, 22</p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-platinum" style={{ fontSize: "10px" }}>
          <p>© 2024 Юридична Компанія. Всі права захищені.</p>
          <p>Юридичний захист для бізнесу та приватних клієнтів</p>
        </div>
      </div>
    </footer>
  );
}
