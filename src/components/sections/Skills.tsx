import { Tag } from '../ui/Tag'
import { SectionHeader } from '../ui/SectionHeader'
import { SKILLS } from '../../data/content'
import type { Skill } from '../../types/content'

const CATEGORIES: Array<{ key: Skill['category']; label: string }> = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tooling', label: 'Tooling' },
]

export function Skills() {
  return (
    <section id="skills" className="px-8 py-20 max-sm:px-5 max-sm:py-14" aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow="Skills"
        title="What I Work With"
        subtitle="Technologies and tools I use regularly in production."
      />
      <div className="flex flex-col gap-8">
        {CATEGORIES.map(({ key, label }) => {
          const grouped = SKILLS.filter((s) => s.category === key)
          return (
            <div key={key}>
              <h3 className="text-xs font-semibold tracking-[1.5px] uppercase text-[--color-muted] mb-4">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {grouped.map((s) => (
                  <Tag key={s.label} label={s.label} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
