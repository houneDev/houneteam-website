import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | HouneTeam',
  description:
    'HouneTeam is a one-person indie game studio based in Japan, building mobile games with a focus on quality and long-term engagement.',
  alternates: {
    canonical: 'https://houneteam.com/about/',
  },
  openGraph: {
    title: 'About | HouneTeam',
    description:
      'One-person indie studio based in Japan. Building mobile games with quality and long-term engagement in mind.',
    url: 'https://houneteam.com/about/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About | HouneTeam',
    description: 'One-person indie studio based in Japan. Building mobile games.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
