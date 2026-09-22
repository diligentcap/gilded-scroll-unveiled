import botanical from "@/assets/wedding-botanical.png";

export function FloralDecorations({ className = "" }: { className?: string }) {
  return (
    <img
      src={botanical}
      alt="Ivory magnolias and golden mimosa"
      width={1024}
      height={1024}
      className={className}
    />
  );
}