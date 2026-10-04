/** The bowl mark. Drawn as a CSS mask so its ink follows the theme tokens. */
export function Logo({ tone = 'brand', className = '' }: { tone?: 'brand' | 'walnut' | 'slate'; className?: string }) {
  return <span aria-hidden="true" className={`logo logo-${tone} ${className}`.trim()} />
}
