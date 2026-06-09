import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
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
