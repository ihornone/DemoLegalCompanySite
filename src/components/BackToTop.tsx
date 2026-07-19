"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-obsidian border border-white/10 text-frost hover:bg-graphite hover:border-white/20 transition-all shadow-lg shadow-black/50"
          aria-label="Back to top"
        >
          <IconArrowUp className="h-4 w-4" stroke={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
