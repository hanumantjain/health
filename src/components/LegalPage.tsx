import { useEffect } from 'react';
import type { LegalPageContent } from '../data/content';
import { LEGAL_PLACEHOLDER_NOTICE } from '../data/content';

interface LegalPageProps {
  content: LegalPageContent;
}

export function LegalPage({ content }: LegalPageProps) {
  useEffect(() => {
    document.title = `${content.title} · Setu Health`;
  }, [content.title]);

  return (
    <section className="py-[78px]">
      <div className="wrap max-w-[720px]">
        <span className="mb-[12px] block font-mono text-[12.5px] text-clay">LEGAL</span>
        <h1 className="text-[clamp(32px,4vw,44px)] text-teal">{content.title}</h1>
        <p className="mt-[14px] text-[16px] text-muted">{content.intro}</p>
        <p className="mt-[26px] font-mono text-[13px] text-clay">
          {LEGAL_PLACEHOLDER_NOTICE}
        </p>
        <div className="mt-[44px] flex flex-col gap-[32px]">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-[19px] font-medium text-teal">{section.heading}</h2>
              <p className="mt-[10px] text-[15px] text-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
