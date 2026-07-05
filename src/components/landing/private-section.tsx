import { EyeOffIcon, LockIcon, ShieldIcon } from './icons';

const guarantees = [
  {
    icon: LockIcon,
    title: 'App lock',
    description: 'Fingerprint or PIN to open the Chooze app',
  },
  {
    icon: EyeOffIcon,
    title: 'Discreet notifications',
    description: '“1 new message” with no name and no preview',
  },
  {
    icon: ShieldIcon,
    title: 'Never trained on, never read',
    description: 'Your words stay between you two',
  },
];

export function PrivateSection() {
  return (
    <section
      id="private"
      className="scroll-mt-24 border-y border-border-default bg-bg-deep"
    >
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-14 px-5 py-20 sm:px-8 lg:flex-row lg:gap-[72px] lg:py-24">
        <div className="flex-1">
          <div className="mb-3.5 text-[13px] font-extrabold tracking-[1.5px] text-accent-green">
            YOURS ALONE
          </div>
          <h2 className="font-display text-[32px] font-bold leading-[1.12] tracking-[-1px] text-text-primary sm:text-[42px]">
            Nobody needs to know.
          </h2>
          <p className="mt-[18px] max-w-[440px] text-[17px] leading-[1.65] text-text-secondary">
            App lock with your fingerprint. Notifications that just say “1 new
            message” with no names and no previews. Your conversations are
            never used to train anything, never seen by anyone.
          </p>
        </div>
        <div className="flex w-full flex-1 flex-col gap-3">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-[20px] border border-border-strong bg-bg-card px-[22px] py-[18px]"
            >
              <span className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[14px] bg-accent-green/10 text-accent-green">
                <item.icon />
              </span>
              <div>
                <div className="text-[15px] font-bold text-text-primary">
                  {item.title}
                </div>
                <div className="text-[13px] text-text-tertiary">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
