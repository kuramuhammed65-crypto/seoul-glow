import { Download, Lock, Smartphone, Tag } from 'lucide-react'

const items = [
  { icon: Download, label: 'Instant digital delivery' },
  { icon: Smartphone, label: 'Read on phone, tablet or computer' },
  { icon: Tag, label: 'One-time payment — $9' },
  { icon: Lock, label: 'Secure checkout' },
]

export function TrustIndicators() {
  return (
    <ul className="grid grid-cols-1 gap-x-4 gap-y-3 min-[400px]:grid-cols-2">
      {items.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-start gap-2.5 text-sm leading-snug text-muted-foreground">
          <Icon aria-hidden="true" strokeWidth={1.75} className="mt-0.5 size-4 shrink-0 text-rose" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
