import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannkonsult AS | Brannkonsept og brannprosjektering i Bodø',
  description:
    'Sentralt godkjent brannrådgiver i Bodø med over 1200 prosjekter siden 2013. Vi hjelper deg med brannkonsept, brannprosjektering, branninspeksjon og uavhengig kontroll — fast pris der det er mulig.',
  alternates: { canonical: 'https://xn--bodbrannkonsult-7tb.no' },
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description:
      'Skal du bygge eller endre bruk av et bygg i Bodø, krever kommunen som regel et brannkonsept før søknaden kan behandles. Vi setter opp dokumentasjonen — fra en enkel garasje til et helt leilighetsbygg.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description:
      'Vi finner brannløsninger som holder mål uten å fordyre prosjektet unødvendig — enten det er et påbygg i Rønvik eller et næringsbygg ved havna.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description:
      'Har brannvesenet vært på besøk, eller lurer du på tilstanden i en eldre bygård fra gjenreisningen? Vi går gjennom bygget og dokumenterer hva som eventuelt må utbedres.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description:
      'Bygger du i tiltaksklasse 2 eller høyere, er uavhengig kontroll et lovkrav. Vi kontrollerer at brannkonseptet holder mål før søknaden går videre til kommunen.',
    href: '/uavhengig-kontroll',
  },
]

const stats = [
  { number: '1200+', label: 'Prosjekter siden 2013' },
  { number: 'TKL 1+2', label: 'Godkjent hos DiBK' },
  { number: 'Fastpris', label: 'Alltid, uansett omfang' },
  { number: 'Nordland', label: 'Og resten av landet' },
]

const reviews = [
  {
    quote:
      'Har god opplevelse og anbefaler denne tjenesten på det sterkeste, vi skal nå kjøpe ny enebolig og kommer til å benytte oss av denne tjenesten som er rask og enkel.',
    author: 'Yasin Khan',
    date: '10. mars 2025',
  },
  {
    quote:
      'God oppfølging, god gjennomføring og god dialog underveis. Fornøyd med samarbeidet!',
    author: 'Henrik E. Larsen',
    company: 'aCorp Construction AS',
    date: '12. juli 2023',
  },
  {
    quote:
      'Meget god kommunikasjon og rask levering på jobben som skulle gjøres. Helt nydelig, fordi det var nøyaktig det jeg hadde håpa på.',
    author: 'Karen Marie Berg',
    date: '11. september 2023',
  },
  {
    quote:
      'Veldig godt gjennomarbeidet rapport, god pris, levert innen rett tid!',
    author: 'Tore Brakstad',
    company: 'Øyvar AS',
    date: '26. august 2024',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Bodø?',
    answer:
      'Det kommer an på omfang og kompleksitet. Som utgangspunkt starter et brannkonsept i tiltaksklasse 2 på rundt 15 000 kr eks. mva., inkludert branntegninger — og du får alltid fastpris før vi setter i gang.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer:
      'Ja, mest sannsynlig. Kommunen krever brannteknisk dokumentasjon i de aller fleste byggesaker som involverer tilbygg, bruksendring, nye boenheter eller påbygg. Usikker på ditt konkrete prosjekt? Ta kontakt, så vurderer vi det gratis.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'Sjelden. De fleste prosjekter lar seg løse med situasjonsplan, tegninger og bilder du sender oss — vi ber om befaring bare når bygget er komplisert eller mangler oppdatert tegningsunderlag.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer:
      'Ja, for brannprosjektering i tiltaksklasse 1 og 2. Godkjenningen fra DiBK dokumenterer at vi har kompetansen, forsikringen og kvalitetssystemet som kreves for å ta ansvarsrett i byggesaken.',
  },
  {
    question: 'Jobber dere kun i Bodø?',
    answer:
      'Nei. Bodø er kjerneområdet vårt, men vi tar jevnlig oppdrag i Mo i Rana, Narvik, Fauske, Mosjøen, Sortland, Værøy og Lofoten — og ellers i Nordland og Nord-Norge. De fleste prosjekter løses digitalt, så avstand er sjelden noe hinder.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const articles = [
  {
    href: '/artikler/pipebrann',
    image: '/images/article-pipebrann.jpg',
    title: 'Forebygg pipebrann med enkle grep',
    excerpt:
      'Lange, kalde vintre betyr mye fyring i Bodø og Salten — og dermed økt risiko for pipebrann. Vi går gjennom hva som forårsaker det og hvordan du forebygger.',
  },
  {
    href: '/artikler/brannslokker',
    image: '/images/article-brannslukker.jpg',
    title: 'Har du riktig brannslokkeapparat?',
    excerpt:
      'Vet du hvilken type brannslokker som faktisk passer boligen din? Vi går gjennom forskjellen på pulver- og skumapparat, og hva som bør henge på veggen.',
  },
  {
    href: '/artikler/roykvarsler',
    image: '/images/article-roykvarsler.jpg',
    title: 'Riktig røykvarsler redder liv',
    excerpt:
      'Med mørketid store deler av vinteren er varsling om natten ekstra viktig. Vi forklarer krav til røykvarslere og riktig plassering.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── HERO — Arctic Horizon: shorter ultra-wide band, text bottom-anchored ── */}
      <section className="relative h-[75vh] min-h-[540px] flex items-end">
        <Image
          src="/images/hero.jpg"
          alt="Bodø sentrum og havn sett fra luften"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          <p className="hero-1 font-accent text-brand-orange text-xl lg:text-2xl mb-3">
            Brannrådgiver for Bodø og Nordland
          </p>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 max-w-3xl">
            Brannprosjektering i Bodø
          </h1>
          <p className="hero-3 text-brand-white/80 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            Fra etterkrigsbebyggelsen i sentrum til nye felt i Rønvik og Mørkved — vi kjenner
            byggene som står i Bodø i dag. Sentralt godkjent foretak, fastpris og svar innen 24 timer.
          </p>
          <div className="hero-4 flex flex-wrap gap-4">
            <Link
              href="/kontakt-oss"
              className="bg-brand-orange text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
            >
              Få gratis tilbud
            </Link>
            <Link
              href="/om-oss"
              className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
            >
              Om oss
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP — slim ticker ── */}
      <section className="bg-brand-dark py-4">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-10 gap-y-2 text-center lg:text-left">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-brand-orange font-black text-base lg:text-lg">{stat.number}</span>
                <span className="text-brand-white/70 text-xs lg:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES — single row on desktop ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Våre tjenester</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">
              Brannfaglig bistand fra søknad til ferdigattest
            </h2>
          </ScrollReveal>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.href}
                delay={i * 80}
                className="min-w-[260px] snap-start lg:min-w-0"
              >
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="font-accent text-brand-orange text-xl mb-2">Referanser</p>
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Dette sier kundene våre</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <ReviewCard {...r} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — two-tone split ── */}
      <section className="bg-brand-white">
        <div className="max-w-[1350px] mx-auto flex flex-col lg:flex-row">
          <div className="bg-brand-dark lg:w-[35%] px-6 sm:px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center">
            <ScrollReveal>
              <p className="font-accent text-brand-orange text-xl mb-2">Spørsmål og svar</p>
              <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">
                Ofte stilte spørsmål
              </h2>
              <p className="text-brand-white/70 leading-relaxed">
                Finner du ikke svaret du leter etter? Ta gjerne kontakt med oss — vi svarer
                innen 24 timer.
              </p>
              <Link
                href="/kontakt-oss"
                className="inline-block mt-6 border-2 border-brand-white text-brand-white font-bold px-6 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200"
              >
                Kontakt oss
              </Link>
            </ScrollReveal>
          </div>
          <div className="lg:w-[65%] px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
            <ScrollReveal delay={80} variant="fade">
              <FAQAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section id="artikler" className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex items-end justify-between mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Nyttige artikler</h2>
            <Link
              href="/artikler/pipebrann"
              className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              Se alle <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <ScrollReveal key={a.href} delay={i * 80}>
                <Link
                  href={a.href}
                  className="group bg-brand-white rounded-[30px] overflow-hidden border border-brand-gray hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-brand-black text-lg mb-2 group-hover:text-brand-orange transition-colors duration-200">
                      {a.title}
                    </h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                    <span className="text-brand-orange font-bold text-sm flex items-center gap-1">
                      Les mer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — horizon banner ── */}
      <section className="bg-brand-orange py-14 lg:py-16">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade" className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-brand-white text-2xl lg:text-3xl font-black mb-2">
                Har du et byggeprosjekt i Bodø eller Salten?
              </h2>
              <p className="text-brand-white/80 text-base lg:text-lg max-w-xl">
                Send oss situasjonsplan og tegninger, så vurderer vi det kostnadsfritt —
                med fastpristilbud i hånden innen 24 timer.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shrink-0">
              <Link
                href="/kontakt-oss"
                className="bg-brand-white text-brand-black font-bold px-8 py-3.5 rounded-[10px] hover:opacity-90 hover:scale-[1.03] transition-all duration-200"
              >
                Få gratis tilbud
              </Link>
              <a
                href="tel:+4740051437"
                className="border-2 border-brand-white text-brand-white font-bold px-8 py-3.5 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
              >
                <Phone size={16} /> Ring oss
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
