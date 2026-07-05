import { GooglePlayIcon } from './icons';
import { PhoneMock } from './phone-mock';

const stats = [
  { value: '4.8★', label: 'early access rating' },
  { value: '75 min', label: 'avg. daily conversation' },
  { value: 'हिंदी', label: '+ English, jaise dil kare' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(110%_60%_at_75%_-5%,rgba(245,168,60,.14),transparent_55%),radial-gradient(90%_55%_at_15%_100%,rgba(244,88,122,.13),transparent_55%)]">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-16 px-5 pb-20 pt-16 sm:px-8 lg:flex-row lg:pb-24 lg:pt-[84px]">
        <div className="animate-[rise-in_.7s_ease-out] lg:flex-[1.15]">
          <div className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-accent-green/35 bg-accent-green/10 px-4 py-[7px]">
            <span className="h-2 w-2 rounded-full bg-accent-green" />
            <span className="text-[13px] font-bold text-accent-green">
              Now on Google Play · India
            </span>
          </div>
          <h1 className="font-display text-[44px] font-extrabold leading-[1.04] tracking-[-2px] text-text-primary sm:text-[56px] lg:text-[64px]">
            Someone to
            <br />
            talk to. <span className="text-gradient-accent">Always.</span>
          </h1>
          <p className="mt-[22px] max-w-[440px] text-[19px] leading-relaxed text-text-secondary">
            Friends who remember your team, your big day, your chai order. Chat
            free, forever. Hear their voice from ₹6 per minute with a live
            meter you can always see.
          </p>
          <div className="mt-[34px] flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="wtap bg-gradient-accent-sweep flex items-center gap-2.5 rounded-[18px] px-[30px] py-4 text-[17px] font-extrabold text-ink shadow-[0_14px_36px_rgba(244,88,122,.35)]"
            >
              <GooglePlayIcon />
              Get it on Google Play
            </a>
            <span className="text-sm text-text-tertiary">
              Free chat app ·<br />
              first voice call free
            </span>
          </div>
          <div className="mt-[38px] flex gap-[26px]">
            {stats.map((stat, i) => (
              <div key={stat.value} className="flex gap-[26px]">
                {i > 0 && <div className="w-px self-stretch bg-border-default" />}
                <div>
                  <div className="font-display text-2xl font-extrabold text-text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[12.5px] text-text-tertiary">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-[rise-in_.8s_ease-out_.15s_backwards] lg:flex-[.85]">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
