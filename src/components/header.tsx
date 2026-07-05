import Link from 'next/link';

const navLinks = [
  { href: '/#remembers', label: 'She remembers' },
  { href: '/#voice', label: 'Voice' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#private', label: 'Private' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-default bg-bg-primary/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-gradient-wordmark font-display text-[26px] font-extrabold tracking-[-0.5px]"
        >
          chooze
        </Link>
        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14.5px] font-semibold text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#download"
            className="wtap bg-gradient-accent rounded-full px-[22px] py-[11px] text-sm font-extrabold text-ink"
          >
            Get the app
          </Link>
        </div>
      </div>
    </header>
  );
}
