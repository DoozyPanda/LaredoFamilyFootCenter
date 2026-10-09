'use client'

import Link from 'next/link'
import { MapPin, Menu, Phone, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

const navLinks = [
  { href: '/#about-dr.-bell', label: 'About Dr. Bell' },
  { href: '/foot-pain', label: 'Foot pain' },
  { href: '/heel-pain', label: 'Heel pain' },
  { href: '/ankle-pain', label: 'Ankle pain' },
  { href: '/wound-care', label: 'Wound care' },
  { href: '/contact', label: 'Contact us' },
]

export const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-001-910x694-270w-WQh8o2bS2kfSkC8PGiAoSxMP2fcl8Z.webp'

export function SiteHeader() {
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDetailsElement>(null)

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false
  }

  const renderNavLinks = (onNavigate?: () => void) => navLinks.map((link) => (
    <Link
      key={link.href}
      className="nav-link"
      href={link.href}
      aria-current={pathname === link.href ? 'page' : undefined}
      onClick={onNavigate}
    >
      {link.label}
    </Link>
  ))

  return (
    <>
      <div className="topbar">
        <div className="shell flex items-center justify-between gap-4">
          <span>Serving Laredo & South Texas since 1994</span>
          <a href="tel:+19567123338">Call the office: (956) 712-3338</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell flex items-center justify-between gap-2 py-4 md:gap-8 md:py-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Laredo Family Foot Center home">
            <img src={logo} alt="Family Foot Center of Laredo logo" className="h-20 w-24 object-contain md:h-24 md:w-32" />
            <span className="hidden whitespace-nowrap border-l border-[#cd9c9e] pl-4 text-sm text-[#880303] sm:block">
              <strong>LAREDO FAMILY FOOT CENTER</strong>
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <div className="text-right">
              <p className="font-display text-3xl text-[#880303]">Dr. Daniel Bell, DPM</p>
            </div>
            <a href="tel:+19567123338" className="button button-primary">
              <Phone size={16} /> Call today
            </a>
          </div>
          <p className="mobile-doctor-name md:hidden">
            <span>Dr. Daniel Bell</span>
            <span>DPM</span>
          </p>
          <details key={pathname} ref={mobileMenuRef} className="mobile-menu md:hidden">
            <summary aria-label="Toggle navigation">
              <Menu className="mobile-menu-open-icon" aria-hidden="true" />
              <X className="mobile-menu-close-icon" aria-hidden="true" />
            </summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <div className="shell flex flex-col gap-1 py-3">
                {renderNavLinks(closeMobileMenu)}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-action"
                  onClick={closeMobileMenu}
                >
                  <MapPin size={15} /> Get directions
                </a>
              </div>
            </nav>
          </details>
        </div>
        <nav className="hidden border-t border-[#f3d2d4] bg-white md:block" aria-label="Main navigation">
          <div className="shell flex flex-col gap-1 py-3 md:flex-row md:items-center md:justify-between md:py-0">
            <div className="flex flex-col md:flex-row md:items-center">
              {renderNavLinks()}
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045"
              target="_blank"
              rel="noreferrer"
              className="nav-action"
            >
              <MapPin size={15} /> Get directions
            </a>
          </div>
        </nav>
      </header>
    </>
  )
}
