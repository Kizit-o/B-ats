interface SectionTitleProps {
  title:      string;
  subtitle?:  string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps): JSX.Element {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-fg">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-fg-muted">{subtitle}</p>
      )}
    </div>
  );
}