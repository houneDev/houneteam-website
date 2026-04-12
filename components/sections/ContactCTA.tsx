'use client'

import { motion, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

const PLAY_URL = 'https://play.google.com/store/apps/dev?id=9215006691592135818'

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M48 59.49v393a4.33 4.33 0 007.35 3.05L260 256 55.35 56.44A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06L292 256 345.8 174zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338 292 256 84.08 472.39zM464 236.15l-69.26-38.7L343.6 256l51.14 58.55L464 275.85a23.83 23.83 0 000-39.7z"/>
    </svg>
  )
}

export default function ContactCTA() {
  const { t } = useI18n()
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,199,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6">
        <div className="card-base px-8 md:px-16 py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Text */}
          <div className="max-w-[480px]">
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: ease.out }}
              className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4"
            >
              {t('contact.kicker')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: reduced ? 0 : 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06, ease: ease.out }}
              className="text-[1.8rem] md:text-[2.2rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight"
            >
              {t('contact.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.12, ease: ease.out }}
              className="mt-4 text-[#8896b8] text-base leading-relaxed"
            >
              {t('contact.desc')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2, ease: ease.out }}
              className="mt-3"
            >
              <a
                href="mailto:info@houneteam.com"
                className="text-[#7cc7ff] text-sm hover:opacity-75 transition-opacity duration-150"
              >
                info@houneteam.com
              </a>
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease: ease.out }}
            className="flex flex-wrap gap-3 md:flex-col md:items-stretch md:min-w-[220px]"
          >
            <a
              href="mailto:info@houneteam.com"
              className="btn-primary justify-center"
            >
              {t('contact.btn.touch')}
            </a>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center"
            >
              <GooglePlayIcon />
              {t('contact.btn.play')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
