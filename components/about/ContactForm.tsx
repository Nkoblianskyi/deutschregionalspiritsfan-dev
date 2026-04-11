'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'

const schema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  email: z.string().email('Bitte geben Sie eine gueltige E-Mail-Adresse ein.'),
  subject: z.string().min(3, 'Bitte geben Sie einen Betreff ein.'),
  message: z.string().min(20, 'Ihre Nachricht muss mindestens 20 Zeichen haben.'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Bitte stimmen Sie den Datenschutzregeln zu.',
  }),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800))
    setSent(true)
    reset()
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              {...register('name')}
              className="w-full bg-input border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200"
              placeholder="Ihr vollstaendiger Name"
            />
            {errors.name && (
              <p className="mt-1 font-mono text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full bg-input border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200"
              placeholder="ihre@email.de"
            />
            {errors.email && (
              <p className="mt-1 font-mono text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Betreff
          </label>
          <input
            id="subject"
            {...register('subject')}
            className="w-full bg-input border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200"
            placeholder="Worum geht es?"
          />
          {errors.subject && (
            <p className="mt-1 font-mono text-xs text-destructive">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            Nachricht
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className="w-full bg-input border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
            placeholder="Schreiben Sie uns Ihre Nachricht..."
          />
          {errors.message && (
            <p className="mt-1 font-mono text-xs text-destructive">{errors.message.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5">
              <input
                type="checkbox"
                {...register('consent')}
                className="sr-only peer"
              />
              <div className="w-4 h-4 border border-border peer-checked:bg-primary peer-checked:border-primary transition-colors duration-200 group-hover:border-primary/60" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-3 h-3 text-primary-foreground opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className="font-mono text-xs text-muted-foreground leading-relaxed">
              Ich habe die{' '}
              <Link href="/datenschutz" className="text-primary underline underline-offset-2 hover:no-underline">
                Datenschutzerklaerung
              </Link>
              {' '}gelesen und stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 font-mono text-xs text-destructive">{errors.consent.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="font-mono text-xs tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </button>
      </form>

      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-border p-10 max-w-md w-full text-center shadow-2xl">
            <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
              Nachricht gesendet
            </h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
              Vielen Dank fuer Ihre Nachricht. Wir melden uns so bald wie moeglich
              unter der angegebenen E-Mail-Adresse bei Ihnen.
            </p>
            <button
              onClick={() => setSent(false)}
              className="font-mono text-xs tracking-widest uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Schliessen
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
