import { useState } from 'react';
import {
  Headphones, Watch, Laptop2, Gamepad2, Eye, Volume2,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { categories }      from '../../data/categories';
import type { Category }    from '../../types';

const ICONS: Record<string, LucideIcon> = {
  earphone: Headphones,
  wearable: Watch,
  devices:  Laptop2,
  gaming:   Gamepad2,
  oculus:   Eye,
  speaker:  Volume2,
};

/* ── Browse button — local hover state ─────── */
function BrowseButton({ text, bg }: { text: string; bg: string }): JSX.Element {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="self-start px-5 py-1.5 text-xs font-semibold rounded border transition-all duration-200 cursor-pointer"
      style={{
        borderColor:     `${text}70`,
        color:           hovered ? bg  : text,
        backgroundColor: hovered ? text : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={()       => setHovered(true)}
      onBlur={()        => setHovered(false)}
    >
      Browse
    </button>
  );
}

/* ── Category card ──────────────────────────── */
function CategoryCard({
  id, label, name, bg, text, index, visible,
}: Category & { index: number; visible: boolean }): JSX.Element {
  const Icon = ICONS[id] ?? Headphones;

  return (
    <article
      className="relative overflow-hidden cursor-pointer group h-52"
      style={{
        backgroundColor: bg,
        opacity:          visible ? 1 : 0,
        transform:        visible ? 'translateY(0)' : 'translateY(24px)',
        transition:       `opacity 500ms ease, transform 500ms ease`,
        transitionDelay:  `${index * 80}ms`,
      }}
      aria-label={`${label} ${name} — Browse category`}
    >
      {/* Text content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <p
            className="text-[10px] uppercase tracking-widest mb-1.5"
            style={{ color: text, opacity: 0.65 }}
          >
            {label}
          </p>
          <h3
            className="font-display font-bold leading-none text-3xl"
            style={{ color: text }}
          >
            {name}
          </h3>
        </div>
        <BrowseButton text={text} bg={bg} />
      </div>

      {/* Decorative icon — bottom-right */}
      <div
        className="absolute right-5 bottom-5 opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-400 pointer-events-none"
        aria-hidden="true"
      >
        <Icon size={80} strokeWidth={1} style={{ color: text }} />
      </div>
    </article>
  );
}

export function CategoryGrid(): JSX.Element {
  const { ref, visible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="shop" aria-label="Product categories">
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} {...cat} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}