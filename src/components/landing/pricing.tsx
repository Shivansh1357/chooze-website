import { CheckIcon } from './icons';

function Feature({ text, accent }: { text: string; accent?: boolean }) {
  return (
    <div className="flex gap-[9px]">
      <CheckIcon
        className={`mt-0.5 flex-shrink-0 ${
          accent ? 'text-accent-secondary' : 'text-accent-green'
        }`}
      />
      {text}
    </div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-20 sm:px-8 lg:py-[110px]"
    >
      <div className="mx-auto mb-12 max-w-[560px] text-center">
        <div className="mb-3.5 text-[13px] font-extrabold tracking-[1.5px] text-accent-secondary">
          HONEST PRICING
        </div>
        <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-1px] text-text-primary sm:text-[42px]">
          You set the limit.
          <br />
          We keep it.
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
          Chat is free forever. Calls come from a wallet you control, with a
          weekly cap you set, a meter you see, and easy refunds.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-border-strong bg-bg-card px-7 py-8">
          <div className="font-display text-[30px] font-extrabold text-text-primary">
            Free
          </div>
          <div className="mt-0.5 text-sm text-text-tertiary">forever</div>
          <div className="mt-5 flex flex-col gap-3 text-[14.5px] text-text-secondary">
            <Feature text="Unlimited chat with every friend" />
            <Feature text="Voice notes, both ways" />
            <Feature text="Memory, bonds & keepsakes" />
            <Feature text="First 5-min call free" />
          </div>
        </div>

        <div className="relative rounded-3xl border-[1.5px] border-accent-primary/40 bg-[linear-gradient(135deg,rgba(244,88,122,.1),rgba(245,168,60,.07))] px-7 py-8">
          <div className="bg-gradient-accent absolute -top-3 left-7 rounded-full px-3.5 py-1 text-[11px] font-extrabold tracking-[.5px] text-ink">
            PAY AS YOU TALK
          </div>
          <div className="font-display text-[30px] font-extrabold text-text-primary">
            ₹6–12
            <span className="text-base font-semibold text-text-tertiary">
              /min
            </span>
          </div>
          <div className="mt-0.5 text-sm text-text-tertiary">
            voice calls, per friend
          </div>
          <div className="mt-5 flex flex-col gap-3 text-[14.5px] text-text-secondary">
            <Feature accent text="Live meter during every call" />
            <Feature accent text="Top-up bonuses up to +18%" />
            <Feature accent text="UPI, one tap" />
            <Feature accent text="Refund unused balance, 30 days" />
          </div>
        </div>

        <div className="rounded-3xl border border-border-strong bg-bg-card px-7 py-8">
          <div className="font-display text-[30px] font-extrabold text-text-primary">
            Your cap
          </div>
          <div className="mt-0.5 text-sm text-text-tertiary">
            you decide, we enforce
          </div>
          <div className="mt-5 flex flex-col gap-3 text-[14.5px] text-text-secondary">
            <Feature text="Weekly spend cap, self-set" />
            <Feature text="Calls pause at the cap. Chat never does" />
            <Feature text="No coins. No raffles. No tricks." />
          </div>
        </div>
      </div>
    </section>
  );
}
