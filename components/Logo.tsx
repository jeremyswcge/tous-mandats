import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Tous Mandats — accueil"
      className="inline-flex items-center group"
    >
      <span
        className={`inline-flex items-center rounded-xl transition-all ${
          light
            ? "bg-paper px-3 py-1.5 ring-1 ring-paper/15 shadow-sm group-hover:shadow-md"
            : ""
        }`}
      >
        <Image
          src="/logo.png"
          alt="Tous Mandats"
          width={240}
          height={72}
          priority
          className="h-9 lg:h-10 w-auto"
        />
      </span>
    </Link>
  );
}
