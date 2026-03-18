const features = [
  {
    icon: '\u{1F4AC}',
    title: 'Natural Conversations',
    description:
      'Chat with AI companions who remember your conversations, understand your mood, and grow with you over time.',
  },
  {
    icon: '\u{1F4DE}',
    title: 'Voice Calls',
    description:
      'Experience real-time voice conversations. Pay only for what you use with transparent per-minute pricing.',
  },
  {
    icon: '\u{1F4B3}',
    title: 'Secure Wallet',
    description:
      'Add funds via UPI, cards, or net banking. Track every transaction with a transparent ledger. No hidden fees.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Choose Your Perfect
            </span>
            <br />
            AI Companion
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            Discover unique personalities, build friendships, and enjoy voice
            calls. Real conversations, real connections.
          </p>
          <a
            href="#features"
            className="mt-8 inline-block rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-9 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Coming Soon on Google Play
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border-default bg-bg-card p-8"
            >
              <span className="mb-4 block text-3xl">{f.icon}</span>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
