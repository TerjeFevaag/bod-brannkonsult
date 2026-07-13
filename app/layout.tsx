import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://xn--bodbrannkonsult-7tb.no'),
  title: 'Brannkonsult AS | Brannrådgiver i Bodø og Nord-Norge',
  description:
    'Sentralt godkjent brannrådgiver med over 1200 prosjekter siden 2013. Brannkonsept, brannprosjektering, branninspeksjon og uavhengig kontroll i Bodø og hele Nord-Norge.',
  alternates: {
    canonical: 'https://xn--bodbrannkonsult-7tb.no',
  },
  openGraph: {
    title: 'Brannkonsult AS | Brannrådgiver i Bodø og Nord-Norge',
    description:
      'Sentralt godkjent brannrådgiver med over 1200 prosjekter siden 2013. Brannkonsept, brannprosjektering, branninspeksjon og uavhengig kontroll i Bodø og hele Nord-Norge.',
    url: 'https://xn--bodbrannkonsult-7tb.no',
    siteName: 'Brannkonsult AS',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Brannkonsult AS',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Brannkonsult AS',
  description: 'Brannprosjektering og brannkonsept i Bodø',
  telephone: '+47 400 51 437',
  email: 'post@bodøbrannkonsult.no',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bodø',
    addressCountry: 'NO',
  },
  areaServed: [
    { '@type': 'City', name: 'Bodø' },
    { '@type': 'City', name: 'Mo i Rana' },
    { '@type': 'City', name: 'Narvik' },
    { '@type': 'City', name: 'Fauske' },
    { '@type': 'City', name: 'Mosjøen' },
    { '@type': 'City', name: 'Sortland' },
    { '@type': 'City', name: 'Værøy' },
    { '@type': 'Place', name: 'Lofoten' },
    { '@type': 'AdministrativeArea', name: 'Nordland' },
    { '@type': 'Place', name: 'Nord-Norge' },
  ],
  url: 'https://xn--bodbrannkonsult-7tb.no',
  priceRange: 'Fra kr 15 000',
  hasCredential: 'Sentralt godkjent tiltaksklasse 1 og 2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
