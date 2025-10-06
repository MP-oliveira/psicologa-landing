import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Gallery from '../components/sections/Gallery'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

