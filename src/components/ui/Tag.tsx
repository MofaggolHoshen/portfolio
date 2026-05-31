interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full bg-[--color-accent-10] text-[--color-accent] border border-[--color-accent-50] whitespace-nowrap">
      {label}
    </span>
  )
}
