import { Link } from "wouter";
import { JsonLd } from "@/components/json-ld";
import { buildBreadcrumbSchema, type Crumb } from "@/lib/schema";
import { cn } from "@/lib/utils";

export type { Crumb };

/**
 * Visible breadcrumb trail with matching BreadcrumbList JSON-LD.
 * Kept intentionally subtle so it blends with the existing dark design.
 */
export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("relative z-10", className)}>
      <JsonLd data={buildBreadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-gold-500/60" aria-hidden="true">/</span>}
            {c.href ? (
              <Link
                href={c.href}
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                {c.label}
              </Link>
            ) : (
              <span className="text-white/70">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
