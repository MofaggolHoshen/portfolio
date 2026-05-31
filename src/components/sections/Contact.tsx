import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(fields: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.message.trim()) errors.message = 'Message is required.'
  else if (fields.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'
  return errors
}

const INITIAL: FormState = { name: '', email: '', message: '' }

const INPUT_BASE =
  'w-full px-4 py-3 bg-[--color-canvas] border rounded-lg text-[--color-strong] text-sm transition-colors placeholder:text-[--color-muted]/50 focus:outline-none focus:border-[--color-accent] focus:ring-2 focus:ring-[--color-accent-10]'

export function Contact() {
  const [fields, setFields] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validationErrors = validate(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
    setFields(INITIAL)
    setErrors({})
  }

  return (
    <section id="contact" className="px-8 py-20 max-sm:px-5 max-sm:py-14" aria-labelledby="contact-heading">
      <div className="max-w-[560px]">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="I'm open to new opportunities, collaborations, and interesting conversations."
        />

        {submitted ? (
          <div
            className="bg-[--color-accent-10] border border-[--color-accent-50] rounded-xl p-6 text-[--color-strong]"
            role="alert"
            aria-live="polite"
          >
            <p className="m-0">✅ Thanks for reaching out! I'll get back to you soon.</p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-medium text-[--color-strong]">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className={`${INPUT_BASE} ${errors.name ? 'border-red-500' : 'border-[--color-line]'}`}
                value={fields.name}
                onChange={handleChange}
                autoComplete="name"
                aria-required="true"
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && (
                <span id="contact-name-error" className="text-xs text-red-500 font-medium" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-medium text-[--color-strong]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className={`${INPUT_BASE} ${errors.email ? 'border-red-500' : 'border-[--color-line]'}`}
                value={fields.email}
                onChange={handleChange}
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && (
                <span id="contact-email-error" className="text-xs text-red-500 font-medium" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-medium text-[--color-strong]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className={`${INPUT_BASE} resize-y min-h-[120px] ${errors.message ? 'border-red-500' : 'border-[--color-line]'}`}
                value={fields.message}
                onChange={handleChange}
                aria-required="true"
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message && (
                <span id="contact-message-error" className="text-xs text-red-500 font-medium" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg">
              Send Message
            </Button>
          </form>
        )}

        <div className="flex gap-4 mt-10 pt-8 border-t border-[--color-line]" aria-label="Social links">
          <a
            href="https://github.com/MofaggolHoshen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[--color-muted] no-underline transition-colors hover:text-[--color-accent] focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 rounded"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mofaggol-hoshen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[--color-muted] no-underline transition-colors hover:text-[--color-accent] focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 rounded"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
