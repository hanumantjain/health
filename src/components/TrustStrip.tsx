import { trustStats } from '../data/content';

export function TrustStrip() {
  return (
    <div className="border-y border-line bg-panel">
      <div className="wrap flex flex-wrap py-[30px]">
        {trustStats.map((stat) => (
          <div
            className="flex-[1_1_200px] border-l border-line px-[28px] first:border-l-0"
            key={stat.label}
          >
            <div className="font-serif text-[32px] font-medium text-teal">
              {stat.value}
            </div>
            <div className="mt-[4px] text-[13.5px] text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
