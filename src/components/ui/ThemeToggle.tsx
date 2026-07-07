"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-11 w-11 items-center justify-center border border-rule transition hover:bg-surface-raised"
      type="button"
    >
      <Sun aria-hidden="true" className="hidden size-[17px] dark:block" />
      <Moon aria-hidden="true" className="size-[17px] dark:hidden" />
    </button>
  );
}
