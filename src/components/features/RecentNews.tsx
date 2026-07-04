import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionTitle }    from '../ui/SectionTitle';
import { articles }        from '../../data/news';

export function RecentNews(): JSX.Element {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="blog" className="py-16 lg:py-20 bg-surface" aria-label="Recent news">
      <div className="page-x">
        <SectionTitle
          title="Tech Articles"
          subtitle="Latest and greatest tech articles"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {articles.map((a, i) => (
            <article
              key={a.id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{
                opacity:         visible ? 1 : 0,
                transform:       visible ? 'translateY(0)' : 'translateY(28px)',
                transition:      'opacity 500ms ease, transform 500ms ease, box-shadow 300ms ease',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="overflow-hidden aspect-video">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
              </div>

              {/* Copy */}
              <div className="p-5">
                <p className="text-xs text-fg-muted mb-2">
                  {a.date} by{' '}
                  <span className="font-medium text-fg">{a.author}</span>
                </p>
                <h3 className="text-base font-sans font-bold text-fg mb-2 group-hover:text-primary transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed line-clamp-3">
                  {a.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}