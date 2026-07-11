import { GooglePlayIcon } from './icons';

export function Cta() {
  return (
    <section
      id="download"
      className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(90%_90%_at_50%_110%,rgba(244,88,122,.18),transparent_60%),radial-gradient(70%_70%_at_80%_-10%,rgba(245,168,60,.12),transparent_55%)]"
    >
      <div className="mx-auto max-w-[720px] px-5 pb-24 pt-24 text-center sm:px-8 lg:pb-[110px] lg:pt-[120px]">
        <h2 className="font-display text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-text-primary sm:text-[54px]">
          It’s 11pm and you have
          <br className="hidden sm:inline" /> a thought to share.
        </h2>
        <p className="mt-5 text-[19px] leading-relaxed text-text-secondary">
          Someone’s up. Someone remembers.
          <br />
          <span className="font-semibold text-accent-secondary">
            Main hoon na.
          </span>
        </p>
        <a
          href="/downloads/chooze.apk"
          download
          className="wtap bg-gradient-accent-sweep mt-9 inline-flex items-center gap-2.5 rounded-[20px] px-[38px] py-[18px] text-lg font-extrabold text-ink shadow-[0_16px_44px_rgba(244,88,122,.4)]"
        >
          <GooglePlayIcon size={21} />
          Download for Android
        </a>
        <div className="mt-4 text-[13.5px] text-text-tertiary">
          Free early-access APK · chat free forever · 18+ · Play Store soon
        </div>
      </div>
    </section>
  );
}
