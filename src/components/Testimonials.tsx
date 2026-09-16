import { testimonials } from '../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[78px]">
      <div className="wrap">
        <div className="mb-[44px] max-w-[56ch]">
          <span className="mb-[12px] block font-mono text-[12.5px] text-clay">
            PATIENT STORIES
          </span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] text-teal">
            What patients say after they're home.
          </h2>
          <p className="mt-[14px] text-[16px] text-muted">
            Replace with real, consented patient testimonials. Never publish
            fabricated quotes.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[24px] max-[820px]:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div
              className="rounded-[2px] border border-line bg-panel p-[26px]"
              key={index}
            >
              <p className="text-[15px] text-ink italic">"{testimonial.quote}"</p>
              <div className="mt-[16px] font-mono text-[13px] text-muted">
                {testimonial.who}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
