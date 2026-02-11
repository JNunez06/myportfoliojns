"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="
          border border-gray-300 dark:border-gray-700
          px-4 py-1 rounded-2xl
          bg-white text-black
          dark:bg-black dark:text-white
          transition-all duration-300
        "
      >
        {/* Placeholder mientras carga */}
        <span className="opacity-0">🌙</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        border border-gray-300 dark:border-gray-700
        px-4 py-1 rounded-2xl
        hover:opacity-80
        bg-white text-black
        dark:bg-black dark:text-white
        transition-all duration-300
      "
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
    </button>
  );
}
