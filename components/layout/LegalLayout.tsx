'use client'

import { motion } from 'framer-motion'
import { ease } from '@/lib/utils'

interface LegalLayoutProps {
  kicker: string
  title: string
  desc: string
  effectiveDate: string
  children: React.ReactNode
}

export default function LegalLayout({
  kicker,
  title,
  desc,
  effectiveDate,
  children,
}: LegalLayoutProps) {
  return (
    <div className="pt-28 pb-28 max-w-[820px] mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: ease.out }}
        className="mb-12"
      >
        <p className="text-[#7cc7ff] text-sm font-semibold tracking-wider uppercase mb-4">{kicker}</p>
        <h1 className="text-[2rem] md:text-[2.6rem] font-extrabold text-[#eef2ff] leading-tight tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-[#8896b8] text-sm mb-3">{desc}</p>
        <div className="flex flex-wrap gap-4 text-xs text-[#8896b8] border-t border-[rgba(124,199,255,0.06)] pt-4 mt-4">
          <span>Effective date: {effectiveDate}</span>
          <span>
            Contact:{' '}
            <a href="mailto:info@houneteam.com" className="text-[#7cc7ff] hover:opacity-75 transition-opacity duration-150">
              info@houneteam.com
            </a>
          </span>
          <span>Jurisdiction: Japan</span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: ease.out }}
        className="legal-content"
      >
        {children}
      </motion.div>

      <style jsx global>{`
        .legal-content h2 {
          color: #eef2ff;
          font-size: 1.05rem;
          font-weight: 700;
          margin-top: 2.4rem;
          margin-bottom: 0.75rem;
        }
        .legal-content h3 {
          color: #c7d2ee;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 1.4rem;
          margin-bottom: 0.5rem;
        }
        .legal-content p {
          color: #8896b8;
          font-size: 0.875rem;
          line-height: 1.75;
          margin-bottom: 0.75rem;
        }
        .legal-content ul {
          color: #8896b8;
          font-size: 0.875rem;
          line-height: 1.75;
          margin-bottom: 0.75rem;
          padding-left: 1.25rem;
          list-style-type: disc;
        }
        .legal-content li {
          margin-bottom: 0.35rem;
        }
        .legal-content strong {
          color: #c7d2ee;
          font-weight: 600;
        }
        .legal-content a {
          color: #7cc7ff;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-content a:hover {
          opacity: 0.75;
        }
        .legal-content section {
          border-top: 1px solid rgba(124, 199, 255, 0.06);
          padding-top: 1.5rem;
        }
        .legal-content section:first-child {
          border-top: none;
          padding-top: 0;
        }
      `}</style>
    </div>
  )
}
