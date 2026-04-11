'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const LANG_LABELS: Record<string, string> = {
  en: 'EN',
  ja: 'JA',
  ru: 'RU',
}

export default function Footer() {
  const { t, lang, setLang } = useI18n()

  return (
    <footer className="border-t border-[rgba(124,199,255,0.06)] mt-32">
      <div className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="text-[#eef2ff] font-bold text-lg tracking-tight">
              Houne<span className="text-[#7cc7ff]">Team</span>
            </Link>
            <p className="text-[#8896b8] text-sm leading-relaxed">
              Small indie game studio based in Japan. Making idle games for Android.
            </p>
            <a
              href="mailto:info@houneteam.com"
              className="text-sm text-[#7cc7ff] hover:opacity-75 transition-opacity duration-150 w-fit"
            >
              info@houneteam.com
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-[#8896b8] uppercase tracking-wider">Studio</span>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-sm text-[#8896b8] hover:text-[#eef2ff] transition-colors duration-150">
                  {t('footer.link.home')}
                </Link>
                <Link href="/games" className="text-sm text-[#8896b8] hover:text-[#eef2ff] transition-colors duration-150">
                  {t('footer.link.games')}
                </Link>
                <Link href="/about" className="text-sm text-[#8896b8] hover:text-[#eef2ff] transition-colors duration-150">
                  {t('footer.link.about')}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-[#8896b8] uppercase tracking-wider">Legal</span>
              <div className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-[#8896b8] hover:text-[#eef2ff] transition-colors duration-150">
                  {t('footer.link.privacy')}
                </Link>
                <Link href="/terms" className="text-sm text-[#8896b8] hover:text-[#eef2ff] transition-colors duration-150">
                  {t('footer.link.terms')}
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-[#8896b8] uppercase tracking-wider">Language</span>
              <div className="flex gap-2">
                {(['en', 'ja', 'ru'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-100',
                      lang === l
                        ? 'text-[#7cc7ff] border-[rgba(124,199,255,0.35)] bg-[rgba(124,199,255,0.08)]'
                        : 'text-[#8896b8] border-[rgba(124,199,255,0.12)] hover:text-[#eef2ff] hover:border-[rgba(124,199,255,0.25)]'
                    )}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(124,199,255,0.05)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-[#8896b8]">
            &copy; {new Date().getFullYear()} HouneTeam. {t('footer.copyright')}
          </p>
          <p className="text-xs text-[#8896b8]">Japan</p>
        </div>
      </div>
    </footer>
  )
}
