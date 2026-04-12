import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Games | HouneTeam',
  description:
    'Explore games made by HouneTeam. Lumo Idle Park — a mobile idle game available on Android via Google Play.',
  alternates: {
    canonical: 'https://houneteam.com/games/',
  },
  openGraph: {
    title: 'Games | HouneTeam',
    description:
      'Explore games made by HouneTeam. Lumo Idle Park — a mobile idle game available on Android.',
    url: 'https://houneteam.com/games/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Games | HouneTeam',
    description: 'Explore games made by HouneTeam. Lumo Idle Park on Android.',
  },
}

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
