import Link from 'next/link'

export const metadata = {
  title: '7-Day Refund Policy — The Seoul Glow Code',
  description: 'Refund policy for The Seoul Glow Code digital ebook.',
}

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose">The Seoul Glow Code</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-6xl">7-Day Refund Policy</h1>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        If you&apos;re not satisfied with The Seoul Glow Code, you can request a refund within 7 days of purchase by
        contacting us through the website&apos;s Contact page and providing your order details. We&apos;ll review your request
        and respond as soon as possible.
      </p>
      <Link href="/" className="mt-10 inline-block text-sm font-semibold text-rose underline underline-offset-4">
        Return to the Seoul Glow Code
      </Link>
    </main>
  )
}
