import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Chooze. Contact support, find answers to common questions.',
};

const faqs = [
  {
    question: 'How do I add money to my wallet?',
    answer:
      'Open the Wallet tab in the app, tap "Top Up", choose an amount, and complete payment via UPI, card, or net banking. Funds are added instantly after successful payment.',
  },
  {
    question: 'How are voice calls billed?',
    answer:
      'Voice calls are billed per minute. The rate is displayed on each companion\'s profile before you call. Charges are deducted from your wallet balance in real-time.',
  },
  {
    question: 'Can I get a refund for wallet credits?',
    answer:
      'Wallet credits are generally non-refundable. For exceptional circumstances, contact us at support@chooze.online with your account details and reason.',
  },
  {
    question: 'Are the companions real people?',
    answer:
      'No. All companions on Chooze are AI-generated personas powered by artificial intelligence. They are designed to provide engaging conversations but are not real humans.',
  },
  {
    question: 'How do I report inappropriate content?',
    answer:
      'You can report any companion or conversation using the Report button available on companion profiles and in chat. Our team reviews all reports.',
  },
  {
    question: 'How do I delete my account?',
    answer:
      'Go to Settings > Delete Account in the app. You can also request deletion through our account deletion page. Personal data is deleted immediately; financial records are retained for 7 years per regulatory requirements.',
  },
  {
    question: "I forgot my login / can't access my account",
    answer:
      'If you logged in with your phone number, request a new OTP on the login screen. If you used email, use the password reset option. For further help, email support@chooze.online.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes. All data is encrypted in transit (HTTPS) and at rest. We do not sell your data to third parties. See our Privacy Policy for full details.',
  },
];

export default function SupportPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Support</h1>
        <p className="mt-2 text-text-secondary">
          We&apos;re here to help. Reach out anytime.
        </p>

        {/* Contact card */}
        <div className="mt-10 rounded-2xl border border-border-default bg-bg-card p-8">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-sm text-text-secondary">
            Email:{' '}
            <a
              href="mailto:support@chooze.online"
              className="text-accent-primary hover:text-accent-glow transition-colors"
            >
              support@chooze.online
            </a>
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            We typically respond within 24–48 hours.
          </p>
        </div>

        {/* FAQ */}
        <h2 className="mt-12 text-xl font-semibold text-accent-glow">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border-default bg-bg-card p-6"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
