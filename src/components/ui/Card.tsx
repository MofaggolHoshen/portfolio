import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ className = '', children, ...rest }: CardProps) {
  return (
    <div
      className={`bg-[--color-canvas] border border-[--color-line] rounded-xl p-6 transition-shadow duration-200 hover:shadow-md ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
