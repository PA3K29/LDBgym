import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import GalleryPage from './pages/GalleryPage'
import ProductsPage from './pages/ProductsPage'
import TrainersPage from './pages/TrainersPage'
import ContactPage from './pages/ContactPage'
import GDPR from './pages/GDPR'
import Cookies from './pages/Cookies'
import Rules from './pages/Rules'

const metaMap = {
  '/': {
    title: 'LDB GYM | Moderné fitness centrum',
    description:
      'LDB GYM je moderné fitness centrum s profesionálnymi trénermi, kvalitným vybavením a jasným cenníkom.',
    canonical: 'https://www.ldbgym.sk/',
  },
  '/gdpr': {
    title: 'GDPR | LDB GYM',
    description: 'Informácie o ochrane osobných údajov pre návštevníkov webu a klientov fitness centra LDB GYM.',
    canonical: 'https://www.ldbgym.sk/gdpr',
  },
  '/cookies': {
    title: 'Cookies | LDB GYM',
    description: 'Prehľad používania cookies na webe LDB GYM a možnosti správy súhlasu.',
    canonical: 'https://www.ldbgym.sk/cookies',
  },
  '/rules': {
    title: 'Prevádzkový poriadok | LDB GYM',
    description: 'Pravidlá bezpečného a zodpovedného používania priestorov a služieb LDB GYM.',
    canonical: 'https://www.ldbgym.sk/rules',
  },
  '/cennik': {
    title: 'Cenník | LDB GYM',
    description: 'Aktuálny cenník vstupov a členstiev vo fitness centre LDB GYM v Humennom.',
    canonical: 'https://www.ldbgym.sk/cennik',
  },
  '/galeria': {
    title: 'Galéria | LDB GYM',
    description: 'Pozri si priestory, zóny a vybavenie fitness centra LDB GYM.',
    canonical: 'https://www.ldbgym.sk/galeria',
  },
  '/treneri': {
    title: 'Tréneri | LDB GYM',
    description: 'Spoznaj trénerov LDB GYM a ich zameranie na silu, kondíciu a progres.',
    canonical: 'https://www.ldbgym.sk/treneri',
  },
  '/produkty': {
    title: 'Produkty | LDB GYM',
    description: 'Doplnky výživy a tréningové produkty dostupné v LDB GYM.',
    canonical: 'https://www.ldbgym.sk/produkty',
  },
  '/kontakt': {
    title: 'Kontakt | LDB GYM',
    description: 'Kontakt, mapa, otváracie hodiny a prevádzkové údaje LDB GYM v Humennom.',
    canonical: 'https://www.ldbgym.sk/kontakt',
  },
  '/o-nas': {
    title: 'O nás | LDB GYM',
    description: 'Spoznaj priestory, vybavenie, zázemie a filozofiu fitness centra LDB GYM v Humennom.',
    canonical: 'https://www.ldbgym.sk/o-nas',
  },
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const currentMeta = metaMap[location.pathname] ?? metaMap['/']
    document.title = currentMeta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', currentMeta.description)
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', currentMeta.title)
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute('content', currentMeta.description)
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]')
    if (canonicalTag) {
      canonicalTag.setAttribute('href', currentMeta.canonical)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/cennik" element={<PricingPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/produkty" element={<ProductsPage />} />
          <Route path="/treneri" element={<TrainersPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
