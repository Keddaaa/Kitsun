'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center" style={{ gap: '6px', marginBottom: '12px' }}>
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center" style={{ gap: '6px' }}>
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                style={{
                  fontFamily: 'Excon, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#000',
                  opacity: 0.4,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                className="hover:opacity-70"
              >
                {crumb.label}
              </Link>
            ) : (
              <span
                style={{
                  fontFamily: 'Excon, sans-serif',
                  fontSize: '16px',
                  fontWeight: isLast ? 500 : 400,
                  color: '#000',
                  opacity: isLast ? 1 : 0.4,
                }}
              >
                {crumb.label}
              </span>
            )}
            {!isLast && <ChevronRight size={14} strokeWidth={1.5} style={{ color: '#000', opacity: 0.4 }} />}
          </span>
        );
      })}
    </nav>
  );
}
