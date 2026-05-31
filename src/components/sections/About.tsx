import { SectionHeader } from '../ui/SectionHeader'

export function About() {
  return (
    <section
      id="about"
      className="bg-[--color-subtle] px-8 py-20 max-sm:px-5 max-sm:py-14"
      aria-labelledby="about-heading"
    >
      <div className="flex gap-16 items-start max-lg:flex-col max-lg:gap-10">
        <div className="flex-1">
          <SectionHeader
            eyebrow="About"
            title="Who I Am"
            subtitle="Software Engineer with 7+ years of experience building reliable, production-grade software."
          />
          <p className="text-[--color-muted] leading-relaxed mb-5">
            I'm a Software Engineer at Quipu GmbH, where I've spent over seven years crafting full-stack
            applications with C#, .NET, and modern frontend technologies. I care deeply about clean
            architecture, maintainable code, and software that actually solves problems.
          </p>
          <p className="text-[--color-muted] leading-relaxed">
            Beyond my day job, I build side projects that explore distributed systems, mobile apps,
            and developer tooling — always looking for the most elegant solution to a hard problem.
          </p>
        </div>
        <div className="shrink-0 max-lg:w-full">
          <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Shipped' },
              { value: '5+', label: 'Open Source Repos' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center bg-[--color-canvas] border border-[--color-line] rounded-xl p-6"
              >
                <span className="text-4xl font-bold text-[--color-accent] leading-none mb-1">
                  {value}
                </span>
                <span className="text-sm text-[--color-muted]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
