'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

// Stagger container for text entry
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.5, ease: ease.out },
  },
})

// Ambient floating assets
const floatingAssets = [
  // Palm trees — spread across full width on mobile, right half on desktop
  {
    src: '/game/palm3.png',
    alt: '',
    className: 'absolute bottom-0 right-[0%] md:right-[6%] w-[150px] md:w-[280px] animate-sway origin-bottom',
    style: { animationDelay: '0s' },
    priority: true,
  },
  {
    src: '/game/palm1.png',
    alt: '',
    className: 'absolute bottom-0 left-[30%] md:left-auto md:right-[28%] w-[110px] md:w-[200px] animate-sway origin-bottom',
    style: { animationDelay: '-1.8s' },
    priority: true,
  },
  {
    src: '/game/palm2.png',
    alt: '',
    className: 'absolute bottom-0 left-[4%] md:left-auto md:right-[42%] w-[80px] md:w-[140px] animate-sway origin-bottom opacity-60',
    style: { animationDelay: '-3.2s' },
    priority: false,
  },
  // Glow blob — desktop only
  {
    src: '/game/glow.png',
    alt: '',
    className: 'hidden md:block absolute top-[10%] right-[8%] w-[520px] opacity-30 pointer-events-none select-none',
    style: {},
    priority: false,
  },
  // Floating collectibles — desktop only
  {
    src: '/game/gem.png',
    alt: '',
    className: 'hidden md:block absolute top-[18%] right-[12%] w-[64px] animate-float-a no-drag',
    style: { animationDelay: '-0.6s' },
    priority: false,
  },
  {
    src: '/game/gold.png',
    alt: '',
    className: 'hidden md:block absolute top-[32%] right-[22%] w-[56px] animate-float-b no-drag',
    style: { animationDelay: '-2.1s' },
    priority: false,
  },
  {
    src: '/game/fruit1.png',
    alt: '',
    className: 'hidden md:block absolute top-[24%] right-[30%] w-[50px] animate-float-a no-drag',
    style: { animationDelay: '-1.4s' },
    priority: false,
  },
  {
    src: '/game/fruit2.png',
    alt: '',
    className: 'hidden md:block absolute top-[52%] right-[10%] w-[46px] animate-float-b no-drag',
    style: { animationDelay: '-0.3s' },
    priority: false,
  },
  {
    src: '/game/lumo-coin.png',
    alt: '',
    className: 'hidden md:block absolute top-[14%] right-[34%] w-[60px] animate-float-a no-drag',
    style: { animationDelay: '-3.0s' },
    priority: false,
  },
]

export default function Hero() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(124,199,255,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Game asset composition — right half */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[52%] pointer-events-none"
        aria-hidden="true"
      >
        {floatingAssets.map((a, i) => (
          <Image
            key={i}
            src={a.src}
            alt={a.alt}
            width={560}
            height={560}
            className={a.className}
            style={a.style}
            priority={a.priority}
            draggable={false}
          />
        ))}

        {/* Game icon card — desktop only */}
        <div
          className="hidden md:flex absolute bottom-[22%] right-[10%] bg-[rgba(15,26,46,0.9)] border border-[rgba(124,199,255,0.12)] backdrop-blur-md rounded-2xl p-3 items-center gap-3 shadow-lg"
          style={{ minWidth: 200 }}
        >
          <Image
            src="/game/game-icon.png"
            alt="Lumo Idle Park"
            width={48}
            height={48}
            className="rounded-xl flex-shrink-0"
          />
          <div>
            <p className="text-[#eef2ff] text-sm font-semibold leading-tight">Lumo Idle Park</p>
            <p className="text-[#7cc7ff] text-xs mt-0.5">{t('hero.showcase.sub')}</p>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#fbbf24">
                  <polygon points="5,1 6.2,3.8 9.5,4.1 7.1,6.2 7.8,9.5 5,7.9 2.2,9.5 2.9,6.2 0.5,4.1 3.8,3.8" />
                </svg>
              ))}
              <span className="text-[#8896b8] text-[10px] ml-1">5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Text content — left */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[540px]"
        >
          {/* Kicker */}
          <motion.p
            variants={item(reduced)}
            className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-5"
          >
            {t('hero.kicker')}
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item(reduced)}
            className="text-[2.8rem] md:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-[#eef2ff]"
          >
            {t('hero.title1')}
            <br />
            <span className="gradient-text">{t('hero.title2')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item(reduced)}
            className="mt-6 text-[#8896b8] text-base md:text-lg leading-relaxed max-w-[440px]"
          >
            {t('hero.desc')}
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={item(reduced)}
            className="mt-8 flex items-center gap-6"
          >
            <div>
              <p className="text-[#eef2ff] font-bold text-xl">1</p>
              <p className="text-[#8896b8] text-xs mt-0.5">{t('hero.stat1.label')}</p>
            </div>
            <div className="w-px h-8 bg-[rgba(124,199,255,0.12)]" />
            <div>
              <p className="text-[#eef2ff] font-bold text-xl">JP</p>
              <p className="text-[#8896b8] text-xs mt-0.5">{t('hero.stat2.label')}</p>
            </div>
            <div className="w-px h-8 bg-[rgba(124,199,255,0.12)]" />
            <div>
              <p className="text-[#eef2ff] font-bold text-xl">Android</p>
              <p className="text-[#8896b8] text-xs mt-0.5">{t('hero.stat3.label')}</p>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item(reduced)}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/games" className="btn-primary">
              {t('hero.btn.games')}
            </Link>
            <a href="mailto:info@houneteam.com" className="btn-outline">
              {t('hero.btn.partner')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
