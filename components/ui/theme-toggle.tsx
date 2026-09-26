"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Current theme: ${resolvedTheme}. Click to switch to ${
              resolvedTheme === "dark" ? "light" : "dark"
            } mode`
          : "Toggle color theme"
      }
      className={cn(
        "relative inline-flex items-center justify-center",
        "w-11 h-11 rounded-md", // 44x44px minimum touch target
        "text-text-muted hover:text-text-primary",
        "bg-surface hover:bg-surface-subtle",
        "border border-border",
        "transition-colors duration-150 ease-out",
        "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        className
      )}
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="w-5 h-5 text-accent stroke-[1.5]" aria-hidden="true" />
        ) : (
          <Moon className="w-5 h-5 text-primary stroke-[1.5]" aria-hidden="true" />
        )
      ) : (
        <span className="w-5 h-5 block" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
