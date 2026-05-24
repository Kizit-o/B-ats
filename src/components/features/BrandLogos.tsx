import { useScrollReveal } from '../../hooks/useScrollReveal';

const BRANDS = ['GOLDEN', 'SWEETY', 'AUDIO', 'SOUND', 'BEATS', 'JR'];

export function BrandLogos(): JSX.Element {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-10 border-t border-b border-ui-border" aria-label="Partner brands">
      <div
        ref={ref}
        className="page-x flex flex-wrap items-center justify-center lg:justify-between gap-8"
      >
        {BRANDS.map((brand, i) => (
          <span
            key={brand}
            className="font-display font-bold tracking-widest text-xl lg:text-2xl text-fg-muted/30 hover:text-fg-muted/60 transition-colors duration-300 cursor-pointer select-none"
            style={{
              opacity:         visible ? 1 : 0,
              transform:       visible ? 'translateY(0)' : 'translateY(12px)',
              transition:      'opacity 500ms ease, transform 500ms ease, color 300ms ease',
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}