import { Tag } from '../ui/Tag'
import { SectionHeader } from '../ui/SectionHeader'
import { EXPERIENCE } from '../../data/content'

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-[--color-subtle] px-8 py-20 max-sm:px-5 max-sm:py-14"
      aria-labelledby="experience-heading"
    >
      <SectionHeader
        eyebrow="Experience"
        title="Where I've Worked"
        subtitle="A timeline of roles that shaped how I think and build."
      />
      <ol className="flex flex-col" aria-label="Work experience timeline">
        {EXPERIENCE.map((item, idx) => (
          <li key={item.id} className="flex gap-6">
            <div className="flex flex-col items-center pt-1 w-5 shrink-0" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[--color-accent] shrink-0" />
              {idx < EXPERIENCE.length - 1 && (
                <span className="w-px flex-1 bg-[--color-line] mt-2" />
              )}
            </div>
            <div className={`pb-12 ${idx === EXPERIENCE.length - 1 ? 'pb-0' : ''}`}>
              <span className="text-xs font-semibold tracking-[1.5px] uppercase text-[--color-accent] mb-1 block">
                {item.period}
              </span>
              <h3 className="text-xl font-semibold text-[--color-strong] mb-1">{item.role}</h3>
              <span className="text-sm text-[--color-muted] block mb-3">{item.company}</span>
              <p className="text-[--color-muted] leading-relaxed mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
