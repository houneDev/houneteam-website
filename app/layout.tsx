import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'HouneTeam — Indie Game Studio',
  description:
    'HouneTeam is a small indie game studio based in Japan. We make idle games for Android. One published title: Lumo Idle Park.',
  metadataBase: new URL('https://houneteam.com'),
  openGraph: {
    title: 'HouneTeam — Indie Game Studio',
    description: 'Small indie game studio based in Japan. Idle games for Android.',
    siteName: 'HouneTeam',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/game/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <I18nProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  )
}
