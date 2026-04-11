import Hero from '@/components/sections/Hero'
import GamesShowcase from '@/components/sections/GamesShowcase'
import AboutPreview from '@/components/sections/AboutPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <GamesShowcase />
      <AboutPreview />
      <ContactCTA />
    </>
  )
}
