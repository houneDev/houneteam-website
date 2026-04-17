import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Credits | Lumo Idle Park',
  description:
    'Credits, attribution notices, and third-party references for Lumo Idle Park by HouneTeam.',
  alternates: {
    canonical: 'https://houneteam.com/games/lumo/credits/',
  },
}

export default function LumoCreditsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
