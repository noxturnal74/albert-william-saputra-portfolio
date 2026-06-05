import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
};

export function BrandMark({ className, showWordmark = false }: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-ink shadow-glow">
        <span className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.82),transparent_32%),linear-gradient(135deg,rgba(37,99,235,0.2),rgba(139,92,246,0.45))]" />
        <span className="logo-blink absolute inset-0 rounded-lg" />
        <Image
          src="/logo-mark.svg"
          alt=""
          width={40}
          height={40}
          className="relative z-10 size-10"
          priority
        />
      </span>
      {showWordmark ? (
        <span className="hidden text-sm font-semibold text-ink sm:block">
          Albert William Saputra
        </span>
      ) : null}
    </span>
  );
}
