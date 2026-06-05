import { personal } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-white/65 px-5 py-8 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {personal.name}. Built with Next.js.</p>
        <a href={`mailto:${personal.email}`} className="font-semibold text-electric">
          {personal.email}
        </a>
      </div>
    </footer>
  );
}
