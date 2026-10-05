import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  id?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', id, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose">{eyebrow}</p>
      )}
      <h2
        id={id}
        className="font-serif text-[2rem] font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
