import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, CheckCircle, ShieldCheck } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll av brann i Bodø | Bodø Brannkonsult',
  description:
    'Uavhengig kontroll (UK) av brannkonsept i Bodø. Sentralt godkjent foretak kontrollerer brannkonsept og branntegninger mot TEK17. Fast pris. Kontakt oss i dag.',
  alternates: { canonical: 'https://www.bodøbrannkonsult.no/uavhengig-kontroll' },
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer:
      'Uavhengig kontroll (UK) er en obligatorisk kvalitetssikring der en uavhengig part kontrollerer at brannprosjekteringen er utført i henhold til gjeldende forskrifter. Kontrollen utføres av et firma uten tilknytning til det som har prosjektert.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll av brann?',
    answer:
      'Det er krav om UK brann når prosjekteringen av brann utføres i tiltaksklasse 2 (TKL 2) eller høyere, i henhold til SAK10. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med mer enn 2 etasjer.',
  },
  {
    question: 'Hva koster uavhengig kontroll?',
    answer:
      'Kostnaden avhenger av prosjektets omfang og kompleksitet. Vi gir fastpristilbud etter gjennomgang av brannkonseptet. Ta kontakt med oss for et uforpliktende estimat.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer:
      'Ja — det er faktisk et krav at den som utfører UK ikke er den samme som har prosjektert. Vi kan ta på oss uavhengig kontroll av brannkonsept utarbeidet av andre rådgivere.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="/images/hero.jpg" alt="Bodø by" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-3">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Uavhengig kontroll</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Uavhengig kontroll av brannkonsept i Bodø
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              I mange byggeprosjekter er det krav om uavhengig kontroll (UK) av brannsikkerheten. Kontrollen skal sikre at brannkonseptet er i tråd med gjeldende forskrifter og at prosjekteringen holder nødvendig kvalitet. Dette gir økt trygghet, reduserer risiko for feil og bidrar til en mer forutsigbar byggeprosess.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Når er det krav om uavhengig kontroll?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              I henhold til SAK10 § 14-2 er det krav om uavhengig kontroll av prosjektering av brann når tiltaket er i tiltaksklasse 2 (TKL 2) eller høyere. Dette gjelder de fleste næringsbygg, boligblokker og bygninger med særskilte krav til brannsikkerhet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva kontrolleres?</h2>
            <ul className="space-y-3 mb-8">
              {[
                'Brannkonseptets overensstemmelse med TEK17 og Veiledning til TEK17',
                'Valg av risikoklasse og brannklasse',
                'Branncelleinndeling og seksjoneringer',
                'Rømningsveier og røykventilasjon',
                'Krav til branntekniske installasjoner',
                'Branntegningenes nøyaktighet og fullstendighet',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-brand-darkgray">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva vi tilbyr</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { icon: ShieldCheck, title: 'Uavhengig gjennomgang', desc: 'Grundig kontroll av hele brannkonseptet av en erfaren brannrådgiver.' },
                { icon: CheckCircle, title: 'Skriftlig kontrollrapport', desc: 'Detaljert rapport med funn, avvik og anbefalinger.' },
                { icon: ShieldCheck, title: 'Erklæring om ansvarsrett', desc: 'Vi erklærer ansvarsrett som uavhengig kontrollerende for brann.' },
                { icon: CheckCircle, title: 'Nøytral part', desc: 'Vi selger ingen produkter og har ingen interesser i valg av løsning.' },
              ].map((item, i) => (
                <div key={i} className="bg-brand-lightgray rounded-[20px] p-5 flex items-start gap-3">
                  <item.icon size={20} className="text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-brand-black mb-1 text-sm">{item.title}</h3>
                    <p className="text-brand-darkgray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal variant="fade">
        <section className="bg-brand-dark py-10 lg:py-12">
          <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-brand-white text-xl lg:text-2xl font-black mb-1">
                Kontakt oss for uavhengig kontroll i Bodø
              </h3>
              <p className="text-brand-white/60 text-sm">Vi svarer innen 24 timer.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 shrink-0">
              <Link href="/kontakt-oss" className="bg-brand-orange text-brand-white font-bold px-7 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
                Kontakt oss
              </Link>
              <a href="tel:+4700000000" className="border-2 border-brand-white text-brand-white font-bold px-7 py-3 rounded-[10px] hover:bg-brand-white hover:text-brand-black transition-all duration-200 flex items-center gap-2">
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
