import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kontakt Bodø Brannkonsult | Få uforpliktende tilbud',
  description:
    'Kontakt Bodø Brannkonsult for uforpliktende tilbud på brannkonsept og brannprosjektering i Bodø. Sentralt godkjent foretak. Vi svarer innen 24 timer.',
  alternates: { canonical: 'https://www.bodøbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="/images/hero.jpg" alt="Bodø by" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="hero-1 flex items-center gap-2 text-brand-orange text-sm mb-3">
            <Link href="/" className="hover:underline">Hjem</Link>
            <span>/</span>
            <span>Kontakt oss</span>
          </div>
          <h1 className="hero-2 text-brand-white text-4xl lg:text-5xl font-black max-w-2xl">
            Kontakt Bodø Brannkonsult
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form */}
            <ScrollReveal className="lg:w-[60%]">
              <h2 className="text-brand-black text-2xl font-black mb-6">Send oss en forespørsel</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal delay={150} className="lg:w-[40%]">
              <div className="bg-brand-lightgray rounded-[30px] p-8 mb-6">
                <h3 className="font-bold text-brand-black text-lg mb-6">Kontaktinformasjon</h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: 'Telefon', value: '+47 000 00 000', href: 'tel:+4700000000' },
                    { icon: Mail, label: 'E-post', value: 'post@bodøbrannkonsult.no', href: 'mailto:post@bodøbrannkonsult.no' },
                    { icon: MapPin, label: 'Adresse', value: '[Gateadresse], Bodø', href: null },
                    { icon: Clock, label: 'Åpningstider', value: 'Man–Fre 08:00–16:00', href: null },
                  ].map(({ icon: Icon, label, value, href }, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-brand-darkgray text-xs mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="font-bold text-brand-black hover:text-brand-orange transition-colors text-sm">
                            {value}
                          </a>
                        ) : (
                          <p className="font-bold text-brand-black text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-lightgray rounded-[30px] h-52 flex items-center justify-center">
                <p className="text-brand-darkgray text-sm">Kart kommer snart</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
