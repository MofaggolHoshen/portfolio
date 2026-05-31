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
            subtitle="Senior C#/.NET Developer with 7+ years of hands-on experience building enterprise-grade and cloud-native applications."
          />
          <p className="text-[--color-muted] leading-relaxed mb-5">
            I'm a Software Developer at Quipu GmbH in Frankfurt, where I design and build full-stack
            applications with C#, ASP.NET Core, Blazor, and Azure. My focus is on microservices,
            CQRS, clean architecture, and distributed system design — delivering secure, scalable
            software in Agile environments.
          </p>
          <p className="text-[--color-muted] leading-relaxed">
            Previously a Working Student at Daenet GmbH building IoT REST APIs and Azure cloud integration,
            and a Teaching Assistant at Frankfurt University of Applied Sciences guiding students in
            .NET, Azure, and machine learning. I hold a Master of Engineering in Information Technology
            from Frankfurt UAS.
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
