import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Delete your Chooze account and associated data.',
};

export default function DeleteAccountPage() {
  return (
    <LegalPage title="Delete Your Account" updated="March 14, 2026">
      <p>
        We&apos;re sorry to see you go. Here&apos;s how to delete your account and what
        happens to your data.
      </p>

      <h2>Option 1: Delete In-App (Recommended)</h2>
      <ol>
        <li>Open the Chooze app</li>
        <li>Go to the <strong>Profile</strong> tab</li>
        <li>Tap <strong>Settings</strong></li>
        <li>Scroll down and tap <strong>Delete Account</strong></li>
        <li>Confirm your decision</li>
      </ol>
      <p>Your account will be deleted immediately.</p>

      <h2>Option 2: Request via Email</h2>
      <p>
        If you cannot access the app, send an email to{' '}
        <a href="mailto:support@chooze.online?subject=Account%20Deletion%20Request">
          support@chooze.online
        </a>{' '}
        with the subject &quot;Account Deletion Request&quot; and include the phone number
        or email associated with your account. We will process your request within 48 hours.
      </p>

      <h2>What Gets Deleted</h2>
      <table>
        <thead>
          <tr><th>Data</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Profile information (name, age, gender, interests)</td><td>Permanently deleted</td></tr>
          <tr><td>Chat history and conversation data</td><td>Permanently deleted</td></tr>
          <tr><td>Friend connections and relationships</td><td>Permanently deleted</td></tr>
          <tr><td>Voice call recordings (if any)</td><td>Permanently deleted</td></tr>
          <tr><td>Episodic memories and preferences</td><td>Permanently deleted</td></tr>
          <tr><td>Wallet balance</td><td>Forfeited (contact support before deletion for refund requests)</td></tr>
          <tr><td>Financial transaction records</td><td>Retained for 7 years (Indian financial regulations)</td></tr>
          <tr><td>Anonymized analytics data</td><td>Retained (cannot be linked back to you)</td></tr>
        </tbody>
      </table>

      <h2>Important Notes</h2>
      <ul>
        <li>Account deletion is <strong>permanent and irreversible</strong>. You cannot recover your data after deletion.</li>
        <li>If you have remaining wallet balance, contact <a href="mailto:support@chooze.online">support@chooze.online</a> before deleting your account to discuss a potential refund.</li>
        <li>Financial records are retained for 7 years as required by Indian financial regulations, but they cannot be used to identify you after account deletion.</li>
      </ul>

      <h2>Questions?</h2>
      <p>
        Contact us at{' '}
        <a href="mailto:support@chooze.online">support@chooze.online</a>.
      </p>
    </LegalPage>
  );
}
