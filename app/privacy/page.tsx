'use client'

import LegalLayout from '@/components/layout/LegalLayout'
import { useI18n } from '@/lib/i18n'

export default function PrivacyPage() {
  const { t } = useI18n()

  return (
    <LegalLayout
      kicker={t('privacy.kicker')}
      title={t('privacy.title')}
      desc={t('privacy.desc')}
      effectiveDate="2025-01-01"
    >
      <div className="legal-content">
        <section>
          <h2>1. Summary</h2>
          <p>Our games use analytics, ad-delivery, and local device storage to operate, improve gameplay balance, understand crashes and session flow, measure ad performance, and support features such as offline income. Some information is stored only on the player&apos;s device, while some information is processed by third-party service providers.</p>
          <p>This policy explains what categories of data are collected, how the data is used, what third parties may process it, and what choices players may have depending on their device, platform, and region.</p>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <h3>2.1 Information you provide directly</h3>
          <ul>
            <li>If you contact us by email, we may receive your email address, the contents of your message, and any attachments or information you choose to send.</li>
            <li>If you choose to connect your Google Play Games account on Android to enable cloud save, we may receive your Google Play Games player ID and display name in order to associate your save data with your account.</li>
          </ul>
          <p>Connecting a Google Play Games account is optional. The core gameplay does not require you to sign in. Our games do not require you to create an account with us or directly submit your real name, postal address, or phone number to play.</p>
          <h3>2.2 Gameplay and telemetry events</h3>
          <ul>
            <li>Session number, session start time, and session duration.</li>
            <li>Whether a session ended normally or after an unexpected interruption or crash-related event.</li>
            <li>Boost and power-up usage within a session.</li>
            <li>First-launch time, total play time, upgrade purchases, upgrade levels, and the timing of unlocks or purchases relative to first launch.</li>
            <li>Which game objects or content were unlocked and when they were unlocked.</li>
            <li>Economy milestones, such as when players reach certain currency thresholds.</li>
            <li>Offline-income claim information, including reward amount and offline time.</li>
            <li>Return-to-game timing information, such as how long the player was absent before opening the game again.</li>
            <li>Advertising outcome events such as whether a rewarded advertisement was watched to completion or was requested but unavailable.</li>
          </ul>
          <h3>2.3 Information collected automatically by integrated third parties</h3>
          <ul>
            <li>Device model, operating system version, app version, language, approximate country or region, and time zone.</li>
            <li>Install source or distribution source information where available.</li>
            <li>Anonymous or pseudonymous identifiers used by analytics or advertising SDKs.</li>
            <li>Ad interaction information, including ad requests, impressions, clicks, reward completion, and fraud-prevention signals.</li>
            <li>IP address and approximate geolocation derived from IP by service providers.</li>
            <li>Crash and error reports collected by Firebase Crashlytics, including stack traces, exception types, device state at the time of the crash, app version, OS version, device model, and a Crashlytics installation UUID.</li>
          </ul>
          <h3>2.4 Information stored locally on the player&apos;s device</h3>
          <ul>
            <li>Session snapshot data used to calculate offline income or restore gameplay state.</li>
            <li>Pending offline reward values stored until the player claims them.</li>
            <li>Other local save information required for gameplay progression and settings.</li>
          </ul>
        </section>

        <section>
          <h2>3. How we use information</h2>
          <ul>
            <li>To operate our games and core gameplay systems.</li>
            <li>To analyze retention, progression, economy balance, and feature usage.</li>
            <li>To diagnose technical problems, crashes, failed ad loads, and performance issues.</li>
            <li>To show advertisements, measure ad performance, and help prevent fraud or invalid traffic.</li>
            <li>To support local saves, offline-income systems, and cloud save functionality.</li>
            <li>To respond to player messages, support questions, or privacy requests.</li>
            <li>To comply with legal obligations and enforce our Terms of Service.</li>
          </ul>
        </section>

        <section>
          <h2>4. How we share information</h2>
          <p>We may share or make information available to the following categories of recipients:</p>
          <ul>
            <li><strong>Service providers and SDK providers</strong>, including Google Firebase and Google AdMob, to provide analytics, diagnostics, advertising, measurement, hosting, fraud prevention, and related services.</li>
            <li><strong>Platform providers</strong>, such as Google Play or Apple platform services, where necessary for distribution, cloud save, platform compliance, or account-linked platform features.</li>
            <li><strong>Authorities or other parties</strong> where disclosure is required by law, regulation, legal process, or to protect rights, security, or the integrity of the service.</li>
          </ul>
          <p>We do not sell personal information for money. If our practices materially change, we will update this Privacy Policy before applying the new practice.</p>
        </section>

        <section>
          <h2>5. Third-party services</h2>
          <p>Our games may use the following third-party service providers:</p>
          <ul>
            <li><strong>Google Firebase</strong> (including Firebase Analytics and Firebase Crashlytics) for analytics, crash reporting, diagnostics, and related infrastructure.</li>
            <li><strong>Google AdMob</strong> for advertising, monetization, measurement, and fraud prevention.</li>
            <li><strong>Google Play Games Services</strong> on Android for cloud save authentication and player identification; <strong>Firebase Firestore</strong> for cloud save data storage and synchronization.</li>
            <li><strong>Apple CloudKit / iCloud</strong> on iOS for cloud save synchronization, where applicable.</li>
          </ul>
          <p>Relevant official resources:</p>
          <ul>
            <li><a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a></li>
            <li><a href="https://firebase.google.com/support/privacy" rel="noopener noreferrer" target="_blank">Firebase Privacy and Security</a></li>
            <li><a href="https://firebase.google.com/docs/crashlytics/data-collection" rel="noopener noreferrer" target="_blank">Firebase Crashlytics Data Collection</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543" rel="noopener noreferrer" target="_blank">AdMob Policies and Restrictions</a></li>
            <li><a href="https://developer.android.com/games/pgs/savedgames" rel="noopener noreferrer" target="_blank">Google Play Games Saved Games</a></li>
            <li><a href="https://developer.apple.com/icloud/cloudkit/" rel="noopener noreferrer" target="_blank">Apple CloudKit</a></li>
          </ul>
        </section>

        <section>
          <h2>6. Advertising identifiers and ad personalization</h2>
          <p>Our games may use advertising identifiers to support personalized or non-personalized ads, subject to platform settings and any consent flows required by law.</p>
          <p>Players can typically limit ad tracking, reset the advertising identifier, or disable personalized advertising through their device and platform settings.</p>
          <p>In some regions, players may also see a consent message before personalized advertising or certain local-storage based ad functions are used, where required by law or platform policy.</p>
        </section>

        <section>
          <h2>7. Cloud saves</h2>
          <h3>7.1 Android cloud saves via Google Play Games and Firebase Firestore</h3>
          <p>On Android, players may optionally connect their Google Play Games account to enable cloud save in supported games. When connected, save data is stored and synchronized through Firebase Firestore using the player&apos;s Google Play Games player ID.</p>
          <p>Connecting a Google Play Games account is optional. If the player does not sign in, saves remain local to the device only.</p>
          <h3>7.2 iOS cloud saves via Apple CloudKit / iCloud</h3>
          <p>Where supported on iOS, save data may be synchronized through Apple CloudKit / iCloud. This may include game progression, save-state records, timestamps, and data needed to keep the player&apos;s progress in sync across Apple devices.</p>
        </section>

        <section>
          <h2>8. Data retention</h2>
          <ul>
            <li>Local save and offline-income data generally remains on the player&apos;s device until the app is uninstalled or device storage is cleared.</li>
            <li>Email or support messages sent directly to us may be retained for as long as reasonably necessary.</li>
            <li>Analytics, advertising, and related telemetry may be retained by third-party providers according to their own retention policies.</li>
            <li>Cloud-save data may remain in the player&apos;s Google or Apple account environment until deleted according to platform behavior.</li>
          </ul>
        </section>

        <section>
          <h2>9. International processing</h2>
          <p>Third-party providers that support our games may process information on servers located in various countries. Information may be transferred outside the player&apos;s country or region.</p>
        </section>

        <section>
          <h2>10. Your rights and choices</h2>
          <ul>
            <li>Players may contact us to request access to, deletion of, or additional information about data we control, where applicable.</li>
            <li>Players may manage advertising preferences through device and platform controls.</li>
            <li>Where consent is used for certain advertising or analytics activities, players may be able to change or withdraw those choices through the relevant consent interface or device settings.</li>
            <li>Local gameplay data can generally be removed by uninstalling the app or clearing app storage on the device.</li>
          </ul>
        </section>

        <section>
          <h2>11. Children&apos;s privacy</h2>
          <p>Our games are not directed to children under the age of 13. If you believe a child provided personal information in violation of applicable law, contact us so we can review the request.</p>
        </section>

        <section>
          <h2>12. Security</h2>
          <p>We take reasonable steps to reduce risk, but no method of storage, transmission, or processing is completely secure. Where supported by the relevant platform or SDK, data transmitted over networks is generally sent using standard secure transport methods such as HTTPS/TLS.</p>
        </section>

        <section>
          <h2>13. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will change the effective date shown at the top of this page. Material changes may also be communicated through the game, store listing, or another appropriate channel where required.</p>
        </section>

        <section>
          <h2>14. Contact</h2>
          <p>For privacy questions or requests, contact HouneTeam at <a href="mailto:info@houneteam.com">info@houneteam.com</a>.</p>
        </section>
      </div>
    </LegalLayout>
  )
}
