import { journeySteps } from '../data/content';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-alt py-[78px]">
      <div className="wrap">
        <div className="mb-[44px] max-w-[56ch]">
          <span className="mb-[12px] block font-mono text-[12.5px] text-clay">
            THE PROCESS
          </span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] text-teal">
            Four steps, start to finish.
          </h2>
          <p className="mt-[14px] text-[16px] text-muted">
            One case manager stays with you from your first message to your
            follow-up call back home.
          </p>
        </div>
        <div className="grid grid-cols-4 overflow-hidden rounded-[6px] border border-teal bg-panel max-[860px]:grid-cols-1">
          {journeySteps.map((step) => (
            <div
              className="relative border-l border-dashed border-line px-[24px] py-[30px] first:border-l-0 max-[860px]:border-l-0 max-[860px]:border-t max-[860px]:border-dashed max-[860px]:border-line max-[860px]:first:border-t-0"
              key={step.stepNo}
            >
              <span className="mb-[16px] inline-block rounded-[2px] bg-teal px-[8px] py-[3px] font-mono text-[12px] text-gold">
                {step.stepNo}
              </span>
              <h3 className="text-[17px] text-teal">{step.title}</h3>
              <p className="mt-[8px] text-[14px] text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
