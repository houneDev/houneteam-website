'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'
import ContactCTA from '@/components/sections/ContactCTA'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.houneteam.lumoidlepark'
const PLAY_DEV_URL = 'https://play.google.com/store/apps/developer?id=HouneTeam'

const FEATURE_KEYS = [
  'game.lumo.f1',
  'game.lumo.f2',
  'game.lumo.f3',
  'game.lumo.f4',
] as const

function GooglePlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M48 59.49v393a4.33 4.33 0 007.35 3.05L260 256 55.35 56.44A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06L292 256 345.8 174zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338 292 256 84.08 472.39zM464 236.15l-69.26-38.7L343.6 256l51.14 58.55L464 275.85a23.83 23.83 0 000-39.7z"/>
    </svg>
  )
}

export default function GamesPage() {
  const { t } = useI18n()

  return (
    <>
      {/* Page header */}
      <div className="pt-28 pb-16 max-w-[1240px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: ease.out }}
          className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4"
        >
          {t('gamespage.kicker')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: ease.out }}
          className="text-[2.2rem] md:text-[3rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight"
        >
          {t('gamespage.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: ease.out }}
          className="mt-4 text-[#8896b8] text-base max-w-md"
        >
          {t('gamespage.desc')}
        </motion.p>
      </div>

      {/* Lumo Idle Park — full detail card */}
      <div className="max-w-[1240px] mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: ease.out }}
          className="card-base overflow-hidden"
        >
          {/* Hero area */}
          <div className="relative p-8 md:p-12 border-b border-[rgba(124,199,255,0.06)] overflow-hidden">
            {/* Glow centered behind icon — same math as GamesShowcase */}
            <div
              className="hidden md:block absolute pointer-events-none"
              style={{ top: '-60px', left: '-60px', width: 360, height: 360, zIndex: 0 }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/game/glow.png"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.22, mixBlendMode: 'screen' }}
              />
            </div>

            {/* Conveyor — decorative, right side */}
            <Image
              src="/game/conv.png"
              alt="" width={260} height={144}
              className="hidden md:block absolute bottom-4 right-6 no-drag pointer-events-none"
              style={{ opacity: 0.18, zIndex: 0 }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
              {/* Icon — clean */}
              <div className="relative flex-shrink-0 w-[120px] h-[120px]">
                <Image
                  src="/game/game-icon.png"
                  alt="Lumo Idle Park"
                  fill
                  className="rounded-3xl object-cover shadow-xl"
                  priority
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-[#eef2ff] text-2xl md:text-3xl font-bold">Lumo Idle Park</h2>
                  <span className="px-2.5 py-1 rounded-full bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.2)] text-[#4ade80] text-xs font-semibold">
                    Live
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Idle', 'Casual', 'Android', 'Free to Play'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[rgba(124,199,255,0.06)] border border-[rgba(124,199,255,0.1)] text-[#8896b8] text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[#8896b8] text-sm md:text-base leading-relaxed max-w-[600px]">
                  {t('game.lumo.desc')}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <GooglePlayIcon />
                    {t('game.btn.play')}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="p-8 md:p-12">
            <h3 className="text-[#eef2ff] font-semibold text-lg mb-6">Features</h3>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {FEATURE_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(124,199,255,0.12)] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5 3.5-4" stroke="#7cc7ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#8896b8] text-sm leading-snug">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Coming Soon */}
      <div className="max-w-[1240px] mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: ease.out }}
          className="card-base p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h3 className="text-[#eef2ff] font-semibold text-lg mb-2">{t('gamespage.soon.title')}</h3>
            <p className="text-[#8896b8] text-sm max-w-sm">{t('gamespage.soon.desc')}</p>
          </div>
          <a
            href={PLAY_DEV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-shrink-0"
          >
            <GooglePlayIcon size={16} />
            {t('gamespage.soon.btn')}
          </a>
        </motion.div>
      </div>

      <ContactCTA />
    </>
  )
}
