'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

const VALUES = [
  {
    titleKey: 'about.v1.title' as const,
    descKey: 'about.v1.desc' as const,
  },
  {
    titleKey: 'about.v2.title' as const,
    descKey: 'about.v2.desc' as const,
  },
  {
    titleKey: 'about.v3.title' as const,
    descKey: 'about.v3.desc' as const,
  },
]

const DO_ITEMS = [
  {
    titleKey: 'aboutpage.do1.title' as const,
    descKey: 'aboutpage.do1.desc' as const,
  },
  {
    titleKey: 'aboutpage.do2.title' as const,
    descKey: 'aboutpage.do2.desc' as const,
  },
  {
    titleKey: 'aboutpage.do3.title' as const,
    descKey: 'aboutpage.do3.desc' as const,
  },
]

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 max-w-[1240px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: ease.out }}
          className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4"
        >
          {t('aboutpage.kicker')}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease: ease.out }}
          className="text-[2.2rem] md:text-[3rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight"
        >
          {t('aboutpage.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease: ease.out }}
          className="mt-4 text-[#8896b8] text-base max-w-md"
        >
          {t('aboutpage.desc')}
        </motion.p>
      </div>

      {/* Story */}
      <div className="max-w-[1240px] mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: ease.out }}
          className="grid md:grid-cols-[1fr_1fr] gap-12 items-start"
        >
          <div>
            <h2 className="text-[#eef2ff] text-xl font-bold mb-6">{t('aboutpage.story.title')}</h2>
            <div className="flex flex-col gap-4">
              <p className="text-[#8896b8] text-sm leading-relaxed">{t('aboutpage.story.p1')}</p>
              <p className="text-[#8896b8] text-sm leading-relaxed">{t('aboutpage.story.p2')}</p>
              <p className="text-[#8896b8] text-sm leading-relaxed">{t('aboutpage.story.p3')}</p>
            </div>
          </div>

          <div className="card-base p-8">
            <h2 className="text-[#eef2ff] text-xl font-bold mb-6">{t('aboutpage.values.title')}</h2>
            <p className="text-[#8896b8] text-sm mb-6">{t('aboutpage.values.desc')}</p>
            <div className="flex flex-col gap-5">
              {VALUES.map((v, i) => (
                <div key={v.titleKey} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[rgba(124,199,255,0.1)] flex items-center justify-center text-[#7cc7ff] text-xs font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[#eef2ff] text-sm font-semibold mb-1">{t(v.titleKey)}</p>
                    <p className="text-[#8896b8] text-sm leading-relaxed">{t(v.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* What We Do */}
      <div className="max-w-[1240px] mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: ease.out }}
        >
          <h2 className="text-[#eef2ff] text-xl font-bold mb-3">{t('aboutpage.do.title')}</h2>
          <p className="text-[#8896b8] text-sm mb-8">{t('aboutpage.do.desc')}</p>
          <div className="grid md:grid-cols-3 gap-5">
            {DO_ITEMS.map((item, i) => (
              <motion.div
                key={item.titleKey}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 + i * 0.07, ease: ease.out }}
                className="card-base p-7"
              >
                <h3 className="text-[#eef2ff] font-semibold text-base mb-3">{t(item.titleKey)}</h3>
                <p className="text-[#8896b8] text-sm leading-relaxed">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-[1240px] mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38, ease: ease.out }}
          className="card-base p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <p className="text-[#7cc7ff] text-xs font-semibold tracking-wider uppercase mb-3">
              {t('aboutpage.cta.kicker')}
            </p>
            <h2 className="text-[#eef2ff] text-2xl font-bold mb-3">{t('aboutpage.cta.title')}</h2>
            <p className="text-[#8896b8] text-sm leading-relaxed max-w-sm">{t('aboutpage.cta.desc')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@houneteam.com" className="btn-primary">
              {t('aboutpage.cta.btn1')}
            </a>
            <Link href="/games" className="btn-outline">
              {t('aboutpage.cta.btn2')}
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
