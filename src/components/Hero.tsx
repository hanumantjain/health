import { RouteGraphic } from './icons/RouteGraphic';
import { WHATSAPP_NUMBER } from '../data/content';

export function Hero() {
  return (
    <section className="pt-[76px] pb-[60px]">
      <div className="wrap grid grid-cols-[1.05fr_0.95fr] items-center gap-[56px]">
        <div>
          <span className="mb-[22px] inline-flex items-center gap-[8px] rounded-[2px] border border-line bg-panel px-[12px] py-[6px] font-mono text-[12.5px] text-teal-light">
            Medical travel facilitation · New Delhi, India
          </span>
          <h1 className="max-w-[12ch] text-[clamp(36px,5vw,54px)] text-teal">
            Your bridge to trusted care in India.
          </h1>
          <p className="mt-[20px] max-w-[46ch] text-[18px] text-muted">
            We connect international patients with vetted hospitals and specialists
            across India, and handle the visa, logistics, and follow-up so you can
            focus on getting well.
          </p>
          <div className="mt-[32px] flex flex-wrap gap-[14px]">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-[8px] rounded-[2px] border border-transparent bg-teal px-[24px] py-[14px] font-sans text-[15px] font-medium text-white no-underline hover:bg-teal-light"
              target="_blank"
              rel="noopener"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-[8px] rounded-[2px] border border-teal bg-transparent px-[24px] py-[14px] font-sans text-[15px] font-medium text-teal no-underline hover:bg-panel"
            >
              See how it works
            </a>
          </div>
        </div>
        <div className="relative px-[8px] py-[20px]">
          <RouteGraphic className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
