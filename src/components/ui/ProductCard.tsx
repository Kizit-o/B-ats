import type { Product } from '../../types';
import { Badge } from './Badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps): JSX.Element {
  const { name, price, salePrice, image, isSale, isNew } = product;

  return (
    <article
      className="group bg-white border border-ui-border rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      aria-label={name}
    >
      {/* Image area */}
      <div className="relative aspect-square bg-surface flex items-center justify-center p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-400"
        />
        {/* Status badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
          {isSale && <Badge variant="sale">Sale</Badge>}
          {isNew  && <Badge variant="new">New</Badge>}
        </div>
      </div>

      {/* Product info */}
      <div className="p-3">
        <p className="text-xs text-fg-muted truncate mb-1">{name}</p>
        <div className="flex items-center gap-2 flex-wrap">
          {salePrice && (
            <span className="text-xs text-fg-muted line-through">
              ${salePrice.toLocaleString()}
            </span>
          )}
          <span className="text-sm font-bold text-fg">
            ${price.toLocaleString()}
          </span>
        </div>
      </div>
    </article>
  );
}

/*
 * Usage:
 *   <ProductCard product={product} />
 *
 * salePrice = original (higher) price shown strikethrough.
 * price     = current (discounted) price shown bold.
 */