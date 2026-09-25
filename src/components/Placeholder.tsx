// Placeholder visual sederhana untuk menggantikan gambar asli.
// Nanti tinggal ganti dengan <Image /> dari next/image ketika foto tersedia.

type PlaceholderProps = {
  label?: string;
  color?: string;
  className?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export default function Placeholder({
  label,
  color = "#3f3f46",
  className = "",
  ratio = "video",
}: PlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${ratioClass[ratio]} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
      }}
      role="img"
      aria-label={label ? `Placeholder image: ${label}` : "Placeholder image"}
    >
      {/* Pola grid halus */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {label && (
        <span className="relative z-10 px-3 text-center text-sm font-medium text-white/80">
          {label}
        </span>
      )}
    </div>
  );
}
