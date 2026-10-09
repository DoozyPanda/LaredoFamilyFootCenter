import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { logo } from '@/components/site-header';
import { BusinessHours } from '@/components/business-hours';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img
            src={logo}
            alt="Family Foot Center of Laredo logo"
            className="footer-logo"
          />
          <p>
            Professional foot and ankle care for Laredo families, since 1994.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-heading">Browse our website</p>
          <Link href="/">Home</Link>
          <Link href="/foot-pain">Foot pain</Link>
          <Link href="/heel-pain">Heel pain</Link>
          <Link href="/ankle-pain">Ankle pain</Link>
          <Link href="/wound-care">Wound care</Link>
          <Link href="/#about-dr.-bell">About Dr. Bell</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="footer-column footer-contact">
          <p className="footer-heading">Contact information</p>
          <p>
            <b>Address</b>
            <br />
            604 Shiloh Dr., Ste. #1
            <br />
            Laredo, TX 78045
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045"
            target="_blank"
            rel="noreferrer"
            className="footer-directions"
          >
            Get directions <MapPin size={16} aria-hidden="true" />
          </a>
          <p>
            <b>Phone</b>
            <br />
            <a href="tel:+19567123338">(956) 712-3338</a>
          </p>
        </div>
        <div className="footer-column footer-hours">
          <p className="footer-heading">Business hours</p>
          <BusinessHours />
        </div>
      </div>
      <div
        className="shell footer-payments"
        aria-label="Accepted payment methods"
      >
        <p>We accept</p>
        <div className="payment-methods">
          <img src="/images/visa.png" alt="Visa" className="payment-logo" />
          <img
            src="/images/mastercard.png"
            alt="Mastercard"
            className="payment-logo"
          />
          <img
            src="/images/amex.png"
            alt="American Express"
            className="payment-logo"
          />
          <img src="/images/cash.svg" alt="Cash" className="payment-logo" />
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Laredo Family Foot Center.</p>
        <p className="footer-credit">
          Created by{' '}
          <a
            href="https://laredowebdesigns.com"
            target="_blank"
            rel="noreferrer"
          >
            Laredo Web Designs
          </a>
        </p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
