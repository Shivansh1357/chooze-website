import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-border-default">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-3xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent"
        >
          Chooze
        </Link>
        <nav className="hidden gap-6 sm:flex">
          <Link href="/#features" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Features
          </Link>
          <Link href="/support" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Support
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
