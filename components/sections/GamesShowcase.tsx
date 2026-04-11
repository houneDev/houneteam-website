'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.houneteam.lumoidlepark'

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M48 59.49v393a4.33 4.33 0 007.35 3.05L260 256 55.35 56.44A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06L292 256 345.8 174zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338 292 256 84.08 472.39zM464 236.15l-69.26-38.7L343.6 256l51.14 58.55L464 275.85a23.83 23.83 0 000-39.7z"/>
    </svg>
  )
}

const FEATURES_KEYS = [
  'game.lumo.f1',
  'game.lumo.f2',
  'game.lumo.f3',
  'game.lumo.f4',
] as const

export default function GamesShowcase() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: ease.out }}
          className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4"
        >
          {t('games.kicker')}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: reduced ? 0 : 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06, ease: ease.out }}
          className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight mb-3"
        >
          {t('games.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12, ease: ease.out }}
          className="text-[#8896b8] text-base max-w-md"
        >
          {t('games.desc')}
        </motion.p>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 mt-14">
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18, ease: ease.out }}
          className="relative card-base p-8 md:p-10"
        >
          <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            {/* Icon — no floating items on mobile */}
            <div className="relative flex-shrink-0 self-start">
              <div className="relative w-[90px] h-[90px] md:w-[120px] md:h-[120px]">
                <Image
                  src="/game/game-icon.png"
                  alt="Lumo Idle Park icon"
                  fill
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
              {/* Floating ambient items — desktop only */}
              <Image
                src="/game/gem-pile.png"
                alt=""
                width={56}
                height={56}
                className="hidden md:block absolute -bottom-4 -right-6 animate-float-b no-drag"
                style={{ animationDelay: '-1.2s' }}
                aria-hidden="true"
              />
              <Image
                src="/game/fruit3.png"
                alt=""
                width={36}
                height={36}
                className="hidden md:block absolute -top-4 -right-3 animate-float-a no-drag"
                style={{ animationDelay: '-2.4s' }}
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-[#eef2ff] text-xl md:text-2xl font-bold">Lumo Idle Park</h3>
                <span className="px-2.5 py-1 rounded-full bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.2)] text-[#4ade80] text-xs font-semibold">
                  Live
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[rgba(124,199,255,0.07)] border border-[rgba(124,199,255,0.12)] text-[#8896b8] text-xs">
                  Android
                </span>
              </div>

              <p className="text-[#8896b8] text-sm md:text-base leading-relaxed max-w-[560px]">
                {t('game.lumo.desc')}
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {FEATURES_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-2.5">
                    <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[rgba(124,199,255,0.12)] flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2 3-3" stroke="#7cc7ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[#8896b8] text-sm leading-snug">{t(key)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  <GooglePlayIcon />
                  {t('game.btn.play')}
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
