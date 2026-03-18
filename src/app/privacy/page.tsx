import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Chooze privacy policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="March 14, 2026">
      <p>
        Chooze (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the Chooze mobile
        application. This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our app.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information You Provide</h3>
      <table>
        <thead>
          <tr><th>Data Type</th><th>Purpose</th><th>Required</th></tr>
        </thead>
        <tbody>
          <tr><td>Phone number</td><td>Account authentication (OTP login)</td><td>Yes</td></tr>
          <tr><td>Email address</td><td>Alternative login, account recovery</td><td>Optional</td></tr>
          <tr><td>Name</td><td>Profile personalization</td><td>Optional</td></tr>
          <tr><td>Age</td><td>Age verification (18+ only), personalization</td><td>Yes</td></tr>
          <tr><td>Gender</td><td>Companion recommendations</td><td>Yes</td></tr>
          <tr><td>Interests</td><td>Personalization, companion matching</td><td>Yes</td></tr>
          <tr><td>Personality preferences</td><td>Companion communication style</td><td>Yes</td></tr>
        </tbody>
      </table>

      <h3>Information Generated Through Use</h3>
      <ul>
        <li><strong>Chat messages:</strong> Text conversations with AI companions, stored to provide conversation continuity and memory features.</li>
        <li><strong>Voice call metadata:</strong> Call duration, timestamps, and billing records.</li>
        <li><strong>Wallet transactions:</strong> Payment amounts, timestamps, and ledger entries.</li>
        <li><strong>App usage analytics:</strong> Screen views, feature usage, and crash reports for app improvement.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and maintain the Chooze service</li>
        <li>Authenticate your identity and secure your account</li>
        <li>Personalize your experience and companion recommendations</li>
        <li>Process wallet transactions and voice call billing</li>
        <li>Improve the app through aggregated analytics</li>
        <li>Communicate important service updates</li>
        <li>Enforce our Terms of Service and ensure user safety</li>
      </ul>

      <h2>3. AI-Generated Content</h2>
      <p>
        Chooze uses artificial intelligence to power companion conversations and generate
        companion profile images. All companions are AI-generated and are not real people.
        Chat responses and voice interactions are produced by AI language models. We implement
        safety guardrails and content moderation to maintain appropriate interactions.
      </p>

      <h2>4. Data Sharing</h2>
      <p>We do <strong>not</strong> sell your personal data. We share data only in the following circumstances:</p>
      <ul>
        <li><strong>Payment processing:</strong> Payment details are processed by Razorpay, our payment gateway. We do not store your card numbers or bank details.</li>
        <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or government regulation.</li>
        <li><strong>Safety:</strong> To protect the safety of our users or the public.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We protect your data using:</p>
      <ul>
        <li>HTTPS encryption for all data in transit</li>
        <li>Encrypted database storage</li>
        <li>Secure authentication with JWT tokens</li>
        <li>Regular security reviews</li>
      </ul>

      <h2>6. Data Retention</h2>
      <ul>
        <li><strong>Personal data:</strong> Retained while your account is active. Deleted upon account deletion request.</li>
        <li><strong>Financial records:</strong> Retained for 7 years after account deletion, as required by Indian financial regulations.</li>
        <li><strong>Aggregated analytics:</strong> Retained indefinitely in anonymized form.</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li><strong>Access</strong> your personal data (available in the app under Profile)</li>
        <li><strong>Delete</strong> your account and associated data (Settings &gt; Delete Account, or via our <a href="/delete-account">web form</a>)</li>
        <li><strong>Correct</strong> inaccurate information (edit your profile in the app)</li>
        <li><strong>Withdraw consent</strong> by deleting your account</li>
      </ul>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        Chooze is intended for adults aged 18 and older only. We do not knowingly collect
        data from anyone under 18. If we discover that a minor has created an account, we
        will promptly delete it.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this
        page with an updated &quot;Last updated&quot; date. Continued use of the app after
        changes constitutes acceptance.
      </p>

      <h2>10. Contact Us</h2>
      <p>For privacy-related questions or data requests:</p>
      <ul>
        <li>Email: <a href="mailto:support@chooze.online">support@chooze.online</a></li>
      </ul>
    </LegalPage>
  );
}
