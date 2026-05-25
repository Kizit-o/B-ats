import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { PromoBannerData } from '../../types';
import { Button } from '../ui/Button';

export function PromoBanner({
  bg, displayText, discount, dateRange,
  brand, heading, description, imageAlt,
}: PromoBannerData): JSX.Element {
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      ref={ref}
      // Added 'group' class to handle container-wide hover state triggers
      className="relative overflow-hidden group"
      style={{ backgroundColor: bg }}
      aria-label={`${heading} promotion`}
    >
      {/* Background overflow display text — Bumped size using clamp and bumped opacity to 0.20 */}
      <span
        className="absolute left-0 top-1/2 -translate-y-1/2 font-sans font-black text-white opacity-[0.20] select-none leading-none pointer-events-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(90px, 15vw, 210px)' }}
        aria-hidden="true"
      >
        {displayText}
      </span>

      <div className="page-x py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

        {/* Product image container with transition classes */}
        <div
          className="flex items-center justify-center"
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 600ms ease 100ms, transform 600ms ease 100ms',
          }}
        >
          <img
            src="/assets/images/banners/Banner.png"
            alt={imageAlt}
            width={400}
            height={360}
            loading="lazy"
            // Added transition, duration, and group-hover:scale-105 for a smooth zoom effect
            className="max-w-xs lg:max-w-sm w-full object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Text content */}
        <div
          style={{
            opacity:    visible ? 1 : 0,
            transform:  visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 600ms ease 200ms, transform 600ms ease 200ms',
          }}
        >
          <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
            {discount}
          </span>
          <p className="text-xs text-white/60 uppercase tracking-widest mb-1">{brand}</p>
          
          {/* Increased heading text size (text-4xl to text-5xl on desktop) */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h2>
          
          {/* Increased paragraph text size (text-sm to text-base) */}
          <p className="text-base text-white/65 leading-relaxed mb-3">
            {description}
          </p>
          
          <p className="text-xs text-white/40 mb-6">{dateRange}</p>
          <Button variant="white" size="md" className="rounded-sm">Shop</Button>
        </div>

      </div>
    </section>
  );
}