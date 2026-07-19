import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Bodø | Brannkonsult AS',
  description:
    'Profesjonell brannprosjektering i Bodø og Salten. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Kontakt oss for tilbygg, bruksendring og nybygg.',
  alternates: { canonical: 'https://xn--bodbrannkonsult-7tb.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Bodø?',
    answer:
      'Som en pekepinn: et brannkonsept i tiltaksklasse 2 ligger normalt fra 15 000 kr ekskl. mva., inkludert branntegninger — alltid som fastpris. Send oss tegninger og en kort beskrivelse, så får du et konkret tilbud.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, i de aller fleste tilfeller. Søknadspliktige tiltak som tilbygg, påbygg, bruksendring, ny boenhet i eksisterende bygg eller bytte av vinduer i brannvegg utløser som regel krav om brannprosjektering. Ta kontakt, så vurderer vi saken din gratis.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'Sjelden. Med kartdata, tegninger og bilder løser vi de fleste saker uten å reise ut. Skulle vi se behov for befaring, sier vi ifra før arbeidet starter.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei, og det er bevisst. Vi tar ikke på oss byggearbeid eller selger produkter — kun brannteknisk rådgivning, slik at anbefalingene våre ikke er farget av andre interesser.',
  },
  {
    question: 'Hva trengs fra deg for å gi et pristilbud?',
    answer:
      'Adresse, antall etasjer og bruksareal, plantegninger og en kort beskrivelse av tiltaket. Mer informasjon gir et mer presist tilbud — send det du har på e-post eller via skjemaet.',
  },
  {
    question: 'Tilbyr dere brannprosjektering utenfor Bodø?',
    answer:
      'Ja, i tillegg til Bodø prosjekterer vi jevnlig i Mo i Rana, Narvik, Fauske, Mosjøen, Sortland, Værøy og Lofoten, og ellers i Nordland. Det aller meste kan løses uten befaring, så geografi setter sjelden en stopper.',
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
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://xn--bodbrannkonsult-7tb.no' },
    { '@type': 'ListItem', position: 2, name: 'Brannprosjektering', item: 'https://xn--bodbrannkonsult-7tb.no/brannprosjektering' },
  ],
}

export default function BrannprosjekteringPage() {
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
        <Image src="/images/hero.jpg" alt="Bodø sentrum — brannprosjektering fra Brannkonsult AS" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-3">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannprosjektering</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannprosjektering i Bodø
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Brannprosjektering er den skriftlige planleggingen som viser at bygget oppfyller brann- og eksplosjonsvernloven og plan- og bygningsloven. Vi har prosjektert alt fra hytter ved Saltstraumen til leilighetsbygg i Bodø sentrum — alltid til fast pris.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Når er det behov for brannprosjektering?</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Bytte av vinduer eller dører i brannvegg/seksjoneringsvegg',
                'Tilbygg eller påbygg på eksisterende bygg',
                'Bruksendring (f.eks. garasje til boenhet)',
                'Etablering av ny selvstendig boenhet (utleieenhet)',
                'Nybygg — boliger, næringsbygg, fritidsboliger',
                'Rehabilitering av eldre bygg med branntekniske mangler',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <ScrollReveal variant="scale" className="!block mb-10">
              <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/service-brannprosjektering.jpg"
                  alt="Brannrådgiver ser gjennom branntegninger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </ScrollReveal>

            <h2 className="text-brand-black text-2xl font-black mb-4">Start tidlig — spar penger</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Jo tidligere i prosjektet du involverer en brannrådgiver, desto enklere og billigere er det å finne gode løsninger. Brannkrav som oppdages sent i prosessen kan kreve dyre konstruksjonsendringer. Vi anbefaler å ta kontakt allerede i skissefasen.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Brannkonsept og brannteknisk notat',
                'Branntegninger (brannceller, rømningsveier, seksjoneringer)',
                'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                'Fastpris — ingen overraskelser',
                'Levering innen 5–10 virkedager',
                'God oppfølging gjennom hele byggesaken',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi trenger fra deg</h2>
            <ul className="space-y-3 mb-4">
              {[
                'Situasjonsplan / adresse',
                'Byggesakstegninger (plan, snitt, fasade)',
                'Kort prosjektbeskrivelse',
                'Eventuelle forhåndsuttalelser fra kommunen',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-10 lg:py-12">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-brand-white text-xl lg:text-2xl font-black mb-1">
                Skal du i gang med et byggeprosjekt i Bodø?
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
