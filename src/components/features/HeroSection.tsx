import { useEffect, useState } from 'react';
import { Button }              from '../ui/Button';

/* ── Typewriter ───────────────────────────────────────────────────
   Types characters one-by-one after `startDelay` ms elapses.
   Shows a blinking red cursor (brand primary) while typing.
   Cursor disappears automatically once the full text is displayed.
──────────────────────────────────────────────────────────────── */
function Typewriter({
  text,
  startDelay = 0,
  speed = 42,
}: {
  text:         string;
  startDelay?:  number;
  speed?:       number;
}) {
  const [shown,  setShown]  = useState('');
  const [active, setActive] = useState(false);

  // Wait until the description card has fully animated in before typing
  useEffect(() => {
    const t = setTimeout(() => setActive(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  // Append one character every `speed` ms
  useEffect(() => {
    if (!active || shown.length >= text.length) return;
    const t = setTimeout(
      () => setShown(text.slice(0, shown.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [active, shown, text, speed]);

  const done = shown.length >= text.length;

  return (
    <>
      {shown}
      {/* Blinking red cursor — hidden once typing finishes */}
      {!done && (
        <span
          className="inline-block w-[2px] h-3 bg-primary ml-0.5 align-middle animate-pulse"
          aria-hidden="true"
        />
      )}
    </>
  );
}

/* ── HeroSection ─────────────────────────────────────────────── */
export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(id);
  }, []);

  const anim = `transition-all duration-700 ${
    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

  /*
    Typewriter start delay calculation:
      80ms   — setLoaded fires
    + 500ms  — description card transitionDelay
    + 700ms  — card transition duration
    + 100ms  — small buffer for paint
    = 1380ms total before first character appears
  */
  const TYPEWRITER_DELAY = 1380;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-surface min-h-[520px] lg:min-h-[600px] flex items-center"
    >
      {/* ── Decorative background text rows ──────────────────── */}
      <span
        className="absolute right-[-1%] top-0 font-sans font-black text-fg opacity-[0.10] select-none leading-none pointer-events-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(90px, 15vw, 210px)' }}
        aria-hidden="true"
      >
        DEADBLOWN
      </span>
      <span
        className="absolute right-[-1%] top-1/3 font-sans font-black text-fg opacity-[0.12] select-none leading-none pointer-events-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(90px, 15vw, 210px)' }}
        aria-hidden="true"
      >
        HEADPHONE
      </span>
      <span
        className="absolute right-[-1%] top-2/3 font-sans font-black text-fg opacity-[0.12] select-none leading-none pointer-events-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(90px, 15vw, 210px)' }}
        aria-hidden="true"
      >
        BLOWZONE
      </span>

      {/* ── Content grid ─────────────────────────────────────── */}
      <div className="page-x w-full py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

        {/* Left — text */}
        <div>
          <p
            className={`text-sm font-bold tracking-widest uppercase text-fg mb-3 ${anim}`}
            style={{ transitionDelay: '0ms' }}
          >
            Be@ts Pro
          </p>

          <h1
            className={`font-bold text-fg leading-none mb-4 tracking-tight ${anim}`}
            style={{ fontSize: 'clamp(4.5rem, 9vw, 8rem)', transitionDelay: '120ms' }}
          >
            Wireless
          </h1>

          <p
            className={`text-lg font-semibold text-fg mb-8 max-w-xs leading-relaxed ${anim}`}
            style={{ transitionDelay: '240ms' }}
          >
            Premium audio experience with 40-hour battery life and active noise cancellation.
          </p>

          <div className={anim} style={{ transitionDelay: '360ms' }}>
            <Button size="lg" className="rounded-sm">
              Shop By Category
            </Button>
          </div>
        </div>

        {/* Right — image + description card */}
        <div className="relative flex items-center justify-center">

          {/*
            Hover effect:
            • hover:rotate-0     — snaps back to portrait from the 6° tilt
            • hover:scale-105    — slight zoom-in to meet the user
            • hover:duration-300 — faster (300ms) on hover vs 700ms on load
            • cursor-pointer     — signals interactivity
          */}
          <img
            src="/assets/images/banners/Hero-img.png"
            alt="Be@ts Pro Wireless Headphone"
            className={`w-full max-w-md lg:max-w-xl max-h-[440px] lg:max-h-[580px]
              object-contain drop-shadow-2xl cursor-pointer
              rotate-6 hover:rotate-0 hover:scale-105
              transition-all duration-700 hover:duration-300
              ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '200ms' }}
          />

          {/* Description card — typewriter text, red border */}
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block
              bg-white rounded-xl shadow-lg p-4 w-44
              border-2 border-primary
              transition-all duration-700
              ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-xs font-semibold text-fg mb-1">Description</p>

            {/*
              min-h prevents layout shift while text is being typed in.
              The Typewriter cursor blinks in brand-primary red.
            */}
            <p className="text-xs text-fg leading-relaxed font-medium min-h-[60px]">
              <Typewriter
                text="Premium wireless audio with crystal-clear sound and an ergonomic comfort fit."
                startDelay={TYPEWRITER_DELAY}
                speed={42}
              />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}