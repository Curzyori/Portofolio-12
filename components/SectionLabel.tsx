// components/SectionLabel.tsx
// Label divider untuk setiap section (Bisnis, Projects, dll.)

interface SectionLabelProps {
  title: string;
}

export default function SectionLabel({ title }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mt-8 mb-3">
      {/* Garis kiri */}
      <div className="flex-1 h-px bg-white/[0.06]" />
      {/* Label */}
      <span
        className="text-[10px] font-medium tracking-[0.18em] uppercase"
        style={{ color: "rgba(255,255,255,0.28)" }}
      >
        {title}
      </span>
      {/* Garis kanan */}
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );
}
