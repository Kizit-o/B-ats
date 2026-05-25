import { useState }                               from 'react';
import { Globe, MessageCircle, Camera, PlayCircle } from 'lucide-react';

const QUICK_LINKS = ['Home', 'About', 'Product', 'Shop', 'Contact'];

/**
 * Globe / MessageCircle / Camera / PlayCircle are stable core icons
 * present in every lucide-react version since 0.100.0.
 * Facebook, Twitter, Instagram, Youtube were removed or renamed in
 * different releases — they are not reliable cross-version imports.
 */
const SOCIAL = [
  { Icon: Globe,         label: 'Facebook'  },
  { Icon: MessageCircle, label: 'Twitter'   },
  { Icon: Camera,        label: 'Instagram' },
  { Icon: PlayCircle,    label: 'YouTube'   },
];

function Logo() {
  return (
    <span className="text-2xl font-bold text-white">
      Be<span className="text-primary">@</span>ts
    </span>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setEmail('');
    // Wire to mailing list API here
  };

  return (
    <footer id="contact" className="bg-footer">

      {/* ── Main grid ──────────────────────────────── */}
      <div className="page-x py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/50 leading-relaxed mb-6">
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form by injected humour.
          </p>
          {/*
            Fixed ARIA violation:
            role="list" requires direct children with role="listitem".
            Using semantic <ul>/<li> satisfies the implicit listitem role
            without any explicit aria attributes.
          */}
          <ul className="flex gap-3 list-none" aria-label="Social media links">
            {SOCIAL.map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Icon size={13} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h3 className="text-sm font-sans font-bold text-white mb-5 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 list-none">
            {QUICK_LINKS.map(link => (
              <li key={link}>
                <a href="#" className="text-sm text-white/50 hover:text-primary transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h3 className="text-sm font-sans font-bold text-white mb-5 uppercase tracking-wider">
            Contact
          </h3>
          <address className="not-italic flex flex-col gap-3 text-sm text-white/50">
            <p>+1 (917) 536-8980</p>
            <p>
              4461 Didesk Street<br />
              Nashville, TN 70951
            </p>
          </address>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <h3 className="text-xs font-sans font-bold text-white/60 uppercase tracking-wider mb-2">
            Subscribe To Our Email
          </h3>
          <p className="text-2xl font-bold text-white mb-5 leading-tight">
            For Latest News &amp; Updates
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
              placeholder="Your email"
              aria-label="Email address for newsletter subscription"
              className="flex-1 min-w-0 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors duration-200"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              className="shrink-0 bg-primary hover:bg-primary-hover px-4 py-2 rounded text-sm font-semibold text-white transition-colors duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ─────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="page-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2024 Be@ts. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}