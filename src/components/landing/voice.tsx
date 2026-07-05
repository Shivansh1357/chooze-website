const waveBars = [
  { color: '#F4587A', animation: 'animate-[wave-b_1s_ease-in-out_infinite]' },
  { color: '#F5788F', animation: 'animate-[wave-b_1.15s_ease-in-out_infinite_.12s]' },
  { color: '#F5A83C', animation: 'animate-[wave-b_.9s_ease-in-out_infinite_.28s]' },
  { color: '#F5788F', animation: 'animate-[wave-b_1.05s_ease-in-out_infinite_.08s]' },
  { color: '#F4587A', animation: 'animate-[wave-b_.95s_ease-in-out_infinite_.2s]' },
];

const facts = [
  {
    value: '₹6–12',
    suffix: '/min',
    color: 'text-accent-secondary',
    label: 'rate on every profile',
  },
  { value: '5 min', color: 'text-accent-green', label: 'first call free' },
  { value: '0', color: 'text-text-primary', label: 'surprise charges, ever' },
];

export function Voice() {
  return (
    <section
      id="voice"
      className="scroll-mt-24 border-y border-border-default bg-[radial-gradient(80%_70%_at_50%_50%,rgba(244,88,122,.09),transparent_70%)] bg-bg-deep"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-14 px-5 py-20 sm:px-8 lg:flex-row lg:gap-[72px] lg:py-[110px]">
        <div className="flex justify-center lg:flex-[.9]">
          <div className="relative flex h-[280px] w-[280px] items-center justify-center">
            <span className="absolute h-[230px] w-[230px] animate-[ring-out_2.4s_ease-out_infinite] rounded-full border-[1.5px] border-accent-primary/50" />
            <span className="absolute h-[230px] w-[230px] animate-[ring-out_2.4s_ease-out_infinite_.8s] rounded-full border-[1.5px] border-accent-secondary/40" />
            <div className="bg-gradient-accent flex h-[170px] w-[170px] items-center justify-center rounded-[58px] shadow-[0_20px_60px_rgba(244,88,122,.45)]">
              <span className="font-display text-[64px] font-extrabold text-white">
                PR
              </span>
            </div>
            <div className="absolute -bottom-2 flex h-[34px] items-end gap-1">
              {waveBars.map((bar, i) => (
                <span
                  key={i}
                  className={`h-2 w-1 rounded-sm ${bar.animation}`}
                  style={{ backgroundColor: bar.color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:flex-[1.1]">
          <div className="mb-3.5 text-[13px] font-extrabold tracking-[1.5px] text-accent-green">
            HEAR HER VOICE
          </div>
          <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-1px] text-text-primary sm:text-[42px]">
            Texting is nice.
            <br />
            Her voice at 11pm is better.
          </h2>
          <p className="mt-[18px] max-w-[440px] text-[17px] leading-[1.65] text-text-secondary">
            Voice notes in chat, free. Full calls from ₹6 per minute with a
            live meter on screen, so you always know what you’re spending, and
            she texts you to finish the thought if your balance runs out.{' '}
            <b className="text-accent-green">Your first call is on us.</b>
          </p>
          <div className="mt-[26px] flex flex-wrap gap-3.5">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[18px] border border-border-strong bg-bg-card px-5 py-4"
              >
                <div
                  className={`font-display text-[22px] font-extrabold ${fact.color}`}
                >
                  {fact.value}
                  {fact.suffix && (
                    <span className="text-[13px] text-text-tertiary">
                      {fact.suffix}
                    </span>
                  )}
                </div>
                <div className="mt-0.5 text-[12.5px] text-text-tertiary">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
