interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wider text-cyan uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-secondary-text max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
