import { MaterialIcon } from './icons/MaterialIcon';
import { BRAND_NAME, serviceColumns } from '../data/content';
import type { ServiceItem } from '../data/content';

function ServiceRow({ item, tinted }: { item: ServiceItem; tinted: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 p-5 transition-colors hover:bg-brand-ice/60 sm:p-6 ${tinted ? 'bg-brand-ice/30' : ''}`}
    >
      <div className="flex items-center gap-3.5">
        <MaterialIcon name="check_circle" className="text-[22px] text-brand-cyan-deep" />
        <span className="text-sm font-semibold text-brand-navy">{item.name}</span>
      </div>
      <span
        className={
          item.tagVariant === 'included'
            ? 'rounded-full bg-brand-cyan-light px-3 py-1 text-xs font-bold text-brand-navy'
            : 'rounded-full border border-brand-cyan-light bg-brand-ice px-3 py-1 text-xs font-bold text-brand-navy'
        }
      >
        {item.tagVariant === 'included' ? 'Included Free' : 'Zero Agency Markup'}
      </span>
    </div>
  );
}

export function ServicesIncluded() {
  return (
    <section id="services-included" className="w-full bg-white py-14 md:py-[5.5rem]">
      <div className="wrap">
        <div className="mb-12 max-w-2xl">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
            <span className="h-2 w-2 rounded-full bg-brand-cyan" />
            Transparent Concierge Scope
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-navy md:text-3xl">
            Support at every stage of your trip.
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            {BRAND_NAME} never marks up hospital invoices. Our facilitation and concierge
            services are completely free for registered international patients.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-border-subtle md:grid-cols-2 md:divide-x md:divide-y-0">
            {serviceColumns.map((column, columnIndex) => (
              <div className="flex flex-col" key={columnIndex}>
                {column.map((item, rowIndex) => (
                  <ServiceRow item={item} tinted={rowIndex % 2 === 1} key={item.name} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
