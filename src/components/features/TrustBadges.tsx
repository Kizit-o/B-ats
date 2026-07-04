import { Truck, ShieldCheck, Headphones, Lock } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { LucideIcon } from 'lucide-react';

interface Badge {
  id:       string;
  Icon:     LucideIcon;
  title:    string;
  subtitle: string;
}

const BADGES: Badge[] = [
  { id: 'shipping',  Icon: Truck,       title: 'Free Shipping',       subtitle: 'Free Shipping On All Orders' },
  { id: 'guarantee', Icon: ShieldCheck, title: 'Money Guarantee',     subtitle: '30 Day Money Back' },
  { id: 'support',   Icon: Headphones,  title: 'Online Support 24/7', subtitle: 'Technical Support 24/7' },
  { id: 'payment',   Icon: Lock,        title: 'Secure Payment',      subtitle: 'All Cards Accepted' },
];

export function TrustBadges(): JSX.Element {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="border-t border-b border-ui-border"
    >
      <div className="page-x py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {BADGES.map(({ id, Icon, title, subtitle }, i) => (
          <div
            key={id}
            className="flex items-center gap-4"
            style={{
              opacity:         visible ? 1 : 0,
              transform:       visible ? 'translateY(0)' : 'translateY(16px)',
              transition:      'opacity 500ms ease, transform 500ms ease',
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <div className="shrink-0 text-fg-muted">
              <Icon size={30} strokeWidth={1.4} />
            </div>

            <div>
              <p className="text-base font-medium text-fg">{title}</p>
              <p className="text-sm text-fg-muted">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}