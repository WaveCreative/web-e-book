import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description ? <p className="mt-1 text-sm text-white/60">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default SectionCard;
