import NetworkingHero from '../organisms/networkingHero'
import PeopleCarousel from '../organisms/peopleCarousel'
import NetworkingCommunities from '../organisms/networkingCommunities'
import NetworkingEvents from '../organisms/networkingEvents'
import CtaSection from '../organisms/ctaSection'

export default function NetworkingPage() {
  return (
    <>
      <NetworkingHero />
      <PeopleCarousel />
      <NetworkingCommunities />
      <NetworkingEvents />
      <CtaSection />
    </>
  )
}
