import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Games | HouneTeam',
  description:
    'Explore games made by HouneTeam. Lumo Idle Park — an idle game on iOS and Android. Lumo Snow Rush — an arcade snowboard runner on iOS.',
  alternates: {
    canonical: 'https://houneteam.com/games/',
  },
  openGraph: {
    title: 'Games | HouneTeam',
    description:
      'Explore games made by HouneTeam. Lumo Idle Park on iOS and Android, Lumo Snow Rush on iOS.',
    url: 'https://houneteam.com/games/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Games | HouneTeam',
    description: 'Lumo Idle Park and Lumo Snow Rush by HouneTeam.',
  },
}

export default function GamesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
