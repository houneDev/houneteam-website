'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ease } from '@/lib/utils'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 py-2.5 border-b border-[rgba(124,199,255,0.06)] last:border-0">
      <span className="w-36 flex-shrink-0 text-xs font-semibold text-[#c7d2ee]">{label}</span>
      <span className="text-xs text-[#8896b8] leading-relaxed">{children}</span>
    </div>
  )
}

function CreditBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-base p-5 mb-4">
      {children}
    </div>
  )
}

export default function LumoCreditsPage() {
  return (
    <div className="pt-28 pb-28 max-w-[820px] mx-auto px-6">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: ease.out }}
        className="mb-8"
      >
        <Link
          href="/games"
          className="inline-flex items-center gap-1.5 text-xs text-[#8896b8] hover:text-[#7cc7ff] transition-colors duration-150"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Games
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out }}
        className="mb-12"
      >
        <p className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4">
          Lumo Idle Park
        </p>
        <h1 className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight mb-4">
          Credits
        </h1>
        <p className="text-[#8896b8] text-sm mb-3">
          Credits, attribution notices, and third-party references for Lumo Idle Park.
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-[#8896b8] border-t border-[rgba(124,199,255,0.06)] pt-4 mt-4">
          <span>Developer: <strong className="text-[#c7d2ee]">HouneTeam</strong></span>
          <span>App ID: <strong className="text-[#c7d2ee]">com.houneteam.lumoidlepark</strong></span>
          <span>
            Contact:{' '}
            <a href="mailto:info@houneteam.com" className="text-[#7cc7ff] hover:opacity-75 transition-opacity duration-150">
              info@houneteam.com
            </a>
          </span>
          <span>Last updated: <strong className="text-[#c7d2ee]">March 25, 2026</strong></span>
        </div>
      </motion.div>

      {/* Sections */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: ease.out }}
        className="space-y-10"
      >
        {/* 1. Music */}
        <section>
          <h2 className="text-[#eef2ff] font-bold text-base mb-1">1. Music</h2>
          <p className="text-[#8896b8] text-sm mb-4">
            Music for the game was created using Suno, an AI music generation platform.
          </p>
          <CreditBlock>
            <Row label="Tool">Suno</Row>
            <Row label="Source">
              <a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                suno.com
              </a>
            </Row>
            <Row label="License">Commercial use license (Pro subscription)</Row>
            <Row label="License details">
              <a href="https://suno.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                suno.com/terms-of-service
              </a>
            </Row>
          </CreditBlock>
        </section>

        {/* 2. Icons and graphics */}
        <section>
          <h2 className="text-[#eef2ff] font-bold text-base mb-1">2. Icons and graphics</h2>
          <p className="text-[#8896b8] text-sm mb-4">
            The game uses icon assets created by third-party authors and sourced from Flaticon.
            All icons are used under the{' '}
            <a href="https://www.flaticon.com/license" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
              Flaticon License
            </a>.
          </p>

          <h3 className="text-[#c7d2ee] text-sm font-semibold mb-2">App icon</h3>
          <CreditBlock>
            <Row label="Author">
              <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                Freepik
              </a>
            </Row>
            <Row label="Source">
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                www.flaticon.com
              </a>
            </Row>
          </CreditBlock>

          <h3 className="text-[#c7d2ee] text-sm font-semibold mb-2 mt-4">Loading arrow icon</h3>
          <CreditBlock>
            <Row label="Author">
              <a href="https://www.flaticon.com/authors/laisa-islam-ani" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                Laisa Islam Ani
              </a>
            </Row>
            <Row label="Source">
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                www.flaticon.com
              </a>
            </Row>
          </CreditBlock>

          <h3 className="text-[#c7d2ee] text-sm font-semibold mb-2 mt-4">Video camera icon</h3>
          <CreditBlock>
            <Row label="Author">
              <a href="https://www.flaticon.com/authors/maxim-basinski-premium" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                Maxim Basinski Premium
              </a>
            </Row>
            <Row label="Source">
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                www.flaticon.com
              </a>
            </Row>
          </CreditBlock>

          <h3 className="text-[#c7d2ee] text-sm font-semibold mb-2 mt-4">Recycling symbol icon</h3>
          <CreditBlock>
            <Row label="Author">
              <a href="https://www.flaticon.com/authors/creative-stall-premium" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                Creative Stall Premium
              </a>
            </Row>
            <Row label="Source">
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                www.flaticon.com
              </a>
            </Row>
          </CreditBlock>

          <h3 className="text-[#c7d2ee] text-sm font-semibold mb-2 mt-4">Backpack icon</h3>
          <CreditBlock>
            <Row label="Author">
              <a href="https://www.flaticon.com/authors/syahrul-hidayatullah" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                Syahrul Hidayatullah
              </a>
            </Row>
            <Row label="Source">
              <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
                www.flaticon.com
              </a>
            </Row>
            <Row label="License">Flaticon License (free for personal and commercial use with attribution)</Row>
          </CreditBlock>
        </section>

        {/* 3. Third-party services */}
        <section>
          <h2 className="text-[#eef2ff] font-bold text-base mb-1">3. Third-party services</h2>
          <p className="text-[#8896b8] text-sm mb-4">
            The game may integrate or later integrate third-party tools and platform services for
            analytics, ads, save synchronization, crash handling, and store distribution.
          </p>
          <ul className="space-y-2">
            {[
              { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
              { label: 'Firebase Privacy and Security', href: 'https://firebase.google.com/support/privacy' },
              { label: 'Firebase Crashlytics Data Collection', href: 'https://firebase.google.com/docs/crashlytics/data-collection' },
              { label: 'Google AdMob policies', href: 'https://support.google.com/admob/answer/6128543' },
              { label: 'Google Play Games Services Saved Games', href: 'https://developer.android.com/games/pgs/savedgames' },
              { label: 'Apple CloudKit', href: 'https://developer.apple.com/icloud/cloudkit/' },
            ].map(({ label, href }) => (
              <li key={href} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[rgba(124,199,255,0.4)] flex-shrink-0" />
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Additional notices */}
        <section className="border-t border-[rgba(124,199,255,0.06)] pt-8">
          <h2 className="text-[#eef2ff] font-bold text-base mb-4">4. Additional notices</h2>
          <p className="text-[#8896b8] text-sm leading-relaxed mb-3">
            Unless otherwise stated, all original game content, branding, text, UI, and original
            assets for Lumo Idle Park are owned by HouneTeam.
          </p>
          <p className="text-[#8896b8] text-sm leading-relaxed mb-3">
            Third-party names, brands, services, and platforms mentioned on this page remain the
            property of their respective owners.
          </p>
          <p className="text-[#8896b8] text-sm leading-relaxed">
            If you are the owner of any third-party material referenced on this page and believe a
            credit or attribution should be corrected, please contact{' '}
            <a href="mailto:info@houneteam.com" className="text-[#7cc7ff] underline underline-offset-2 hover:opacity-75 transition-opacity duration-150">
              info@houneteam.com
            </a>.
          </p>
        </section>
      </motion.div>
    </div>
  )
}
