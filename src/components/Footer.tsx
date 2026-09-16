import { Link } from 'react-router-dom';
import { footerExploreLinks, footerLegalLinks } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-[#0D2622] pt-[46px] pb-[30px] text-[13.5px] text-[#9FB0A7]">
      <div className="wrap grid grid-cols-[1.4fr_1fr_1fr] gap-[40px] max-[760px]:grid-cols-1 max-[760px]:gap-[26px]">
        <div>
          <h4 className="mb-[14px] font-mono text-[12px] font-medium text-[#DCE6DE]">
            SETU HEALTH
          </h4>
          <p className="max-w-[32ch] text-[#8FA298]">
            A medical travel facilitation service connecting international
            patients with hospitals across India. Setu Health is not a hospital
            and does not provide medical treatment directly.
          </p>
        </div>
        <div>
          <h4 className="mb-[14px] font-mono text-[12px] font-medium text-[#DCE6DE]">
            EXPLORE
          </h4>
          <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
            {footerExploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[#9FB0A7] no-underline hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-[14px] font-mono text-[12px] font-medium text-[#DCE6DE]">
            LEGAL
          </h4>
          <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="text-[#9FB0A7] no-underline hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap mt-[40px] flex flex-wrap justify-between gap-[10px] border-t border-[rgba(255,255,255,0.08)] pt-[22px] text-[12.5px]">
        <span>© 2026 Setu Health. All placeholder content. Replace before publishing.</span>
        <span>[Your registered business entity name], New Delhi, India</span>
      </div>
    </footer>
  );
}
