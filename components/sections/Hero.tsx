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

// Top-right scene — fills empty space, tells the game story (conveyor, timer, box, fruits)
const topScene = [
  { src: '/game/conv.png',       w: 130, h: 72,  cls: 'absolute top-[7%]  right-[10%] opacity-55',                           delay: '' },
  { src: '/game/suna-dokei.png', w: 40,  h: 40,  cls: 'absolute top-[4%]  right-[28%] w-[38px] animate-float-b',             delay: '-2.0s' },
  { src: '/game/box.png',        w: 44,  h: 44,  cls: 'absolute top-[18%] right-[22%] w-[40px] animate-float-a',             delay: '-3.5s' },
  { src: '/game/fruit4.png',     w: 40,  h: 40,  cls: 'absolute top-[13%] right-[6%]  w-[36px] animate-float-b',             delay: '-0.8s' },
  { src: '/game/fruit1.png',     w: 36,  h: 36,  cls: 'absolute top-[24%] right-[34%] w-[32px] animate-float-a opacity-70',  delay: '-1.6s' },
]

// Mid-right scene — orbits the game card (coins, gems, character)
const midScene = [
  { src: '/game/lumo-coin.png', w: 56, h: 56, cls: 'absolute bottom-[52%] right-[20%] w-[50px] animate-float-a', delay: '-3.0s' },
  { src: '/game/gem.png',       w: 48, h: 48, cls: 'absolute bottom-[58%] right-[9%]  w-[44px] animate-float-b', delay: '-0.6s' },
  { src: '/game/gold.png',      w: 44, h: 44, cls: 'absolute bottom-[46%] right-[30%] w-[40px] animate-float-a', delay: '-2.1s' },
  { src: '/game/fruit2.png',    w: 36, h: 36, cls: 'absolute bottom-[38%] right-[11%] w-[34px] animate-float-b', delay: '-1.5s' },
]

export default function Hero() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Atmospheric gradient — right side */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 80% 40%, rgba(124,199,255,0.06) 0%, rgba(167,139,250,0.03) 45%, transparent 70%)',
        }}
      />

      {/* ── LAYER 1: Palm trees (background, behind everything) ── */}
      <div className="absolute inset-y-0 right-0 w-full pointer-events-none" aria-hidden="true">
        {/* Small palm — far left on mobile, background-left on desktop */}
        <Image
          src="/game/palm2.png" alt="" width={160} height={260}
          className="absolute bottom-0 left-[2%] md:left-auto md:right-[46%] w-[70px] md:w-[110px] animate-sway origin-bottom opacity-45"
          style={{ animationDelay: '-3.2s' }} draggable={false}
        />
        {/* Mid palm — center on mobile, center-right on desktop */}
        <Image
          src="/game/palm1.png" alt="" width={240} height={380}
          className="absolute bottom-0 left-[30%] md:left-auto md:right-[28%] w-[100px] md:w-[170px] animate-sway origin-bottom opacity-80"
          style={{ animationDelay: '-1.8s' }} priority draggable={false}
        />
        {/* Tallest palm — right edge, intentionally behind card */}
        <Image
          src="/game/palm3.png" alt="" width={320} height={500}
          className="absolute bottom-0 right-[0%] w-[140px] md:w-[210px] animate-sway origin-bottom"
          style={{ animationDelay: '0s' }} priority draggable={false}
        />
      </div>

      {/* ── LAYER 2: Desktop scene (above palms) ── */}
      <div
        className="absolute inset-y-0 right-0 w-[55%] pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{ zIndex: 2 }}
      >
        {/* Top scene — fills empty top-right area */}
        {topScene.map((el, i) => (
          <Image
            key={`top-${i}`}
            src={el.src}
            alt=""
            width={el.w}
            height={el.h}
            className={`${el.cls} no-drag`}
            style={el.delay ? { animationDelay: el.delay } : {}}
            draggable={false}
          />
        ))}

        {/* Mid scene — floats above game card */}
        {midScene.map((el, i) => (
          <Image
            key={`mid-${i}`}
            src={el.src}
            alt=""
            width={el.w}
            height={el.h}
            className={`${el.cls} no-drag`}
            style={{ animationDelay: el.delay }}
            draggable={false}
          />
        ))}

        {/* Game card — on top of palms, clear z-index */}
        <div
          className="absolute bottom-[24%] right-[13%] bg-[rgba(12,22,42,0.92)] border border-[rgba(124,199,255,0.16)] backdrop-blur-md rounded-2xl p-3.5 flex items-center gap-3 shadow-2xl"
          style={{ minWidth: 215, zIndex: 10 }}
        >
          <Image
            src="/game/game-icon.png"
            alt="Lumo Idle Park"
            width={50}
            height={50}
            className="rounded-xl flex-shrink-0"
          />
          <div>
            <p className="text-[#eef2ff] text-sm font-semibold leading-tight">Lumo Idle Park</p>
            <p className="text-[#7cc7ff] text-xs mt-0.5">{t('hero.showcase.sub')}</p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="px-2 py-0.5 rounded-full bg-[rgba(74,222,128,0.1)] border border-[rgba(74,222,128,0.2)] text-[#4ade80] text-[10px] font-semibold">
                Live
              </span>
              <span className="text-[#8896b8] text-[10px]">Android</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── LAYER 3: Text column ── */}
      <div className="relative w-full max-w-[1240px] mx-auto px-6 pt-28 pb-20" style={{ zIndex: 5 }}>
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[520px]">
          <motion.p
            variants={item(reduced)}
            className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-5"
          >
            {t('hero.kicker')}
          </motion.p>

          <motion.h1
            variants={item(reduced)}
            className="text-[2.8rem] md:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-[#eef2ff]"
          >
            {t('hero.title1')}
            <br />
            <span className="gradient-text">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            variants={item(reduced)}
            className="mt-6 text-[#8896b8] text-base md:text-lg leading-relaxed max-w-[420px]"
          >
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
