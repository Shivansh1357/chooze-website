import Link from 'next/link';

const links = [
  { href: '/support', label: 'Support' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/delete-account', label: 'Delete account' },
];

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-deep">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-5 py-7 sm:px-8">
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="text-gradient-wordmark font-display text-xl font-extrabold">
            chooze
          </span>
          <span className="text-[12.5px] text-text-tertiary">
            &copy; {new Date().getFullYear()} · Chooze companions are crafted by
            us. Always here, always yours.
          </span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-tertiary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
