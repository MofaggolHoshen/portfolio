export function Footer() {
  return (
    <footer className="border-t border-[--color-line] px-8 py-8 max-sm:px-5 max-sm:py-6">
      <div className="text-center">
        <p className="text-sm text-[--color-muted]">
          © {new Date().getFullYear()} Mofaggol Hoshen. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
