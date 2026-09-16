import { hospitalPartners } from '../data/content';

export function Hospitals() {
  return (
    <section id="hospitals" className="py-[78px]">
      <div className="wrap">
        <div className="mb-[44px] max-w-[56ch]">
          <span className="mb-[12px] block font-mono text-[12.5px] text-clay">
            OUR NETWORK
          </span>
          <h2 className="text-[clamp(26px,3.4vw,36px)] text-teal">
            Accredited hospitals, vetted doctors.
          </h2>
          <p className="mt-[14px] text-[16px] text-muted">
            Replace the entries below with your actual partner hospitals once
            agreements are signed.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[16px] max-[760px]:grid-cols-1">
          {hospitalPartners.map((hospital, index) => (
            <div
              className="rounded-[2px] border border-line bg-panel px-[22px] py-[22px]"
              key={index}
            >
              <div className="text-[15.5px] font-semibold text-teal">
                {hospital.name}
              </div>
              <div className="mt-[6px] text-[13px] text-muted">{hospital.meta}</div>
            </div>
          ))}
        </div>
        <div className="mt-[26px] font-mono text-[13px] text-clay">
          ↳ Add real hospital names, cities and accreditations here once agreements
          are in place.
        </div>
      </div>
    </section>
  );
}
