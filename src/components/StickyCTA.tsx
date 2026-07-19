"use client";

import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => { if (!dismissed) setVisible(window.scrollY > 500); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-carbon/95 backdrop-blur-xl border-t border-white/10">
      <div className="mx-auto max-w-[980px] px-6 h-[60px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1.5">
            {["https://i.pravatar.cc/48?img=68", "https://i.pravatar.cc/48?img=45", "https://i.pravatar.cc/48?img=53"].map((src, i) => (
              <div key={i} className="relative h-7 w-7 rounded-full border-2 border-carbon overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-frost font-semibold" style={{ fontSize: "13px" }}>Безкоштовна консультація</p>
            <p className="text-platinum" style={{ fontSize: "11px" }}>30 хвилин з адвокатом</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="/contacts" className="rounded-full bg-blue px-4 py-1.5 text-paper hover:bg-blue/80 transition-all font-semibold" style={{ fontSize: "12px" }}>Записатися</a>
          <button onClick={() => setDismissed(true)} className="text-platinum hover:text-frost transition-colors p-1"><IconX className="h-3.5 w-3.5" stroke={2} /></button>
        </div>
      </div>
    </div>
  );
}
