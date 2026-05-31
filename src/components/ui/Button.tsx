import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-[--color-accent] text-white border-[--color-accent] hover:opacity-90 hover:shadow-md',
  secondary:
    'bg-transparent text-[--color-accent] border-[--color-accent-50] hover:bg-[--color-accent-10]',
  ghost:
    'bg-transparent text-[--color-strong] border-[--color-line] hover:bg-[--color-subtle]',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-5 py-3',
  lg: 'text-base px-8 py-4',
}

const BASE =
  'inline-flex items-center justify-center gap-2 font-medium border-2 rounded-lg cursor-pointer no-underline transition-all duration-200 whitespace-nowrap leading-none focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
