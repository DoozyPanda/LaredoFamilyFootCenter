'use client';

import { MapPin, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function QuickActions() {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <nav className="quick-actions" aria-label="Quick actions">
      <a href="tel:+19567123338" aria-label="Call office">
        <Phone size={19} aria-hidden="true" />
      </a>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045"
        target="_blank"
        rel="noreferrer"
        aria-label="Get directions"
      >
        <MapPin size={19} aria-hidden="true" />
      </a>
    </nav>
  );
}
