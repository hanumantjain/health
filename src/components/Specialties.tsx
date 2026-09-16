import { specialties } from '../data/content';

export function Specialties() {
  return (
    <section id="specialties" className="py-[78px]">
      <div className="wrap">
        <div className="mb-[44px] max-w-[56ch]">
          <span className="mb-[12px] block font-mono text-[12.5px] text-clay">
            TREATMENT AREAS
          </span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] text-teal">
            Care across the specialties that matter most.
          </h2>
          <p className="mt-[14px] text-[16px] text-muted">
            Every case is reviewed by a specialist before you travel. Replace this
            list with the specialties your partner hospitals actually cover.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-px border border-line bg-line max-[760px]:grid-cols-1">
          {specialties.map((specialty) => (
            <div className="bg-bg px-[26px] py-[30px]" key={specialty.name}>
              <h3 className="text-[19px] font-medium text-teal">{specialty.name}</h3>
              <p className="mt-[10px] text-[14.5px] text-muted">
                {specialty.description}
              </p>
              <span className="mt-[14px] inline-block font-mono text-[11.5px] text-clay">
                {specialty.priceFrom}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
