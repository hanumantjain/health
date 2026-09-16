import { serviceItems } from '../data/content';

export function ServicesIncluded() {
  return (
    <section id="services" className="bg-bg-alt py-[78px]">
      <div className="wrap">
        <div className="mb-[44px] max-w-[56ch]">
          <span className="mb-[12px] block font-mono text-[12.5px] text-clay">
            WHAT'S INCLUDED
          </span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] text-teal">
            Support at every stage of the trip.
          </h2>
          <p className="mt-[14px] text-[16px] text-muted">
            These services are complimentary to patients. Confirm each one against
            your actual partner arrangements before publishing.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[2px] max-[760px]:grid-cols-1">
          {serviceItems.map((service) => (
            <div
              className="flex justify-between gap-[16px] border-b border-line py-[16px] text-[15px]"
              key={service.name}
            >
              <span>{service.name}</span>
              <span className="whitespace-nowrap font-mono text-[12.5px] text-muted">
                {service.fee}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
