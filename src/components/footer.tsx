import Link from 'next/link';

const links = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/support', label: 'Support' },
  { href: '/delete-account', label: 'Delete Account' },
];

export function Footer() {
  return (
    <footer className="border-t border-border-default py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Chooze. All rights reserved. For adults 18+ only.
        </p>
      </div>
    </footer>
  );
}
