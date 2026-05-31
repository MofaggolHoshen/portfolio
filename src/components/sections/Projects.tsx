import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'
import { SectionHeader } from '../ui/SectionHeader'
import { PROJECTS } from '../../data/content'

export function Projects() {
  return (
    <section id="projects" className="px-8 py-20 max-sm:px-5 max-sm:py-14" aria-labelledby="projects-heading">
      <SectionHeader
        eyebrow="Work"
        title="Featured Projects"
        subtitle="A selection of things I've designed, built, and shipped."
      />
      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        {PROJECTS.map((project) => (
          <Card key={project.id} className="flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[--color-strong]">{project.title}</h3>
              <p className="text-[--color-muted] leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-2 border-t border-[--color-line]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[--color-accent] no-underline hover:underline focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 rounded"
                >
                  Live ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[--color-accent] no-underline hover:underline focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 rounded"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
