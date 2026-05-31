import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="hero" className="px-8 py-24 max-sm:px-5 max-sm:py-16" aria-label="Introduction">
      <div className="max-w-[640px]">
        <span className="inline-block text-sm font-semibold tracking-[1.5px] uppercase text-[--color-accent] mb-5">
          Senior C#/.NET Developer
        </span>
        <h1 className="text-6xl font-bold text-[--color-strong] tracking-tight leading-[1.1] mb-6 max-lg:text-5xl max-sm:text-4xl">
          Hi, I'm{' '}
          <span className="text-[--color-accent]">Mofaggol Hoshen</span>
        </h1>
        <p className="text-xl text-[--color-muted] leading-relaxed mb-10 max-w-[500px]">
          Building enterprise-grade and cloud-native applications with ASP.NET Core, Azure, and microservices — 7+ years shipping production software.
        </p>
        <div className="flex items-center gap-4 flex-wrap mb-10">
          <Button variant="primary" size="lg" href="#projects">
            View My Work
          </Button>
          <Button variant="ghost" size="lg" href="#contact">
            Get In Touch
          </Button>
        </div>
        <div className="flex items-center gap-4" aria-label="Social links">
          <a
            href="https://github.com/MofaggolHoshen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[--color-muted] no-underline transition-colors hover:text-[--color-accent] focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 rounded"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <span className="text-[--color-line]" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/in/mofaggol-hoshen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[--color-muted] no-underline transition-colors hover:text-[--color-accent] focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 rounded"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
