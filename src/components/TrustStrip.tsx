import { heroMetrics } from '../data/content';

const tagColorClass: Record<NonNullable<(typeof heroMetrics)[number]['tagColor']>, string> = {
  cyan: 'text-brand-cyan',
  'cyan-deep': 'text-brand-cyan-deep',
  navy: 'text-brand-navy',
};

export function TrustStrip() {
  return (
    <div className="wrap -mt-2 pb-4">
      <div className="rounded-2xl border border-brand-cyan-light/50 bg-white p-6 shadow-md md:p-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {heroMetrics.map((metric) => (
            <div className="flex flex-col" key={metric.title}>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-brand-navy lg:text-4xl">
                  {metric.value}
                </span>
                {metric.tag && (
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${tagColorClass[metric.tagColor ?? 'cyan-deep']}`}
                  >
                    {metric.tag}
                  </span>
                )}
              </div>
              <span className="mt-1 text-sm font-bold text-text-heading">{metric.title}</span>
              <span className="text-xs text-text-muted">{metric.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
