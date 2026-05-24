import type { ReactNode } from 'react';

type BadgeVariant = 'sale' | 'new';

interface BadgeProps {
  variant?:  BadgeVariant;
  children:  ReactNode;
  className?: string;
}

const VARIANTS: Record<BadgeVariant, string> = {
  sale: 'bg-primary text-white',
  new:  'bg-fg text-white',
};

export function Badge({ variant = 'sale', children, className = '' }: BadgeProps): JSX.Element {
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}