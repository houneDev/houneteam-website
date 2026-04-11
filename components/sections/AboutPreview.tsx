'use client'

import Link from 'next/link'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

const values = [
  {
    titleKey: 'about.v1.title' as const,
    descKey: 'about.v1.desc' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7cc7ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    titleKey: 'about.v2.title' as const,
    descKey: 'about.v2.desc' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: 'purple' as const,
  },
  {
    titleKey: 'about.v3.title' as const,
    descKey: 'about.v3.desc' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    accent: 'green' as const,
  },
]

const accentColors = {
  undefined: 'rgba(124,199,255,0.08)',
  purple: 'rgba(167,139,250,0.08)',
  green: 'rgba(74,222,128,0.08)',
}

export default function AboutPreview() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header — not centered, offset left */}
        <div className="max-w-[500px]">
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: ease.out }}
            className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            {t('about.kicker')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06, ease: ease.out }}
            className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.12, ease: ease.out }}
            className="mt-4 text-[#8896b8] text-base leading-relaxed"
          >
            {t('about.desc')}
          </motion.p>
        </div>

        {/* Cards — asymmetric stagger, not equal-width grid */}
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const bg = accentColors[v.accent ?? 'undefined' as keyof typeof accentColors] ?? accentColors['undefined']
            return (
              <motion.div
                key={v.titleKey}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.18 + i * 0.07,
                  ease: ease.out,
                }}
                // Slight vertical offset on middle card for asymmetry
                style={{ marginTop: i === 1 ? 24 : 0 }}
                className="card-base p-7 flex flex-col gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: bg }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-[#eef2ff] font-semibold text-base mb-2">{t(v.titleKey)}</h3>
                  <p className="text-[#8896b8] text-sm leading-relaxed">{t(v.descKey)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* About link */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.42, ease: ease.out }}
          className="mt-10"
        >
          <Link href="/about" className="btn-outline">
            {t('about.btn')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
