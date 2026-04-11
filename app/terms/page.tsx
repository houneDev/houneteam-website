'use client'

import LegalLayout from '@/components/layout/LegalLayout'
import { useI18n } from '@/lib/i18n'

export default function TermsPage() {
  const { t } = useI18n()

  return (
    <LegalLayout
      kicker={t('terms.kicker')}
      title={t('terms.title')}
      desc={t('terms.desc')}
      effectiveDate="2025-01-01"
    >
      <div className="legal-content">
        <section>
          <h2>1. Acceptance of the Terms</h2>
          <p>By downloading, installing, accessing, or using any game or service published by HouneTeam, you agree to be bound by these Terms of Service and our <a href="/privacy">Privacy Policy</a>. If you do not agree, do not use our games.</p>
        </section>

        <section>
          <h2>2. Eligibility and platform requirements</h2>
          <p>You are responsible for ensuring that your use of our games complies with applicable law and with the rules of the platform, device, or storefront through which you access the game.</p>
        </section>

        <section>
          <h2>3. License</h2>
          <p>Subject to these Terms, HouneTeam grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to download and use our games for your own non-commercial entertainment purposes.</p>
          <p>You may not:</p>
          <ul>
            <li>Copy, sell, rent, lease, sublicense, or commercially exploit any game except as permitted by law.</li>
            <li>Reverse engineer, decompile, or disassemble any game except where applicable law expressly allows it.</li>
            <li>Use cheats, automation, bots, exploits, or unauthorized modifications.</li>
            <li>Interfere with the operation, security, analytics, advertising, or integrity of our games or connected services.</li>
          </ul>
        </section>

        <section>
          <h2>4. Updates and changes to the games</h2>
          <p>We may modify, update, suspend, or discontinue any part of our games at any time, with or without notice, including gameplay systems, balance, content, cloud-save support, advertising behavior, or technical requirements.</p>
        </section>

        <section>
          <h2>5. Advertising and third-party services</h2>
          <p>Our games may display advertising supplied by third parties, including Google AdMob. Ad delivery, measurement, fraud prevention, ad frequency, and personalization may depend on third-party systems, platform permissions, and regional requirements.</p>
          <p>Our games may also rely on third-party services such as Firebase for analytics and diagnostics.</p>
          <p>On Android, our games may use Google Play Games Services for cloud save functionality. On iOS, our games may use Apple CloudKit / iCloud for cloud save functionality where supported.</p>
          <p>Your use of third-party services may also be subject to the terms, policies, and technical requirements of those third parties.</p>
        </section>

        <section>
          <h2>6. Virtual items, progression, and availability</h2>
          <p>Our games may contain virtual currency, boosts, upgrades, unlocks, progress states, or similar gameplay items. These items are licensed for use inside the game only and do not constitute real-world property or monetary value, except where mandatory law provides otherwise.</p>
          <p>We do not guarantee that game progress, local saves, or cloud saves will always be available, preserved, or error-free.</p>
        </section>

        <section>
          <h2>7. Intellectual property</h2>
          <p>Our games and all related content, including code, art, music, text, UI, logos, design elements, gameplay systems, and other materials, are owned by or licensed to HouneTeam and are protected by intellectual property and other applicable laws.</p>
        </section>

        <section>
          <h2>8. User conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our games for unlawful, harmful, fraudulent, or abusive purposes.</li>
            <li>Attempt to gain unauthorized access to systems, accounts, telemetry, advertising flows, or cloud-save data.</li>
            <li>Disrupt gameplay, servers, analytics integrity, or ad-serving mechanisms.</li>
            <li>Use our games in a manner that violates third-party rights or applicable platform rules.</li>
          </ul>
        </section>

        <section>
          <h2>9. Termination or suspension</h2>
          <p>We may suspend or terminate access to our games, or disable certain features, if we reasonably believe that you violated these Terms, created risk for the game or other users, or where we are required to do so by law, platform policy, or technical necessity.</p>
        </section>

        <section>
          <h2>10. Disclaimer of warranties</h2>
          <p>Our games are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent permitted by law, we disclaim all warranties, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, availability, or uninterrupted operation.</p>
        </section>

        <section>
          <h2>11. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, HouneTeam will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, goodwill, data, progress, business opportunity, or device availability arising out of or relating to our games.</p>
          <p>To the extent a limitation of liability is not permitted in your jurisdiction, some of these limitations may not apply to you.</p>
        </section>

        <section>
          <h2>12. Indemnity</h2>
          <p>To the extent permitted by law, you agree to indemnify and hold harmless HouneTeam from claims, liabilities, damages, losses, and expenses arising from your misuse of our games, your violation of these Terms, or your violation of applicable law or third-party rights.</p>
        </section>

        <section>
          <h2>13. Changes to these Terms</h2>
          <p>We may revise these Terms from time to time. When we do, we will update the effective date on this page. Continued use of our games after revised Terms become effective means you accept the updated Terms, unless applicable law requires additional notice.</p>
        </section>

        <section>
          <h2>14. Governing law</h2>
          <p>These Terms are governed by the laws of Japan, without regard to conflict-of-law rules, except where mandatory consumer protection law in your place of residence provides otherwise.</p>
        </section>

        <section>
          <h2>15. Contact</h2>
          <p>Questions about these Terms can be sent to HouneTeam at <a href="mailto:info@houneteam.com">info@houneteam.com</a>.</p>
        </section>
      </div>
    </LegalLayout>
  )
}
