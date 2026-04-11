'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { ease } from '@/lib/utils'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: ease.out }}
          className="text-[6rem] md:text-[8rem] font-extrabold leading-none gradient-text"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: ease.out }}
          className="text-[#eef2ff] text-2xl font-bold mt-4 mb-3"
        >
          {t('notfound.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14, ease: ease.out }}
          className="text-[#8896b8] text-sm leading-relaxed mb-8"
        >
          {t('notfound.desc')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: ease.out }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link href="/" className="btn-primary">
            {t('notfound.btn1')}
          </Link>
          <Link href="/games" className="btn-outline">
            {t('notfound.btn2')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
