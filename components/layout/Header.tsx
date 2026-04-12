'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/utils'

const LANG_LABELS: Record<string, string> = {
  en: 'EN',
  ja: 'JA',
  ru: 'RU',
}

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/games', label: t('nav.games') },
    { href: '/about', label: t('nav.about') },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b',
        scrolled
          ? 'bg-[rgba(6,11,24,0.92)] border-[rgba(124,199,255,0.06)]'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#eef2ff] font-bold text-lg tracking-tight hover:opacity-80 transition-opacity duration-150"
        >
          Houne<span className="text-[#7cc7ff]">Team</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150',
                pathname === href
                  ? 'text-[#eef2ff] bg-[rgba(124,199,255,0.08)]'
                  : 'text-[#8896b8] hover:text-[#eef2ff]'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Lang Picker */}
          <div ref={langRef} className="relative hidden md:block">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#8896b8] border border-[rgba(124,199,255,0.12)] hover:border-[rgba(124,199,255,0.28)] hover:text-[#eef2ff] transition-all duration-150"
            >
              {LANG_LABELS[lang]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: ease.out }}
                  className="absolute right-0 top-full mt-2 bg-[#0c1526] border border-[rgba(124,199,255,0.1)] rounded-xl overflow-hidden shadow-xl"
                >
                  {(['en', 'ja', 'ru'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false) }}
                      className={cn(
                        'block w-full px-5 py-2.5 text-xs font-semibold text-left transition-colors duration-100',
                        lang === l
                          ? 'text-[#7cc7ff] bg-[rgba(124,199,255,0.06)]'
                          : 'text-[#8896b8] hover:text-[#eef2ff] hover:bg-[rgba(124,199,255,0.04)]'
                      )}
                    >
                      {LANG_LABELS[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Work With Us CTA */}
          <a
            href="mailto:info@houneteam.com"
            className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
          >
            {t('nav.contact')}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'block w-5 h-0.5 bg-[#eef2ff] transition-all duration-200 origin-center',
                menuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-[#eef2ff] transition-all duration-200',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-[#eef2ff] transition-all duration-200 origin-center',
                menuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: ease.out }}
            className="md:hidden overflow-hidden bg-[rgba(6,11,24,0.97)] backdrop-blur-md border-b border-[rgba(124,199,255,0.06)]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-100',
                    pathname === href
                      ? 'text-[#eef2ff] bg-[rgba(124,199,255,0.08)]'
                      : 'text-[#8896b8] hover:text-[#eef2ff]'
                  )}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-2">
                {(['en', 'ja', 'ru'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-100',
                      lang === l
                        ? 'text-[#7cc7ff] border-[rgba(124,199,255,0.35)] bg-[rgba(124,199,255,0.08)]'
                        : 'text-[#8896b8] border-[rgba(124,199,255,0.12)] hover:text-[#eef2ff]'
                    )}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
              <a
                href="mailto:info@houneteam.com"
                className="mt-3 btn-primary text-sm text-center justify-center"
              >
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
