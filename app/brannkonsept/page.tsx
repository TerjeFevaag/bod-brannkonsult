import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Phone, CheckCircle } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Brannkonsept i Bodø | Bodø Brannkonsult',
  description:
    'Bodø Brannkonsult utarbeider brannkonsept i Bodø og Salten. Sentralt godkjent TKL 1+2. Fra ca. 15 000 kr inkl. branntegninger. Kontakt oss for fastpristilbud.',
  alternates: { canonical: 'https://www.bodøbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva trenger jeg til mitt prosjekt — brannkonsept eller brannteknisk notat?',
    answer:
      'Et brannkonsept er en mer helhetlig rapport som beskriver brannsikkerhetsnivået til hele byggverket. Et brannteknisk notat er enklere og brukes for mindre tiltak. Vi veileder deg til riktig løsning for ditt prosjekt — ta kontakt for en gratis vurdering.',
  },
  {
    question: 'Er befaring nødvendig for brannkonsept?',
    answer:
      'For nybygg og enklere saker er det sjelden nødvendig med befaring. Takket være digitale kartdata og gode tegningsunderlag kan vi i mange tilfeller utarbeide brannkonseptet uten fysisk befaring. Vi gir beskjed dersom vi ser behov for det.',
  },
  {
    question: 'Hva koster et brannkonsept i Bodø?',
    answer:
      'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris slik at du slipper ubehagelige overraskelser. Send oss informasjon om prosjektet for et nøyaktig tilbud.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer:
      'Nei — vi er en nøytral rådgiver og selger ingen produkter eller håndverkertjenester. Dette sikrer at rådgivningen vår alltid er uavhengig og i ditt beste interesse.',
  },
  {
    question: 'Hva trengs for å få et pristilbud?',
    answer:
      'For å gi et nøyaktig tilbud trenger vi: adresse/matrikkel, antall etasjer og bruksareal, tegninger (situasjonsplan og plantegninger) og en kort prosjektbeskrivelse. Send dette til oss så sender vi tilbud innen 24 timer.',
  },
  {
    question: 'Hvor lang tid tar det å utarbeide et brannkonsept?',
    answer:
      'Leveringstid avhenger av prosjektets omfang og vår arbeidsbelastning. For de fleste prosjekter leverer vi innen 5–10 virkedager etter mottatt bestilling og komplett underlag. Har du tidsfrist, oppgi dette i forespørselen.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      {/* Header band — horizon-anchored H1 */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image
          src="/images/hero.jpg"
          alt="Bodø by"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-3">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Brannkonsept</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Brannkonsept i Bodø
          </h1>
        </div>
      </section>

      {/* Body — single centered column */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Et brannkonsept er en skriftlig rapport som oppsummerer bygningens brannsikkerhetsnivå. Ved byggesaker krever kommunen som regel prosjekteringsdokumentasjon på brannkonseptnivå — en helhetlig overordnet plan som ivaretar brannsikkerheten både for det omsøkte tiltaket og den øvrige bygningsmassen. Vi hjelper private, arkitekter, entreprenører og utbyggere i Bodø og omegn med å utarbeide komplette brannkonsept til fast pris.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva inneholder et brannkonsept?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Et komplett brannkonsept fra Bodø Brannkonsult inneholder:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Fastsettelse av risikoklasse (RKL) for alle bygningsdeler',
                'Fastsettelse av brannklasse (BKL)',
                'Oppdeling i brannceller og brannseksjoner',
                'Beskrivelse av rømningsveier og røykventilasjon',
                'Branntekniske tegninger (plantegninger med brannceller, rømning m.m.)',
                'Vurdering av bærende og skille konstruksjoner',
                'Krav til branntekniske installasjoner',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="scale" className="mb-10">
            <div className="relative h-64 lg:h-80 rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-brannkonsept.jpg"
                alt="Brannkonsept og branntegninger under utarbeidelse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Brannklasser og risikoklasser</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Alle bygninger i Norge klassifiseres etter risikoklasse (RKL 1–6) og brannklasse (BKL 1–4). Risikoklassen bestemmes av hva bygget brukes til og hvilke konsekvenser en brann kan ha. Brannklassen fastsettes ut fra risikoklasse og antall etasjer.
            </p>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-8">
              <h3 className="font-bold text-brand-black mb-3">Eksempler på risikoklasser:</h3>
              <ul className="space-y-2 text-brand-darkgray text-sm">
                <li><strong>RKL 1:</strong> Garasjer, lager (ingen personopphold)</li>
                <li><strong>RKL 2:</strong> Boliger med evakueringsmulighet fra egen enhet</li>
                <li><strong>RKL 4:</strong> Kontorbygg, undervisningsbygg</li>
                <li><strong>RKL 5:</strong> Hoteller, sykehjem (sover/overnatting)</li>
                <li><strong>RKL 6:</strong> Sykehus (svekkede beboere)</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <ul className="space-y-3 mb-4">
              {[
                'Utarbeidelse av komplett brannkonsept',
                'Branntekniske tegninger (brannceller, rømningsveier)',
                'Ansvarsrett overfor kommunen i tiltaksklasse 1 og 2',
                'Fastpris — ingen skjulte kostnader',
                'Levering innen 5–10 virkedager',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-6 mb-4">
              <div className="flex items-start gap-4">
                <FileText size={32} className="text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-black text-lg mb-2">Pris</h3>
                  <p className="text-brand-darkgray">
                    Fra ca. <strong className="text-brand-black">15 000 kr</strong> i tiltaksklasse 2, inkl. branntegninger og ekskl. mva. Alltid fastpris.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-width Kontakt oss banner — between body and FAQ */}
      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-10 lg:py-12">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-brand-white text-xl lg:text-2xl font-black mb-1">
                Kontakt oss for uforpliktende tilbud på brannkonsept i Bodø
              </h3>
              <p className="text-brand-white/60 text-sm">Vi svarer innen 24 timer.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shrink-0">
              <Link
                href="/kontakt-oss"
                className="bg-brand-orange text-brand-white font-bold px-7 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
              >
                Kontakt oss
              </Link>
              <a
                href="tel:+4700000000"
                className="border-2 border-brand-white text-brand-white font-bold px-7 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2"
              >
                <Phone size={16} /> Ring oss
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
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
