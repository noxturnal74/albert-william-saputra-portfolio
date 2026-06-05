"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { navigationItems, personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/70 bg-white/75 px-4 py-3 shadow-card backdrop-blur-xl"
      >
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark showWordmark />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => {
            const itemId = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-electric",
                  activeId === itemId && "bg-blue-50 text-electric"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={personal.cvHref}
            download
            className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-electric transition hover:border-electric hover:bg-blue-50"
          >
            CV
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-900"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-blue-100 bg-white text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-lg border border-white/70 bg-white/90 p-3 shadow-card backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-electric"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={personal.cvHref}
                download
                className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center text-sm font-semibold text-electric"
              >
                Download CV
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
