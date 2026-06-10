import logoImage from '../assets/logo/Logo.png'
import galleryPhoto1 from '../assets/gallery/FOTO1.jpg'
import galleryPhoto2 from '../assets/gallery/FOTO2.jpg'
import galleryPhoto3 from '../assets/gallery/FOTO3.jpg'
import galleryPhoto4 from '../assets/gallery/FOTO4.jpg'
import galleryPhoto5 from '../assets/gallery/FOTO5.jpg'

export const navLinks = [
  { label: 'Domov', href: '/' },
  { label: 'O nás', href: '/o-nas' },
  { label: 'Cenník', href: '/cennik' },
  { label: 'Galéria', href: '/galeria' },
  { label: 'Produkty', href: '/produkty' },
  { label: 'Tréneri', href: '/treneri' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const heroData = {
  badge: 'Premium fitness centrum',
  title: 'LDB GYM',
  subtitle:
    'Moderný priestor pre silu, kondíciu a pravidelný progres v centre Humenného. Trénuj vo výborne vybavenom gyme s dôrazom na výsledky.',
  primaryAction: { label: 'Pozrieť cenník', href: '/cennik' },
  secondaryAction: { label: 'Kontaktovať nás', href: '/kontakt' },
  stats: [
    { value: '7 dní', label: 'v týždni otvorené' },
    { value: '06:00', label: 'štart počas pracovných dní' },
    { value: 'MultiSport', label: 'karty akceptujeme' },
  ],
  image: galleryPhoto1,
  imageAlt: 'Interiér fitness centra LDB GYM',
}

export const featureItems = [
  {
    title: 'Profesionálne vybavenie',
    description: 'Kvalitné stroje a zóna pre silový aj funkčný tréning v čistom a udržiavanom prostredí.',
  },
  {
    title: 'Skúsení tréneri',
    description: 'Osobný prístup, technické vedenie a programy prispôsobené výkonu aj začiatočníkom.',
  },
  {
    title: 'Motivujúca atmosféra',
    description: 'Silná komunita, jasné pravidlá a prostredie, v ktorom sa dá sústrediť na tréning.',
  },
]

export const gymDescription = {
  title: 'Sme nové prémiové fitness centrum v Humennom na ploche 400 m2.',
  paragraphs: [
    'Pri realizácii sme dbali na každý detail. Vstup je riešený efektívne cez turniket pomocou členskej karty, čo eliminuje čakanie na recepcii.',
    'Skrinky fungujú na báze členskej karty, čím zaručujeme bezpečnosť osobných vecí klienta. Dôraz sme dali aj na kvalitu osvetlenia, ozvučenia a vzduchotechniky.',
    'Nájdeš u nás najmodernejšie kardio stroje a kvalitné tréningové vybavenie značky SportsArt, ktoré svojím množstvom zabezpečuje pohodlný a kvalitný tréning. Klientom je k dispozícii aj funkčná zóna.',
    'V rámci doplnkovej výživy dbáme na kvalitu a ponúkame len produkty, ktoré sme sami odskúšali a za ktorými si stojíme. Spolupracujeme so značkami Nutrendy.',
  ],
}

export const galleryItems = [
  { title: 'Posilňovňa', image: galleryPhoto1, alt: 'Priestor posilňovne LDB GYM' },
  { title: 'Kardio zóna', image: galleryPhoto2, alt: 'Kardio zóna fitness centra LDB GYM' },
  { title: 'Funkčný tréning', image: galleryPhoto3, alt: 'Priestor pre funkčný tréning v LDB GYM' },
  { title: 'Tréningová zóna', image: galleryPhoto4, alt: 'Tréningová zóna vo fitness centre LDB GYM' },
  { title: 'Interiér gymu', image: galleryPhoto5, alt: 'Interiér fitness centra LDB GYM' },
]

export const productsPageData = {
  hero: {
    eyebrow: 'Doplnky a produkty',
    title: 'Produkty',
    subtitle:
      'Výber doplnkov pre výkon, regeneráciu a praktické používanie okolo tréningu. Poradíme ti priamo na recepcii podľa cieľa.',
    backgroundImage: galleryPhoto4,
  },
  categories: [
    { name: 'Proteíny', accent: 'text-red-300' },
    { name: 'Predtréningovky', accent: 'text-white' },
    { name: 'Kreatín', accent: 'text-red-300' },
    { name: 'Aminokyseliny', accent: 'text-white' },
    { name: 'Spaľovače', accent: 'text-red-300' },
    { name: 'Tyčinky a snacky', accent: 'text-white' },
  ],
  products: [
    {
      name: 'Whey Protein',
      category: 'Proteíny',
      tags: ['Naberanie', 'Regenerácia'],
      description: 'Kvalitný srvátkový proteín pre rast svalov a rýchlejšiu regeneráciu po tréningu.',
      featured: true,
    },
    {
      name: 'Kreatín Monohydrát',
      category: 'Kreatín',
      tags: ['Sila', 'Výkon'],
      description: 'Pomáha zvyšovať silu, explozivitu a podporuje pravidelný výkon pri tréningu.',
    },
    {
      name: 'Pre-Workout',
      category: 'Predtréningovky',
      tags: ['Energia', 'Fokus'],
      description: 'Predtréningová podpora pre koncentráciu, energiu a lepší štart tréningovej jednotky.',
    },
    {
      name: 'BCAA 2:1:1',
      category: 'Aminokyseliny',
      tags: ['Regenerácia', 'Ochrana'],
      description: 'Aminokyseliny vhodné pri záťaži, na ochranu svalov a podporu zotavenia.',
    },
  ],
  featuredProduct: {
    name: 'Whey Protein',
    rating: '4.9',
    reviews: '125',
    description:
      'Rýchlo vstrebateľný srvátkový proteín, ktorý pomáha doplniť bielkoviny po tréningu a podporuje rast aj regeneráciu svalovej hmoty.',
    benefits: [
      'Podpora rastu svalov',
      'Rýchla regenerácia',
      'Doplnenie bielkovín',
      'Vhodný po tréningu aj medzi jedlami',
    ],
    forWho: ['Začiatočníci', 'Pokročilí', 'Muži aj ženy'],
    availability: ['Dostupné na recepcii', 'Overené značky', 'Výhodné balenia', 'Pomoc s výberom'],
  },
  goals: [
    'Chcem nabrať svaly',
    'Chcem schudnúť',
    'Chcem lepšiu regeneráciu',
    'Chcem zvýšiť výkon',
  ],
}

export const pricingPlans = [
  {
    name: 'Dospelý',
    description: 'Vstup platí 2 hodiny. Každá začatá hodina navyše je spoplatnená 4 €.',
    items: [
      { label: 'Jednorázový vstup', price: '7 €' },
      { label: '10-vstupová', price: '50 €' },
      { label: '20-vstupová', price: '90 €' },
      { label: 'Mesačná', price: '60 €' },
      { label: '3-mesačná', price: '150 €' },
      { label: '6-mesačná', price: '260 €' },
      { label: 'Ročná', price: '450 €' },
    ],
  },
  {
    name: 'Študent',
    description: 'Vstup platí 2 hodiny. Každá začatá hodina navyše je spoplatnená 3 €.',
    items: [
      { label: 'Jednorázový vstup', price: '6 €' },
      { label: '10-vstupová', price: '40 €' },
      { label: '20-vstupová', price: '70 €' },
      { label: 'Mesačná', price: '50 €' },
      { label: '3-mesačná', price: '130 €' },
      { label: '6-mesačná', price: '210 €' },
      { label: 'Ročná', price: '370 €' },
    ],
    highlighted: true,
  },
]

export const trainers = [
  {
    name: 'Martin L.',
    role: 'Silový tréner',
    bio: 'Špecializácia na budovanie sily, techniku základných cvikov a dlhodobý progres.',
    image: '',
    alt: 'Silový tréner Martin v LDB GYM',
  },
  {
    name: 'Petra K.',
    role: 'Kondičná trénerka',
    bio: 'Pomáha klientom zlepšiť kondíciu, pohybové návyky a konzistentnosť v tréningu.',
    image: '',
    alt: 'Kondičná trénerka Petra v LDB GYM',
  },
]

export const reviews = [
  {
    name: 'Ján',
    quote: 'Skvelé prostredie, kvalitné stroje a tréneri, ktorí naozaj vedia poradiť.',
  },
  {
    name: 'Lucia',
    quote: 'Gym pôsobí profesionálne, čisto a motivuje ma chodiť pravidelne.',
  },
  {
    name: 'Peter',
    quote: 'Výborná atmosféra a jasný cenník. Presne to, čo som hľadal.',
  },
]

export const contactData = {
  logo: {
    src: logoImage,
    alt: 'Logo LDB GYM',
  },
  address: 'OC Avenue, Prízemie/1. podlažie, Štefánikova 6295/16, 066 01 Humenné, Slovensko',
  venueAddress: 'LDB GYM, OC Avenue, Prízemie/1. podlažie, Štefánikova 6295/16, 066 01 Humenné',
  phone: '+421 905 912 254',
  managerPhone: '+421 918 271 277',
  email: 'ldbgym@gmail.com',
  hours: [
    'Pondelok: 06:00 - 21:00',
    'Utorok: 06:00 - 21:00',
    'Streda: 06:00 - 21:00',
    'Štvrtok: 06:00 - 21:00',
    'Piatok: 06:00 - 21:00',
    'Sobota: 08:00 - 20:00',
    'Nedeľa: 08:00 - 20:00',
  ],
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=LDB+GYM%2C+OC+Avenue%2C+Pr%C3%ADzemie%2F1.+podla%C5%BEie%2C+%C5%A0tef%C3%A1nikova+6295%2F16%2C+066+01+Humenn%C3%A9',
  mapEmbedUrl:
    'https://www.google.com/maps?q=LDB+GYM%2C+OC+Avenue%2C+Pr%C3%ADzemie%2F1.+podla%C5%BEie%2C+%C5%A0tef%C3%A1nikova+6295%2F16%2C+066+01+Humenn%C3%A9&z=18&output=embed',
  mapLabel: 'Otvoriť mapu',
  mapAlt: 'Mapa lokality LDB GYM v Humennom',
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ldbgymhumenne',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100094910665345',
    },
  ],
}

export const companyData = {
  operator: 'LDB s.r.o.',
  registeredOffice: '094 31 Remeniny 118',
  ico: '47 142 677',
  icDph: 'SK2023762367',
  managers: 'Ing. Ľuboš Berec, Dušan Berec',
}

export const legalLinks = [
  { label: 'GDPR', href: '/gdpr' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Prevádzkový poriadok', href: '/rules' },
]

export const footerLinks = [
  { label: 'Domov', href: '/' },
  { label: 'Cenník', href: '/cennik' },
  { label: 'Galéria', href: '/galeria' },
  { label: 'Tréneri', href: '/treneri' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const footerContent = {
  description:
    'LDB GYM spája kvalitné vybavenie, funkčný tréning a profesionálny prístup do priestoru, ktorý podporuje reálny progres.',
  privacyNote: 'Informácie o spracúvaní osobných údajov a používaní cookies nájdeš v právnych dokumentoch nižšie.',
  hours: [
    { label: 'Pondelok - Piatok', value: '06:00 - 21:00' },
    { label: 'Sobota - Nedeľa', value: '08:00 - 20:00' },
  ],
}
