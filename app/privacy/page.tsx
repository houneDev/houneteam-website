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
      effectiveDate="2026-06-17"
    >
      <div className="legal-content">
        <section>
          <h2>1. Summary</h2>
          <p>HouneTeam makes casual mobile games published on Google Play and the Apple App Store. To operate our games and improve them, we integrate third-party SDKs for analytics, crash reporting, advertising mediation, install attribution, push notifications, and cloud saves.</p>
          <p>This Privacy Policy lists every category of data we or our integrated providers collect, what each provider does with it, how long we retain it, what choices you have, and who to contact. It applies to all current and future HouneTeam games unless a specific game&apos;s store listing or in-app notice states otherwise. Some sections describe SDKs or event types that may not apply to every game &mdash; each title integrates only a subset of what is listed below, and the store listing and in-game privacy screen of a given game reflect what its current build actually uses.</p>
          <p><strong>HouneTeam</strong> is the data controller for the data collected through our games. Contact: <a href="mailto:info@houneteam.com">info@houneteam.com</a>. Jurisdiction: Japan.</p>
        </section>

        <section>
          <h2>2. Information we collect</h2>

          <h3>2.1 Information you provide directly</h3>
          <ul>
            <li>If you contact us by email, we receive your email address, the contents of your message, and any attachments you choose to send.</li>
            <li>On Android, if you sign into <strong>Google Play Games Services</strong> to enable cloud save, we receive your Play Games player ID and display name.</li>
            <li>On iOS, if you sign into <strong>Apple Game Center</strong>, we receive your Game Center player ID.</li>
          </ul>
          <p>Sign-in is optional. Core gameplay does not require an account. We do not ask for your real name, postal address, or phone number.</p>

          <h3>2.2 Gameplay and telemetry events</h3>
          <p>Our games send anonymous gameplay events to Firebase Analytics so we can balance the game, find broken progression paths, and understand where players get stuck. The exact event set varies by title and by game type; categories we may collect across our games include:</p>
          <ul>
            <li>Session events &mdash; session number, start time, duration, and whether a session ended normally or after an interruption or crash.</li>
            <li>Lifetime events &mdash; first-launch time, total play time, and the timing of unlocks or purchases.</li>
            <li>Progression events &mdash; level or stage completion, upgrade levels, unlocked content, and other game-specific advancement markers.</li>
            <li>Economy events &mdash; in-game currency earned or spent, currency thresholds reached, and (for idle-style games) offline-progress claim amount and duration.</li>
            <li>Item and tool usage &mdash; boosts, power-ups, hints, or other consumables, where the game has them.</li>
            <li>Return-to-game timing &mdash; how long a player was absent before re-opening the game.</li>
            <li>Ad outcome events &mdash; whether a rewarded ad was watched to completion, requested but unavailable, or skipped.</li>
            <li>In-app purchase events &mdash; product ID, success/failure (no card or bank information).</li>
          </ul>

          <h3>2.3 Information collected automatically by integrated SDKs</h3>
          <ul>
            <li>Device model, operating system version, app version, language, approximate country or region, and time zone.</li>
            <li>Install source / install referrer where available.</li>
            <li>Pseudonymous identifiers used by analytics, attribution, and advertising SDKs (see §5 for the per-SDK list).</li>
            <li>Advertising identifiers: Apple IDFA on iOS (only when you have granted App Tracking Transparency permission) and Google Advertising ID (GAID) on Android (unless you have opted out at the OS level).</li>
            <li>Ad interaction data: ad requests, impressions, clicks, video completion, reward grants, and fraud-prevention signals.</li>
            <li>IP address, used in transit by service providers and converted to approximate geolocation at the city or country level.</li>
            <li>Crash and error reports collected by Firebase Crashlytics, including stack traces, exception types, device state at the time of the crash, app version, OS version, device model, and a Crashlytics installation UUID.</li>
            <li>Push notification tokens (APNs token on iOS, FCM token on Android) used to deliver push notifications via Firebase Cloud Messaging.</li>
            <li>A Firebase Installations ID used to identify the installation for analytics and remote config.</li>
            <li>A device-attestation result from Firebase App Check used to prevent backend abuse (no personal data is sent; only an attestation token derived from Play Integrity on Android or DeviceCheck / App Attest on iOS).</li>
          </ul>

          <h3>2.4 Information stored locally on your device</h3>
          <ul>
            <li>Local save state, game settings, language preference, and similar progression data.</li>
            <li>Session snapshot data used to restore gameplay state.</li>
            <li>For idle-style titles, pending offline-progress reward values until claimed.</li>
            <li>Cached Remote Config values used to override game balance without a new release.</li>
          </ul>
        </section>

        <section>
          <h2>3. How we use information</h2>
          <ul>
            <li>To operate game systems, including offline income, cloud saves, and remote balancing.</li>
            <li>To diagnose crashes, ad-load failures, and performance issues.</li>
            <li>To analyze retention, progression, economy balance, and feature usage.</li>
            <li>To serve advertising, measure ad performance, attribute installs to ad campaigns, and prevent ad fraud.</li>
            <li>To deliver push notifications you have opted into.</li>
            <li>To process in-app purchases via the relevant platform store.</li>
            <li>To respond to your messages and to legal or platform requests.</li>
            <li>To comply with our legal obligations and enforce our Terms of Service.</li>
          </ul>
          <p>Legal bases under GDPR are described in §11.</p>
        </section>

        <section>
          <h2>4. How we share information</h2>
          <p>We share data with the following categories of recipients:</p>
          <ul>
            <li><strong>Service providers / processors</strong> &mdash; Firebase (Google), AppsFlyer, Unity LevelPlay (IronSource), and the ad networks listed in §5, acting on our instructions.</li>
            <li><strong>Platform providers</strong> &mdash; Google (Play Store, Play Games Services, Play Billing) and Apple (App Store, Game Center, App Store payments) for distribution, sign-in, and purchase processing.</li>
            <li><strong>Authorities</strong> when disclosure is required by law, regulation, or legal process, or to protect rights, security, or service integrity.</li>
          </ul>
          <p>We do <strong>not</strong> sell personal information for money. Some of our advertising and measurement activities may qualify as &quot;sharing&quot; or &quot;sale&quot; under certain US state privacy laws because data is shared with ad partners for cross-context behavioral advertising; see §12 for how to opt out.</p>
        </section>

        <section>
          <h2>5. Third-party services and SDKs</h2>
          <p>The following SDKs are integrated into our games. We list each provider, what data is processed, and a link to that provider&apos;s own privacy policy.</p>

          <h3>5.1 Firebase (Google LLC / Google Ireland Limited)</h3>
          <ul>
            <li><strong>Firebase Analytics</strong> &mdash; usage events, Firebase Installations ID, device info, approximate geolocation.</li>
            <li><strong>Firebase Crashlytics</strong> &mdash; crash stack traces, device state, Crashlytics installation UUID.</li>
            <li><strong>Firebase Firestore</strong> &mdash; cloud saves, player profile, in-game gifts.</li>
            <li><strong>Firebase Authentication</strong> &mdash; pseudonymous user ID used to bind cloud saves to your platform sign-in.</li>
            <li><strong>Firebase Cloud Messaging (FCM)</strong> &mdash; APNs / FCM push tokens, message delivery receipts.</li>
            <li><strong>Firebase Remote Config</strong> &mdash; fetches server-side game balance values; no personal data is sent beyond the Installations ID.</li>
            <li><strong>Firebase App Check</strong> &mdash; device attestation token (Play Integrity / App Attest) to protect backend endpoints; no personal data leaves the device.</li>
          </ul>
          <p>Links: <a href="https://firebase.google.com/support/privacy" rel="noopener noreferrer" target="_blank">Firebase Privacy and Security</a> · <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy Policy</a> · <a href="https://firebase.google.com/docs/crashlytics/data-collection" rel="noopener noreferrer" target="_blank">Crashlytics Data Collection</a></p>

          <h3>5.2 AppsFlyer (AppsFlyer Ltd., Israel)</h3>
          <p>We use AppsFlyer for mobile measurement and install attribution.</p>
          <ul>
            <li>Apple IDFA (iOS, if ATT permission granted) or Google Advertising ID (Android).</li>
            <li>Install referrer (Android) or SKAdNetwork postback copy (iOS).</li>
            <li>IP address, used in transit to derive country and detect fraud.</li>
            <li>Device model, OS version, app version, language, time zone.</li>
            <li>In-app events you trigger (purchases, ad views, level completions) for measurement.</li>
          </ul>
          <p>AppsFlyer&apos;s iOS Privacy Manifest declares the following tracking domains: <code>app.appsflyer.com</code>, <code>events.appsflyer.com</code>, <code>register.appsflyer.com</code>, <code>sdk-services.appsflyer.com</code>, <code>appsflyer-skadnetwork.com</code>.</p>
          <p>Links: <a href="https://www.appsflyer.com/legal/privacy-policy/" rel="noopener noreferrer" target="_blank">AppsFlyer Privacy Policy</a> · <a href="https://www.appsflyer.com/legal/services-privacy-policy/" rel="noopener noreferrer" target="_blank">AppsFlyer Services Privacy Policy</a> · <a href="https://www.appsflyer.com/legal/opt-out/" rel="noopener noreferrer" target="_blank">AppsFlyer Opt-Out</a></p>

          <h3>5.3 Unity LevelPlay / IronSource (ironSource Ltd., a Unity company)</h3>
          <p>We use Unity LevelPlay (formerly IronSource Mediation) to orchestrate ad delivery across multiple ad networks. The mediation SDK and the integrated ad networks process advertising identifiers and ad interaction data.</p>
          <p>Mediated ad networks currently include:</p>
          <ul>
            <li><strong>IronSource</strong> (Unity company) &mdash; direct ad serving.</li>
            <li><strong>Unity Ads</strong> &mdash; bidder.</li>
            <li><strong>Google AdMob</strong> &mdash; bidder.</li>
          </ul>
          <p>Data processed by LevelPlay and the mediated networks: IDFA / GAID, ad opportunity context, bid responses, impressions, clicks, video completion, rewarded grants, IP address (in transit), device model, OS version, app version, and approximate geolocation.</p>
          <p>Links: <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" rel="noopener noreferrer" target="_blank">Unity Game Player and App User Privacy Policy</a> · <a href="https://developers.is.com/ironsource-mobile/air/ironsource-ccpa-compliance/" rel="noopener noreferrer" target="_blank">IronSource US State Privacy</a> · <a href="https://support.google.com/admob/answer/6128543" rel="noopener noreferrer" target="_blank">AdMob Policies and Restrictions</a></p>

          <h3>5.4 Google Play Games / Apple Game Center</h3>
          <ul>
            <li>On Android, <strong>Google Play Games Services</strong> handles optional sign-in. We receive Play Games player ID and display name.</li>
            <li>On iOS, <strong>Apple Game Center</strong> handles optional sign-in. We receive a Game Center player ID.</li>
          </ul>
          <p>Links: <a href="https://developer.android.com/games/pgs/savedgames" rel="noopener noreferrer" target="_blank">Google Play Games Saved Games</a> · <a href="https://www.apple.com/legal/privacy/" rel="noopener noreferrer" target="_blank">Apple Privacy</a></p>

          <h3>5.5 In-app purchases</h3>
          <p>Purchases are processed by <strong>Google Play Billing</strong> on Android and by the <strong>Apple App Store</strong> on iOS. We receive a transaction ID and the receipt necessary to verify entitlement, but we do not receive your card number, bank details, or full billing address.</p>
        </section>

        <section>
          <h2>6. Advertising identifiers and ad personalization</h2>

          <h3>6.1 iOS &mdash; App Tracking Transparency (ATT)</h3>
          <p>On iOS, before any third-party SDK accesses your Apple IDFA or links your activity across apps and websites for advertising or measurement, our games show the system <strong>App Tracking Transparency</strong> prompt. If you choose &quot;Ask App Not to Track,&quot; AppsFlyer and our ad partners will not receive your IDFA and will rely on aggregated frameworks such as SKAdNetwork for measurement. You can change your choice at any time in <em>Settings → Privacy &amp; Security → Tracking</em>.</p>

          <h3>6.2 Android &mdash; Advertising ID and Privacy Sandbox</h3>
          <p>On Android, our ad partners may use your Google Advertising ID for personalized advertising and measurement. You can reset or delete the advertising ID and opt out of personalized advertising in <em>Settings → Google → Ads</em> (or <em>Settings → Privacy → Ads</em>, depending on the device). On devices that support Android Privacy Sandbox, the platform may further constrain or replace ID-based targeting.</p>

          <h3>6.3 Consent for personalized advertising (EEA / UK)</h3>
          <p>In the EEA, the UK, and other regions where consent is required, our games display a consent message before personalized advertising or non-essential analytics. You can change your choice at any time through the in-game privacy settings, where available, or by reinstalling the app.</p>
        </section>

        <section>
          <h2>7. Push notifications</h2>
          <p>If you allow notifications, our games use Firebase Cloud Messaging (FCM) to deliver them. FCM stores your APNs token (iOS) or FCM token (Android) so it can route messages to your device. You can disable notifications at any time in the system settings:</p>
          <ul>
            <li>iOS: <em>Settings → Notifications → [game name]</em></li>
            <li>Android: <em>Settings → Apps → [game name] → Notifications</em></li>
          </ul>
        </section>

        <section>
          <h2>8. Cloud saves</h2>
          <p>Cloud saves are <strong>optional</strong>. If you do not sign in, your progress remains only on your device.</p>
          <ul>
            <li><strong>Android:</strong> after you sign into Google Play Games Services, save data is written to Firebase Firestore under a Firebase Authentication user ID linked to your Play Games account. Saved data includes progression, currencies, in-game state, and timestamps.</li>
            <li><strong>iOS:</strong> after you sign into Apple Game Center, save data is written to Firebase Firestore under a Firebase Authentication user ID linked to your Game Center player ID. Saved data is the same as on Android.</li>
          </ul>
          <p>HouneTeam does <strong>not</strong> use Apple CloudKit / iCloud for cloud saves. All cloud-save data is stored in Firebase Firestore (Google Cloud).</p>
        </section>

        <section>
          <h2>9. Data retention</h2>
          <ul>
            <li><strong>Local save data</strong> (including any pending offline-progress rewards for idle-style titles) &mdash; stored on your device until the app is uninstalled or app storage is cleared.</li>
            <li><strong>Cloud saves in Firestore</strong> &mdash; retained while the linked account exists so you can resume later. On request to <a href="mailto:info@houneteam.com">info@houneteam.com</a>, we delete the record within 30 days.</li>
            <li><strong>Firebase Analytics events</strong> &mdash; retained for up to 14 months by default; aggregated, non-identifying reports may be retained longer.</li>
            <li><strong>Firebase Crashlytics</strong> &mdash; crash records retained for up to 90 days.</li>
            <li><strong>FCM push tokens</strong> &mdash; kept until the token is revoked, the app is uninstalled, or the token rotates.</li>
            <li><strong>AppsFlyer attribution data</strong> &mdash; retained according to AppsFlyer&apos;s standard retention (typically up to 24 months for raw data; longer for aggregated reports). See the AppsFlyer policy linked in §5.2.</li>
            <li><strong>Ad-network logs (LevelPlay, IronSource, Unity Ads, AdMob)</strong> &mdash; retained according to each network&apos;s own policy linked in §5.3.</li>
            <li><strong>Email correspondence</strong> &mdash; retained for up to 24 months after the last reply, unless a longer period is required for legal or accounting reasons.</li>
            <li><strong>Purchase receipts</strong> &mdash; retained as long as required by tax and consumer-protection law (typically 7 years in Japan).</li>
          </ul>
        </section>

        <section>
          <h2>10. International transfers and processing locations</h2>
          <p>HouneTeam is based in Japan. Our service providers process data in multiple regions, including the United States, the European Union, Ireland, Israel (AppsFlyer, IronSource), and other jurisdictions. Where data leaves the EEA, UK, or Switzerland, transfers rely on the European Commission&apos;s <strong>Standard Contractual Clauses</strong> (SCCs), the UK&apos;s International Data Transfer Addendum, or another lawful transfer mechanism offered by the relevant provider. Each provider&apos;s privacy policy describes its specific safeguards (see §5).</p>
        </section>

        <section>
          <h2>11. Your rights under GDPR (EEA, UK, Switzerland)</h2>
          <p><strong>Data Controller:</strong> HouneTeam, Japan. Contact: <a href="mailto:info@houneteam.com">info@houneteam.com</a>.</p>
          <p><strong>Legal bases we rely on:</strong></p>
          <ul>
            <li><em>Performance of a contract</em> &mdash; to operate the game you have installed and to process purchases.</li>
            <li><em>Legitimate interests</em> &mdash; to diagnose crashes, prevent fraud, secure our backend, and conduct aggregated analytics that does not materially affect your privacy.</li>
            <li><em>Consent</em> &mdash; for personalized advertising, attribution involving IDFA / GAID, non-essential analytics, and push notifications. You can withdraw consent at any time through the in-game settings or the device controls described in §6 and §7.</li>
            <li><em>Legal obligation</em> &mdash; to retain purchase and tax records and to respond to lawful authority requests.</li>
          </ul>
          <p><strong>Your rights:</strong> access, rectification, erasure, restriction, portability, and objection. You also have the right to lodge a complaint with your local supervisory authority in the EU or with the UK Information Commissioner&apos;s Office (ICO).</p>
          <p>To exercise any right, email <a href="mailto:info@houneteam.com">info@houneteam.com</a> from the address associated with your request. We respond within 30 days. If you are in the EEA and need an EU representative under Article 27 GDPR, contact us and we will share current representative details where one is appointed.</p>
        </section>

        <section>
          <h2>12. Your rights under California (CCPA / CPRA) and other US state laws</h2>
          <p>If you are a California resident, you have rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act. Comparable rights exist for residents of Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and other US states with comprehensive privacy laws.</p>
          <p><strong>Categories of personal information we may collect, by Cal. Civ. Code §1798.140(v):</strong></p>
          <ul>
            <li><strong>Identifiers</strong> &mdash; IDFA, GAID, Firebase Installations ID, IP address, Play Games / Game Center player ID, Firebase Auth user ID, email address (if you contact us).</li>
            <li><strong>Commercial information</strong> &mdash; in-app purchase records (product, timestamp, transaction ID).</li>
            <li><strong>Internet or other electronic network activity</strong> &mdash; gameplay events, ad interactions, in-app interactions.</li>
            <li><strong>Geolocation</strong> &mdash; approximate (city / country level) derived from IP address. We do not collect precise geolocation.</li>
            <li><strong>Inferences</strong> &mdash; segments and audiences derived from gameplay events for analytics and advertising.</li>
          </ul>
          <p>We do not knowingly collect sensitive personal information as defined in §1798.140(ae) (such as government identifiers, precise geolocation, biometric or health data, or the contents of mail / email / text messages not directed to us).</p>
          <p><strong>&quot;Sale&quot; / &quot;Sharing&quot;:</strong> we do not sell personal information for money. We may &quot;share&quot; personal information with ad partners for cross-context behavioral advertising as that term is defined under CCPA. To opt out of this sharing, use the in-game privacy settings where available, or contact <a href="mailto:info@houneteam.com">info@houneteam.com</a>. On iOS, choosing &quot;Ask App Not to Track&quot; in the ATT prompt also opts you out for that device.</p>
          <p><strong>Rights:</strong> to know, to delete, to correct, to limit use of sensitive personal information (where applicable), to opt out of sale / sharing, and to non-discrimination. To exercise a right, email <a href="mailto:info@houneteam.com">info@houneteam.com</a>. We will respond within 45 days.</p>
        </section>

        <section>
          <h2>13. Children&apos;s privacy</h2>
          <p>Our games are not directed to children under 13 (or under 16 where applicable, such as in parts of the EEA). We do not knowingly collect personal information from children. If you believe a child has provided personal information through our games, please contact <a href="mailto:info@houneteam.com">info@houneteam.com</a> and we will review and, where appropriate, delete the information.</p>
        </section>

        <section>
          <h2>14. Security</h2>
          <p>We take reasonable technical and organizational measures to protect data, including HTTPS / TLS in transit, Firebase Security Rules for Firestore, and Firebase App Check for backend abuse prevention. No method of storage or transmission is completely secure; we encourage you to keep your device, operating system, and game up to date.</p>
        </section>

        <section>
          <h2>15. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy. The effective date at the top of this page reflects the latest version. Material changes will be communicated through the game, the store listing, or another appropriate channel before the change takes effect, where required.</p>
        </section>

        <section id="data-deletion">
          <h2>16. User data deletion</h2>
          <p>You can ask us to delete the data associated with your game account at any time. This section explains how to request deletion, what gets removed, and what stays.</p>

          <h3>16.1 How to request deletion</h3>
          <p>Email <a href="mailto:info@houneteam.com">info@houneteam.com</a> with the subject line <strong>Data deletion request</strong> and include:</p>
          <ul>
            <li>The game name as it appears on the store.</li>
            <li>Your platform (Android or iOS).</li>
            <li>Your sign-in identifier where available &mdash; <strong>Google Play Games</strong> player ID or in-game display name on Android, <strong>Apple Game Center</strong> player ID or display name on iOS.</li>
          </ul>
          <p>If you never signed into Play Games or Game Center, your progress lives only on the device and uninstalling the game removes it.</p>

          <h3>16.2 What we delete</h3>
          <ul>
            <li>Your cloud-save document in <strong>Firebase Firestore</strong> (progression, currencies, in-game state, gift records).</li>
            <li>Your <strong>Firebase Authentication</strong> user ID linked to your Google Play Games or Apple Game Center sign-in.</li>
            <li>The pseudonymous profile we maintain for cloud saves and in-game gifts.</li>
            <li>Email correspondence tied to the deletion request once the request is closed, subject to the retention limits in §9.</li>
          </ul>

          <h3>16.3 What we cannot delete on your behalf</h3>
          <ul>
            <li><strong>Local data on your device</strong> &mdash; uninstall the game to remove it.</li>
            <li><strong>Logs held by third-party processors</strong> (Firebase Analytics, Crashlytics, AppsFlyer, Unity LevelPlay and the mediated ad networks). To exercise rights against those providers directly, use the links in §5.</li>
            <li><strong>Purchase records</strong> retained by Google Play or the Apple App Store, and tax / accounting records we are legally required to keep (see §9).</li>
          </ul>

          <h3>16.4 Timeline</h3>
          <p>We acknowledge requests within 7 days and complete the deletion within 30 days of confirming your identity, unless a longer period is required by law. If we cannot fulfil the request we will tell you why.</p>
        </section>

        <section>
          <h2>17. Contact</h2>
          <p>HouneTeam<br />Japan<br /><a href="mailto:info@houneteam.com">info@houneteam.com</a></p>
        </section>
      </div>
    </LegalLayout>
  )
}
