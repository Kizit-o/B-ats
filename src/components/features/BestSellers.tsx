import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ProductCard }     from '../ui/ProductCard';
import { SectionTitle }    from '../ui/SectionTitle';
import { products }        from '../../data/products';

export function BestSellers(): JSX.Element {
  const { ref, visible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-16 lg:py-20" aria-label="Best seller products">
      <div className="page-x">
        <SectionTitle
          title="Best Seller Products"
          subtitle="Lorem — There are many variations passages"
        />

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {products.map((p, i) => (
            <div
              key={p.id}
              style={{
                opacity:         visible ? 1 : 0,
                transform:       visible ? 'translateY(0)' : 'translateY(28px)',
                transition:      'opacity 500ms ease, transform 500ms ease',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}