type HeadingLevel = 1 | 2 | 3

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  level?: HeadingLevel
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  level = 2,
}: SectionHeaderProps) {
  const Heading = `h${level}` as 'h1' | 'h2' | 'h3'

  return (
    <div className="mb-10">
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-[1.5px] uppercase text-[--color-accent] mb-3">
          {eyebrow}
        </span>
      )}
      <Heading className="text-4xl font-bold text-[--color-strong] tracking-tight leading-tight mb-4 max-lg:text-3xl">
        {title}
      </Heading>
      {subtitle && (
        <p className="text-lg text-[--color-muted] leading-relaxed max-w-[560px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
