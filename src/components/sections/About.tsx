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
            subtitle="Developer, problem-solver, and occasional over-engineer of side projects."
          />
          <p className="text-[--color-muted] leading-relaxed mb-5">
            I'm a full stack developer with a passion for building products that are both
            technically solid and genuinely delightful to use. I care deeply about
            performance, accessibility, and maintainable code.
          </p>
          <p className="text-[--color-muted] leading-relaxed">
            When I'm not shipping code, I'm probably reading about distributed systems,
            experimenting with new tools, or writing about things I've learned.
          </p>
        </div>
        <div className="shrink-0 max-lg:w-full">
          <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '30+', label: 'Projects Shipped' },
              { value: '10+', label: 'Happy Clients' },
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
