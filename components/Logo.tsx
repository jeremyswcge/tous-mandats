import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Tous Mandats — accueil"
      className={`inline-flex items-center group ${light ? "drop-shadow-sm" : ""}`}
    >
      <Image
        src="/logo.png"
        alt="Tous Mandats"
        width={220}
        height={64}
        priority
        className={`h-11 lg:h-12 w-auto transition-transform group-hover:-translate-y-[1px] ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
