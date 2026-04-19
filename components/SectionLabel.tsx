export default function SectionLabel({
  number,
  label,
  align = "left",
}: {
  number: string;
  label: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60 ${align === "right" ? "justify-end" : ""}`}>
      <span className="tab-num text-ink">{number}</span>
      <span className="h-px w-10 bg-ink/30" />
      <span>{label}</span>
    </div>
  );
}
