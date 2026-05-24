import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Shop',       href: '#shop' },
  { label: 'About Us',   href: '#about' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

function Logo(): JSX.Element {
  return (
    <a
      href="#home"
      aria-label="Be@ts — Home"
      className="text-2xl font-bold tracking-tight text-fg"
    >
      Be<span className="text-primary">@</span>ts
    </a>
  );
}

export function Navbar(): JSX.Element {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Navbar shadow on scroll */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 2);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Sticky header ─────────────────────────────────── */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'border-b border-ui-border'
        }`}
      >
        <div className="page-x h-16 flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-fg hover:text-primary transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline text-sm font-medium mr-2 cursor-pointer hover:text-primary transition-colors duration-200 select-none">
              Login
            </span>

            <button
              type="button"
              aria-label="Search"
              className="p-2 rounded hover:bg-surface hover:text-primary transition-colors duration-200"
            >
              <Search size={19} strokeWidth={1.75} />
            </button>

            <button
              type="button"
              aria-label="Cart — 3 items"
              className="relative p-2 rounded hover:bg-surface hover:text-primary transition-colors duration-200"
            >
              <ShoppingCart size={19} strokeWidth={1.75} />
              <span
                className="absolute top-0.5 right-0.5 min-w-[15px] h-[15px] bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center px-0.5"
                aria-hidden="true"
              >
                3
              </span>
            </button>

            {/* Mobile Menu Button - Hidden on Desktop (md:hidden) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="nav-drawer"
              className="p-2 ml-1 rounded hover:bg-surface hover:text-primary transition-colors duration-200 md:hidden"
            >
              <Menu size={21} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Backdrop (Mobile Only) ─────────────────────────── */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* ── Right-side navigation drawer (Mobile Only) ──────── */}
      <nav
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white z-50 flex flex-col shadow-2xl
          transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ui-border">
          <Logo />
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
            className="p-2 rounded hover:bg-surface hover:text-primary transition-colors duration-200"
          >
            <X size={21} strokeWidth={1.75} />
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex-1 flex flex-col px-6 py-4 list-none overflow-y-auto" role="list">
          {LINKS.map(({ label, href }, i) => (
            <li key={label}>
              <a
                href={href}
                onClick={close}
                className="flex items-center justify-between py-4 text-base font-medium text-fg border-b border-ui-border hover:text-primary transition-colors duration-200"
                style={{
                  transitionDelay: open ? `${i * 40 + 80}ms` : '0ms',
                  opacity:         open ? 1 : 0,
                  transform:       open ? 'translateX(0)' : 'translateX(12px)',
                  transition:      'opacity 300ms ease, transform 300ms ease, color 200ms ease',
                }}
              >
                {label}
                <span className="text-fg-muted text-sm" aria-hidden="true">›</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-ui-border">
          <p className="text-xs text-fg-muted">© 2024 Be@ts. All rights reserved.</p>
        </div>
      </nav>
    </>
  );
}