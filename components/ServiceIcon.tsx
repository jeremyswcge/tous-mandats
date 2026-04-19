type Props = { name: string; className?: string };

export default function ServiceIcon({ name, className = "h-6 w-6" }: Props) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };
  switch (name) {
    case "tax":
      return (
        <svg {...common}>
          <path d="M9 4h6l1 3-3 6h2l-4 7v-6H8l1-10Z" />
        </svg>
      );
    case "house":
      return (
        <svg {...common}>
          <path d="M3 11 12 3l9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "land":
      return (
        <svg {...common}>
          <path d="M3 17 9 7l5 7 3-4 4 7Z" />
          <path d="M3 21h18" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="8" cy="14" r="4" />
          <path d="m11 14 9-9M16 5l3 3M14 7l3 3" />
        </svg>
      );
    case "exchange":
      return (
        <svg {...common}>
          <path d="M3 8h14l-3-3M21 16H7l3 3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="1.5" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "scroll":
      return (
        <svg {...common}>
          <path d="M5 4h12v15a2 2 0 0 0 2 2H7a2 2 0 0 1-2-2Z" />
          <path d="M9 9h5M9 13h5" />
          <path d="M17 19h2" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9" /></svg>;
  }
}
