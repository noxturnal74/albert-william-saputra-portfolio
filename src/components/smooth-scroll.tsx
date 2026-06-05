"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const section = document.querySelector<HTMLElement>(href);

      if (!section) {
        return;
      }

      event.preventDefault();

      const targetTop = Math.max(
        section.getBoundingClientRect().top + window.scrollY - 88,
        0
      );

      window.scrollTo({ top: targetTop, behavior: "smooth" });
      window.setTimeout(() => {
        const remainingDistance = Math.abs(section.getBoundingClientRect().top - 88);

        if (remainingDistance > 120) {
          window.scrollTo({ top: targetTop, behavior: "auto" });
        }
      }, 900);
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
