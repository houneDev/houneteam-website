'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 18 },
  show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5, ease: ease.out } },
})

// Floating collectibles — orbit the game card (desktop only)
const collectibles = [
  { src: '/game/lumo-coin.png', className: 'absolute bottom-[46%] right-[22%] w-[50px] animate-float-a', delay: '-3.0s' },
  { src: '/game/gem.png',       className: 'absolute bottom-[52%] right-[11%] w-[44px] animate-float-b', delay: '-0.6s' },
  { src: '/game/gold.png',      className: 'absolute bottom-[40%] right-[32%] w-[42px] animate-float-a', delay: '-2.1s' },
]

export default function Hero() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Soft CSS glow — right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 78% 45%, rgba(124,199,255,0.07) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Right composition — desktop only */}
      <div
        className="absolute inset-y-0 right-0 w-[52%] pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        {/* Floating collectibles */}
        {collectibles.map((c, i) => (
          <Image
            key={i}
            src={c.src}
            alt=""
            width={120}
            height={120}
            className={`${c.className} no-drag`}
            style={{ animationDelay: c.delay }}
            draggable={false}
          />
        ))}

        {/* Game icon card */}
        <div
          className="absolute bottom-[22%] right-[14%] bg-[rgba(15,26,46,0.88)] border border-[rgba(124,199,255,0.14)] backdrop-blur-md rounded-2xl p-3 flex items-center gap-3 shadow-xl"
          style={{ minWidth: 210 }}
        >
          <Image src="/game/game-icon.png" alt="Lumo Idle Park" width={48} height={48} className="rounded-xl flex-shrink-0" />
          <div>
            <p className="text-[#eef2ff] text-sm font-semibold leading-tight">Lumo Idle Park</p>
            <p className="text-[#7cc7ff] text-xs mt-0.5">{t('hero.showcase.sub')}</p>
            <div className="flex items-center gap-1 mt-1">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="10" height="10" viewBox="0 0 10 10" fill="#fbbf24">
                  <polygon points="5,1 6.2,3.8 9.5,4.1 7.1,6.2 7.8,9.5 5,7.9 2.2,9.5 2.9,6.2 0.5,4.1 3.8,3.8" />
                </svg>
              ))}
              <span className="text-[#8896b8] text-[10px] ml-1">5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Palm trees — full width on mobile, right-anchored on desktop */}
      <div className="absolute inset-y-0 right-0 w-full pointer-events-none" aria-hidden="true">
        {/* Tallest palm — far right edge, behind card */}
        <Image
          src="/game/palm3.png" alt="" width={320} height={500}
          className="absolute bottom-0 right-[0%] md:right-[1%] w-[150px] md:w-[240px] animate-sway origin-bottom"
          style={{ animationDelay: '0s' }} priority draggable={false}
        />
        {/* Mid palm — center on mobile, mid-right on desktop */}
        <Image
          src="/game/palm1.png" alt="" width={240} height={380}
          className="absolute bottom-0 left-[32%] md:left-auto md:right-[30%] w-[105px] md:w-[180px] animate-sway origin-bottom"
          style={{ animationDelay: '-1.8s' }} priority draggable={false}
        />
        {/* Small palm — left on mobile, deeper background on desktop */}
        <Image
          src="/game/palm2.png" alt="" width={160} height={260}
          className="absolute bottom-0 left-[2%] md:left-auto md:right-[46%] w-[75px] md:w-[120px] animate-sway origin-bottom opacity-50"
          style={{ animationDelay: '-3.2s' }} draggable={false}
        />
      </div>

      {/* Text — left column */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 pt-28 pb-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[520px]">
          <motion.p variants={item(reduced)} className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-5">
            {t('hero.kicker')}
          </motion.p>

          <motion.h1 variants={item(reduced)} className="text-[2.8rem] md:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-[#eef2ff]">
            {t('hero.title1')}
            <br />
            <span className="gradient-text">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p variants={item(reduced)} className="mt-6 text-[#8896b8] text-base md:text-lg leading-relaxed max-w-[420px]">
            {t('hero.desc')}
          </motion.p>

          <motion.div variants={item(reduced)} className="mt-8 flex items-center gap-6">
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

          <motion.div variants={item(reduced)} className="mt-8 flex flex-wrap gap-3">
            <Link href="/games" className="btn-primary">{t('hero.btn.games')}</Link>
            <a href="mailto:info@houneteam.com" className="btn-outline">{t('hero.btn.partner')}</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
