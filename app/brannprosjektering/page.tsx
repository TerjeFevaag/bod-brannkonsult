import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Bodø | Bodø Brannkonsult',
  description:
    'Profesjonell brannprosjektering i Bodø og Salten. Sentralt godkjent TKL 1+2. Fast pris fra ca. 15 000 kr. Kontakt oss for tilbygg, bruksendring og nybygg.',
  alternates: { canonical: 'https://www.bodøbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Bodø?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris. Send oss tegninger og prosjektbeskrivelse for et nøyaktig tilbud.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer:
      'Ja, de fleste tiltak som krever søknad til kommunen utløser også krav om brannprosjektering — dette gjelder tilbygg, påbygg, bruksendring, ny boenhet i eksisterende bygg og bytte av vinduer i brannvegg. Ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer:
      'I de fleste saker er befaring ikke nødvendig. Med digitale kartdata, tegningsunderlag og bilder kan vi utarbeide god brannprosjektering uten å besøke bygget. Vi gir beskjed hvis vi ser behov for befaring.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral brannrådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen alltid er i ditt beste interesse.',
  },
  {
    question: 'Hva trengs fra deg for å gi et pristilbud?',
    answer:
      'Vi trenger adresse, antall etasjer og bruksareal, plantegninger og en kort prosjektbeskrivelse. Jo mer informasjon vi får, jo mer presist kan vi prise oppdraget. Send det til oss på e-post eller via kontaktskjemaet.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="/images/hero.jpg" alt="Bodø by" fill priority className="object-cover" sizes="100vw" />
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
              Brannprosjektering betyr skriftlig planlegging av nødvendig brannsikring i og rundt bygningen. Vi sørger for at ditt bygg i Bodø oppfyller alle krav i plan- og bygningsloven og brann- og eksplosjonsvernloven — til fast pris.
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
                Be om tilbud på brannprosjektering i Bodø
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
