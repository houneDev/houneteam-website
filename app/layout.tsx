import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'HouneTeam | Indie Game Studio',
  description:
    'HouneTeam is a small indie game studio based in Japan. We build mobile games: idle, casual, and tycoon. Published title: Lumo Idle Park on Android.',
  metadataBase: new URL('https://houneteam.com'),
  alternates: {
    canonical: 'https://houneteam.com/',
  },
  openGraph: {
    title: 'HouneTeam | Indie Game Studio',
    description:
      'Small indie game studio based in Japan. We build mobile games: idle, casual, and tycoon.',
    siteName: 'HouneTeam',
    url: 'https://houneteam.com/',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'HouneTeam | Indie Game Studio',
    description:
      'Small indie game studio based in Japan. We build mobile games: idle, casual, and tycoon.',
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
