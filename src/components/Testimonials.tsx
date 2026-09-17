import { MaterialIcon } from './icons/MaterialIcon';
import { testimonials } from '../data/content';

export function Testimonials() {
  return (
    <section
      id="patient-stories"
      className="w-full border-t border-border-subtle bg-brand-ice/40 py-14 md:py-[5.5rem]"
    >
      <div className="wrap">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
            <span className="h-2 w-2 rounded-full bg-brand-cyan" />
            Global Testimonials
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-navy md:text-3xl">
            What patients say after they're home.
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Verified journeys from international patients who trusted us for their surgical
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-white p-7 shadow-sm transition-all hover:border-brand-cyan/40 hover:shadow-lg"
              key={testimonial.name}
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{testimonial.flag}</span>
                    <span className="text-sm font-bold text-brand-navy">
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <MaterialIcon key={index} name="star" className="text-[18px]" />
                    ))}
                  </div>
                </div>
                <p className="mb-6 text-xs italic leading-relaxed text-text-body sm:text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-border-subtle pt-4">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-navy">{testimonial.name}</span>
                  <span className="text-xs text-text-muted">{testimonial.procedure}</span>
                </div>
                <span className="rounded-full border border-brand-cyan-light bg-brand-ice px-2.5 py-1 text-xs font-bold text-brand-navy">
                  {testimonial.hospitalTag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
