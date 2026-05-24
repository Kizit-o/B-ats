import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(id);
  }, []);

  const anim = `transition-all duration-700 ${
    loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;

  return (
    <section id="home" className="relative overflow-hidden bg-surface min-h-[480px] lg:min-h-[560px]">
      <span
        className="absolute right-[-1%] top-1/2 -translate-y-1/2 font-display font-black text-fg opacity-[0.055] select-none leading-none pointer-events-none whitespace-nowrap z-0"
        style={{ fontSize: 'clamp(90px, 15vw, 210px)' }}
        aria-hidden="true"
      >
        HEADPHONE
      </span>

      <div className="page-x py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[480px] lg:min-h-[560px] relative z-10">
        
        <div>
          <p
            className={`text-xs font-medium tracking-widest uppercase text-fg-muted mb-3 ${anim}`}
            style={{ transitionDelay: '0ms' }}
          >
            Be@ts Pro
          </p>

          <h1
            className={`font-bold text-fg leading-none mb-4 tracking-tight ${anim}`}
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', transitionDelay: '120ms' }}
          >
            Wireless
          </h1>

          <p
            className={`text-base text-fg-muted mb-8 max-w-xs leading-relaxed ${anim}`}
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

        <div className="relative flex items-center justify-center">
          <img
            src="/assets/images/banners/Hero-img.png"
            alt="Be@ts Pro Wireless Headphone"
            width={500}
            height={420}
            className={`w-full max-w-sm lg:max-w-lg object-contain drop-shadow-xl transition-all duration-700 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          />

          <div
            className={`absolute -right-2 top-1/2 -translate-y-1/2 hidden xl:block bg-white rounded-xl shadow-lg p-4 w-44 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="text-xs font-semibold text-fg mb-1">Description</p>
            <p className="text-xs text-fg-muted leading-relaxed">
              Premium wireless audio with crystal-clear sound and an ergonomic comfort fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}