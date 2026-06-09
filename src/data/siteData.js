export const navLinks = [
  { label: 'Výhody', href: '#features' },
  { label: 'Galéria', href: '#gallery' },
  { label: 'Cenník', href: '#pricing' },
  { label: 'Tréneri', href: '#trainers' },
  { label: 'Recenzie', href: '#reviews' },
]

export const heroData = {
  badge: 'Premium fitness centrum',
  title: 'LDB GYM',
  subtitle:
    'Moderný priestor pre silu, kondíciu a pravidelný progres. Trénuj vo výborne vybavenom gyme s dôrazom na výsledky.',
  primaryAction: { label: 'Pozrieť cenník', href: '#pricing' },
  secondaryAction: { label: 'Kontaktovať nás', href: '#cta' },
  stats: [
    { value: '7 dní', label: 'v týždni otvorené' },
    { value: '100%', label: 'fokus na výkon' },
    { value: '1 miesto', label: 'pre silný tréning' },
  ],
  image: '',
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

export const galleryItems = [
  { title: 'Posilňovňa', image: '', alt: 'Priestor posilňovne LDB GYM' },
  { title: 'Kardio zóna', image: '', alt: 'Kardio zóna fitness centra LDB GYM' },
  { title: 'Funkčný tréning', image: '', alt: 'Priestor pre funkčný tréning v LDB GYM' },
]

export const pricingPlans = [
  {
    name: 'Jednorazový vstup',
    price: '10 €',
    description: 'Flexibilný vstup bez viazanosti.',
    features: ['Celý tréningový priestor', 'Šatne a sprchy', 'Bez rezervácie'],
  },
  {
    name: 'Mesačné členstvo',
    price: '49 €',
    description: 'Najlepší pomer ceny a pravidelného tréningu.',
    features: ['Neobmedzené vstupy', 'Prioritné informácie', 'Výhodnejšia cena tréningov'],
    highlighted: true,
  },
  {
    name: 'Osobný tréning',
    price: '35 €',
    description: 'Individuálne vedenie trénerom podľa cieľa.',
    features: ['Technika cvikov', 'Plán na mieru', 'Motivácia a kontrola progresu'],
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
  address: 'Doplň adresu, mesto',
  phone: '+421 XXX XXX XXX',
  email: 'info@ldbgym.sk',
  hours: [
    'Pondelok - Piatok: 06:00 - 22:00',
    'Sobota: 08:00 - 20:00',
    'Nedeľa: 08:00 - 20:00',
  ],
  mapImage: '',
  mapAlt: 'Mapa lokality LDB GYM',
}

export const legalLinks = [
  { label: 'GDPR', href: '/gdpr' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Prevádzkový poriadok', href: '/rules' },
]
