import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'white';
type Size    = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  Variant;
  size?:     Size;
  children:  ReactNode;
}

const BASE = [
  'inline-flex items-center justify-center font-medium',
  'transition-colors duration-200 cursor-pointer',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  'focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none',
].join(' ');

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  outline: 'border border-fg text-fg hover:bg-surface',
  ghost:   'border border-white/40 text-white hover:bg-white/10',
  white:   'bg-white text-fg hover:bg-gray-100',
};

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-1.5 text-xs  rounded',
  md: 'px-6 py-2.5 text-sm  rounded',
  lg: 'px-8 py-3   text-base rounded',
};

export function Button({
  variant  = 'primary',
  size     = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/*
 * Usage:
 *   <Button variant="primary" size="lg">Shop Now</Button>
 *   <Button variant="ghost" size="sm">Browse</Button>
 *   <Button variant="white">Shop</Button>
 */