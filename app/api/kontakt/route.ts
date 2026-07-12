import { NextRequest, NextResponse } from 'next/server'

const MAILERSEND_API_URL = 'https://api.mailersend.com/v1/email'
const CONTACT_EMAIL = 'post@bodøbrannkonsult.no'
const SENDER_NAME = 'Brannkonsult AS'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const GENERIC_ERROR = 'Noe gikk galt. Prøv igjen, eller ring oss direkte på +47 400 51 437.'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

interface ContactPayload {
  navn: string
  epost: string
  telefon: string
  prosjekttype: string
  melding: string
}

function validate(body: unknown): { data: ContactPayload } | { error: string } {
  if (typeof body !== 'object' || body === null) {
    return { error: 'Ugyldig forespørsel.' }
  }
  const { navn, epost, telefon, prosjekttype, melding } = body as Record<string, unknown>

  if (typeof navn !== 'string' || !navn.trim()) {
    return { error: 'Navn er påkrevd.' }
  }
  if (typeof epost !== 'string' || !EMAIL_REGEX.test(epost.trim())) {
    return { error: 'Oppgi en gyldig e-postadresse.' }
  }
  if (typeof melding !== 'string' || !melding.trim()) {
    return { error: 'Melding er påkrevd.' }
  }

  return {
    data: {
      navn: navn.trim(),
      epost: epost.trim(),
      telefon: typeof telefon === 'string' ? telefon.trim() : '',
      prosjekttype: typeof prosjekttype === 'string' ? prosjekttype.trim() : '',
      melding: melding.trim(),
    },
  }
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.MAILERSEND_API_KEY
  if (!apiKey) {
    console.error('MAILERSEND_API_KEY er ikke satt')
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ugyldig forespørsel.' }, { status: 400 })
  }

  const result = validate(body)
  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }
  const { navn, epost, telefon, prosjekttype, melding } = result.data

  const textLines = [
    `Navn: ${navn}`,
    `E-post: ${epost}`,
    telefon && `Telefon: ${telefon}`,
    prosjekttype && `Prosjekttype: ${prosjekttype}`,
    '',
    'Melding:',
    melding,
  ].filter((line): line is string => Boolean(line))

  const htmlRows = [
    `<p><strong>Navn:</strong> ${escapeHtml(navn)}</p>`,
    `<p><strong>E-post:</strong> ${escapeHtml(epost)}</p>`,
    telefon && `<p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>`,
    prosjekttype && `<p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttype)}</p>`,
    `<p><strong>Melding:</strong><br />${escapeHtml(melding).replace(/\n/g, '<br />')}</p>`,
  ].filter((row): row is string => Boolean(row))

  try {
    const response = await fetch(MAILERSEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: CONTACT_EMAIL, name: SENDER_NAME },
        to: [{ email: CONTACT_EMAIL, name: SENDER_NAME }],
        reply_to: { email: epost, name: navn },
        subject: `Ny henvendelse fra nettsiden — ${navn}`,
        text: textLines.join('\n'),
        html: `<h2>Ny henvendelse fra kontaktskjemaet</h2>${htmlRows.join('')}`,
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('MailerSend-feil:', response.status, errorBody)
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 })
    }
  } catch (error) {
    console.error('Klarte ikke sende e-post via MailerSend:', error)
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
