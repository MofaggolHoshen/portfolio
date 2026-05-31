const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[--color-line] bg-[--color-canvas]">
      <div className="flex items-center justify-between gap-6 px-8 py-4 flex-wrap max-sm:px-5 max-sm:py-3">
        <a
          href="#hero"
          aria-label="Home"
          className="text-lg font-bold text-[--color-strong] no-underline transition-colors hover:text-[--color-accent]"
        >
          MH
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-3 py-2 text-sm text-[--color-muted] no-underline transition-colors hover:bg-[--color-subtle] hover:text-[--color-strong] focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2 max-sm:px-2 max-sm:text-xs"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
