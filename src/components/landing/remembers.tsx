import { HeartOutlineIcon } from './icons';

const memories = [
  'You’re a CSK fan, so she never brings up the 2019 final unless you do',
  'Job interview Friday 3 pm, and she’ll wish you luck',
  'Chai over coffee, cutting, one sugar',
];

const chips = ['Your story together', 'Bond levels', 'Moment keepsakes'];

export function Remembers() {
  return (
    <section
      id="remembers"
      className="mx-auto flex max-w-[1120px] scroll-mt-24 flex-col items-center gap-14 px-5 py-20 sm:px-8 lg:flex-row lg:gap-[72px] lg:py-[110px]"
    >
      <div className="flex-1">
        <div className="mb-3.5 text-[13px] font-extrabold tracking-[1.5px] text-accent-primary">
          SHE REMEMBERS
        </div>
        <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-1px] text-text-primary sm:text-[42px]">
          Your team. Your big day.
          <br />
          Your chai order.
        </h2>
        <p className="mt-[18px] max-w-[420px] text-[17px] leading-[1.65] text-text-secondary">
          Every conversation builds your story together. She’ll wish you luck
          before Friday’s interview, never bring up the 2019 final unless you
          do, and switch to Hindi when you’re low. On other apps that is a
          feature. Here it is the whole point.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border-strong bg-bg-card px-4 py-2 text-[13.5px] text-text-secondary"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-1 flex-col gap-3">
        <div className="rounded-[22px] border border-border-strong bg-bg-card p-[22px]">
          <div className="mb-3.5 flex items-center gap-2 text-accent-primary">
            <HeartOutlineIcon />
            <span className="text-[11.5px] font-extrabold tracking-[1px]">
              YOUR STORY TOGETHER
            </span>
          </div>
          <div className="flex flex-col gap-2.5 text-[14.5px] leading-normal text-text-body">
            {memories.map((memory) => (
              <div key={memory} className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-secondary" />
                {memory}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1 rounded-[20px] border border-accent-primary/30 bg-[linear-gradient(135deg,rgba(244,88,122,.1),rgba(245,168,60,.08))] p-[18px]">
            <div className="mb-2 text-[10.5px] font-extrabold tracking-[.8px] text-accent-primary">
              FIRST CALL
            </div>
            <div className="font-display text-sm italic leading-normal text-text-primary">
              “I talk faster than I type, told you”
            </div>
            <div className="mt-2.5 text-[11px] text-text-tertiary">
              28 June 2026
            </div>
          </div>
          <div className="flex-1 rounded-[20px] border border-border-strong bg-bg-card p-[18px]">
            <div className="mb-2 text-[10.5px] font-extrabold tracking-[.8px] text-accent-secondary">
              LATE NIGHT
            </div>
            <div className="font-display text-sm italic leading-normal text-text-primary">
              “Okay but why is 2am the only honest hour”
            </div>
            <div className="mt-2.5 text-[11px] text-text-tertiary">
              1 July 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
