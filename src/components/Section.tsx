import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  intro,
  alt,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  intro?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 ${alt ? "bg-surface" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              {title}
            </h2>
            {intro && (
              <p className="mt-6 text-muted-foreground text-base leading-relaxed text-pretty">
                {intro}
              </p>
            )}
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
