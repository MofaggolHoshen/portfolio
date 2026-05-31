import { SectionHeader } from '../ui/SectionHeader'
import { TESTIMONIALS } from '../../data/content'

export function Testimonials() {
  return (
    <section id="testimonials" className="px-8 py-20 max-sm:px-5 max-sm:py-14" aria-labelledby="testimonials-heading">
      <SectionHeader eyebrow="Testimonials" title="What People Say" />
      <ul className="grid grid-cols-2 gap-6 list-none m-0 p-0 max-lg:grid-cols-1">
        {TESTIMONIALS.map((t) => (
          <li
            key={t.id}
            className="bg-[--color-subtle] border border-[--color-line] rounded-xl p-6 flex flex-col gap-4"
          >
            <blockquote className="m-0 p-0">
              <p className="text-[--color-muted] leading-relaxed italic">"{t.quote}"</p>
            </blockquote>
            <footer className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-[--color-line]">
              <span className="font-semibold text-[--color-strong] text-sm">{t.author}</span>
              <span className="text-xs text-[--color-muted]">
                {t.role}, {t.company}
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}
