import { MaterialIcon } from './icons/MaterialIcon';
import { journeySteps } from '../data/content';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white py-14 md:py-[5.5rem]">
      <div className="wrap">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan-deep">
            <MaterialIcon name="flight" className="text-[16px]" />
            The Patient Journey
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-navy md:text-3xl">
            Four seamless steps from home to recovery.
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            One dedicated multilingual care officer coordinates your medical files, flights,
            visa, hospital admission, and safe return home.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step) => (
            <div
              className="group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card p-7 shadow-sm transition-all hover:border-brand-cyan/40 hover:shadow-lg"
              key={step.stepNo}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-extrabold text-white">
                    {step.stepNo}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan-deep">
                    {step.tag}
                  </span>
                </div>
                <h4 className="mb-2 text-base font-bold text-brand-navy">{step.title}</h4>
                <p className="text-xs leading-relaxed text-text-muted">{step.description}</p>
              </div>
              <div className="-mx-7 -mb-7 mt-6 flex items-center gap-2 rounded-b-2xl border-t border-brand-cyan-light/40 bg-brand-ice px-7 py-3.5 pt-4">
                <MaterialIcon name="check_circle" className="text-[16px] text-brand-cyan-deep" />
                <span className="text-xs font-semibold text-text-body">{step.footnote}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
