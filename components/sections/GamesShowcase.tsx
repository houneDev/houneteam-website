'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

type GameStatus = 'Live' | 'Dev'

type Game = {
  id: string
  name: string
  icon: string
  status: GameStatus
  platform: string
  googlePlayUrl?: string
  appStoreUrl?: string
  descKey: 'game.lumo.desc' | 'game.snow.desc'
  featureKeys: readonly ('game.lumo.f1' | 'game.lumo.f2' | 'game.lumo.f3' | 'game.lumo.f4' | 'game.snow.f1' | 'game.snow.f2' | 'game.snow.f3' | 'game.snow.f4')[]
}

const GAMES: Game[] = [
  {
    id: 'lumo',
    name: 'Lumo Idle Park',
    icon: '/game/game-icon.png',
    status: 'Live',
    platform: 'iOS, Android',
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.houneteam.lumoidlepark',
    appStoreUrl: 'https://apps.apple.com/app/id6762716081',
    descKey: 'game.lumo.desc',
    featureKeys: ['game.lumo.f1', 'game.lumo.f2', 'game.lumo.f3', 'game.lumo.f4'],
  },
  {
    id: 'snow',
    name: 'Lumo Snow Rush',
    icon: '/game/snow-rush-icon.png',
    status: 'Dev',
    platform: 'Android',
    descKey: 'game.snow.desc',
    featureKeys: ['game.snow.f1', 'game.snow.f2', 'game.snow.f3', 'game.snow.f4'],
  },
]

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M48 59.49v393a4.33 4.33 0 007.35 3.05L260 256 55.35 56.44A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06L292 256 345.8 174zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338 292 256 84.08 472.39zM464 236.15l-69.26-38.7L343.6 256l51.14 58.55L464 275.85a23.83 23.83 0 000-39.7z"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
    </svg>
  )
}

export default function GamesShowcase() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeId, setActiveId] = useState(GAMES[0].id)

  const game = GAMES.find((g) => g.id === activeId) ?? GAMES[0]

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

      {/* Game selector — only shown when multiple games exist */}
      {GAMES.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.16, ease: ease.out }}
          className="max-w-[1240px] mx-auto px-6 mt-10 flex gap-3 flex-wrap"
        >
          {GAMES.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveId(g.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-200 ${
                g.id === activeId
                  ? 'bg-[rgba(124,199,255,0.1)] border-[rgba(124,199,255,0.3)] text-[#eef2ff]'
                  : 'bg-transparent border-[rgba(124,199,255,0.08)] text-[#8896b8] hover:border-[rgba(124,199,255,0.18)] hover:text-[#c8d8f0]'
              }`}
            >
              <Image src={g.icon} alt={g.name} width={28} height={28} className="rounded-lg" />
              <span className="text-sm font-medium">{g.name}</span>
            </button>
          ))}
        </motion.div>
      )}

      {/* Featured game card */}
      <div className="max-w-[1240px] mx-auto px-6 mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -12 }}
            transition={{ duration: 0.4, ease: ease.out }}
            className="relative card-base p-8 md:p-10 overflow-hidden"
          >
            {/* Glow centered behind the game icon — desktop only.
                Icon center: padding(40px) + iconSize/2(60px) = 100px from card edge.
                Glow 360px wide: offset = 100 - 180 = -80px → center lands on icon. */}
            <div
              className="hidden md:block absolute pointer-events-none"
              style={{ top: '-80px', left: '-80px', width: 360, height: 360, zIndex: 0 }}
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/game/glow.png"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  opacity: 0.22,
                  mixBlendMode: 'screen',
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col md:grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
              {/* Game icon — clean, no clutter */}
              <div className="relative flex-shrink-0 self-start">
                <div className="relative w-[90px] h-[90px] md:w-[120px] md:h-[120px]">
                  <Image
                    src={game.icon}
                    alt={game.name}
                    fill
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-[#eef2ff] text-xl md:text-2xl font-bold">{game.name}</h3>
                  {game.status === 'Live' ? (
                    <span className="px-2.5 py-1 rounded-full bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.2)] text-[#4ade80] text-xs font-semibold">
                      Live
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.25)] text-[#fbbf24] text-xs font-semibold">
                      {t('game.status.dev')}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-[rgba(124,199,255,0.07)] border border-[rgba(124,199,255,0.12)] text-[#8896b8] text-xs">
                    {game.platform}
                  </span>
                </div>

                <p className="text-[#8896b8] text-sm md:text-base leading-relaxed max-w-[560px]">
                  {t(game.descKey)}
                </p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {game.featureKeys.map((key) => (
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

                <div className="mt-8 flex flex-wrap gap-3">
                  {game.googlePlayUrl && (
                    <a
                      href={game.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex"
                    >
                      <GooglePlayIcon />
                      {t('game.btn.play')}
                    </a>
                  )}
                  {game.appStoreUrl && (
                    <a
                      href={game.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex"
                    >
                      <AppleIcon />
                      {t('game.btn.appstore')}
                    </a>
                  )}
                  {!game.googlePlayUrl && !game.appStoreUrl && (
                    <span className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[rgba(251,191,36,0.08)] border border-[rgba(251,191,36,0.2)] text-[#fbbf24] text-sm font-medium">
                      {t('game.status.dev')}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Conveyor — decorative, right side of card, desktop only */}
            <Image
              src="/game/conv.png"
              alt=""
              width={260}
              height={144}
              className="hidden md:block absolute bottom-6 right-6 no-drag pointer-events-none"
              style={{ opacity: 0.18 }}
              aria-hidden="true"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
