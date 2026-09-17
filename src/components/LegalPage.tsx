import { useEffect } from 'react';
import type { LegalPageContent } from '../data/content';
import { BRAND_NAME, LEGAL_PLACEHOLDER_NOTICE } from '../data/content';

interface LegalPageProps {
  content: LegalPageContent;
}

export function LegalPage({ content }: LegalPageProps) {
  useEffect(() => {
    document.title = `${content.title} · ${BRAND_NAME}`;
  }, [content.title]);

  return (
    <section className="py-[78px]">
      <div className="wrap max-w-[720px]">
        <span className="mb-[12px] block text-[12.5px] font-bold uppercase tracking-widest text-brand-cyan-deep">
          Legal
        </span>
        <h1 className="text-[clamp(32px,4vw,44px)] text-brand-navy">{content.title}</h1>
        <p className="mt-[14px] text-[16px] text-text-muted">{content.intro}</p>
        <p className="mt-[26px] rounded-xl border border-brand-cyan-light bg-brand-ice p-4 text-[13px] text-text-body">
          {LEGAL_PLACEHOLDER_NOTICE}
        </p>
        <div className="mt-[44px] flex flex-col gap-[32px]">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-[19px] font-bold text-brand-navy">{section.heading}</h2>
              <p className="mt-[10px] text-[15px] text-text-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
