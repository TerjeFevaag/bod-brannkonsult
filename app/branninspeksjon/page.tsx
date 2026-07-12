import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, AlertTriangle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Branntilsyn og branninspeksjon i Bodø | Brannkonsult AS',
  description:
    'Branntilsyn og branninspeksjon i Bodø. Fått pålegg fra brannvesenet? Sentralt godkjent foretak lager tilstandsrapport og handlingsplan. Kontakt oss i dag.',
  alternates: { canonical: 'https://bodøbrannkonsult.no/branninspeksjon' },
}

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer:
      'Branntilsyn er en kontroll utført av kommunens brann- og redningsetat. Branninspeksjon er en frivillig, grundigere gjennomgang du kan bestille fra en privat brannrådgiver som oss. Vi gir en uavhengig vurdering av byggets brannsikkerhet og konkrete anbefalinger.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer:
      'Styret i sameiet er ansvarlig for at fellesarealene oppfyller brannkravene. Beboere er ansvarlige for sine egne enheter. Vi hjelper sameier og borettslag med å kartlegge status og utarbeide en handlingsplan for nødvendige utbedringer.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer:
      'Brannvesenet kan gi pålegg om utbedring med frist. Dersom pålegg ikke etterkommes, kan brannvesenet i ytterste konsekvens stenge bygget. Vi hjelper deg med å forstå pålegget og utarbeide en kostnadseffektiv plan for å lukke avvikene.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer:
      'Kostnaden avhenger av byggets størrelse og kompleksitet. Vi gir et fastpristilbud etter å ha mottatt informasjon om bygget. Ta kontakt for en uforpliktende prat og estimat.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer:
      'Ja — alle eksisterende bygninger skal oppgraderes til et minimum tilsvarende det som gjaldt for nybygg i 1985 (BF85). For mange eldre bygg i Bodø betyr dette at det er behov for tiltak. Vi hjelper deg med å vurdere hva som er nødvendig.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://bodøbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Branninspeksjon', item: 'https://bodøbrannkonsult.no/branninspeksjon' },
  ],
}

export default function BranninspeksjonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="/images/hero.jpg" alt="Bodø sentrum — branninspeksjon fra Brannkonsult AS" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-3">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Branninspeksjon</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Branntilsyn og branninspeksjon i Bodø
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Har kommunen vært på branntilsyn, eller ønsker du å kartlegge brannsikkerheten i en eldre bygning i Bodø? Vi hjelper borettslag, sameier, næringsbygg og eiendomseiere med branninspeksjon og vurdering av byggets brannsikkerhet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til oppgradering</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Alle bygninger i Norge skal tilfredsstille et minimum brannsikkerhetsnivå tilsvarende det som gjaldt for nybygg i 1985 (BF85). Eldre bygg som ikke oppfyller dette kravet skal utbedres. Bodø har mange bygg fra etterkrigstiden med behov for branntekniske tiltak.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-branntilsyn.jpg"
                alt="Kontroll av brannslukkere under branntilsyn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva inngår i vår branninspeksjon?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Inspeksjon', desc: 'Grundig gjennomgang av hele bygningen — fellesarealer, rømningsveier, tekniske installasjoner og konstruksjoner.' },
                { title: 'Tilstandsrapport', desc: 'Skriftlig rapport med oversikt over avvik og mangler, rangert etter alvorlighetsgrad.' },
                { title: 'Handlingsplan', desc: 'Konkrete anbefalinger for utbedring, med kostnadsestimat og prioritering av tiltak.' },
                { title: 'Internkontrollrutiner', desc: 'Hjelp til å etablere gode rutiner for løpende brannforebygging og dokumentasjon.' },
              ].map((item, i) => (
                <div key={i} className="bg-brand-lightgray rounded-[20px] p-5">
                  <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-l-4 border-brand-orange bg-brand-lightgray rounded-r-[20px] p-6 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-brand-black mb-2">Typisk ordlyd fra brannvesenet ved pålegg</h3>
                  <p className="text-brand-darkgray text-sm italic leading-relaxed">
                    «Det er avdekket mangler ved brannsikkerheten i bygget. Eier pålegges å utbedre disse innen [dato]. Dokumentasjon på gjennomførte tiltak skal oversendes brannvesenet.»
                  </p>
                </div>
              </div>
            </div>
            <p className="text-brand-darkgray leading-relaxed">
              Dersom du har mottatt et slikt pålegg, er det viktig å handle raskt. Vi hjelper deg med å forstå hva som kreves og utarbeider nødvendig dokumentasjon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-10 lg:py-12">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-brand-white text-xl lg:text-2xl font-black mb-1">
                Kontakt oss for hjelp etter branntilsyn i Bodø
              </h3>
              <p className="text-brand-white/60 text-sm">Vi svarer innen 24 timer.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shrink-0">
              <Link href="/kontakt-oss" className="bg-brand-orange text-brand-white font-bold px-7 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
                Kontakt oss
              </Link>
              <a href="tel:+4740051437" className="border-2 border-brand-white text-brand-white font-bold px-7 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2">
                <Phone size={16} /> Ring oss
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl lg:text-3xl font-black mb-6">Ofte stilte spørsmål</h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
