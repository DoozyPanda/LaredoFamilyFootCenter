import Link from 'next/link';
import { CircleCheck, Clock3, MapPin, Phone } from 'lucide-react';
// email: Add Mail to the lucide-react import when restoring the email section below.
import { BusinessHours } from '@/components/business-hours';

const services = [
  {
    href: '/foot-pain',
    label: 'Diagnose and treat foot pain and foot ailments',
  },
  {
    href: '/heel-pain',
    label: 'Relieve heel pain like plantar fasciitis and heel spurs',
  },
  {
    href: '/ankle-pain',
    label: 'Treat ankle pain, sprains, and limited mobility',
  },
  { href: '/wound-care', label: 'Care for diabetic wounds and ulcers early' },
];

export default function ContactPage() {
  return (
    <>
      <main className="cx-page">
        <div className="cx-shell">
          <header className="cx-intro page-enter">
            <p className="cx-eyebrow">Contact us</p>
            <h1 className="cx-title">Get in touch with us</h1>
            <p className="cx-lede">
              {/* email: Restore "Call, email, or visit us in Laredo." when email is available. */}
              Call us to schedule an appointment at our Laredo office.
            </p>
          </header>

          <div className="cx-grid">
            <section
              className="cx-call page-enter delay-1"
              aria-labelledby="cx-call-title"
            >
              <div className="cx-contact-heading">
                <span className="cx-call-icon">
                  <Phone size={24} aria-hidden="true" />
                </span>
                <h2 id="cx-call-title">Call our office</h2>
              </div>
              <p>
                Our team can help you plan your visit and answer questions about
                foot and ankle care.
              </p>
              <a href="tel:+19567123338" className="cx-call-link">
                (956) 712-FEET (3338)
              </a>
              {/* email: Restore this contact option when email is available.
              <div className="cx-email">
                <div className="cx-contact-heading">
                  <span className="cx-call-icon">
                    <Mail size={20} aria-hidden="true" />
                  </span>
                  <h3>Email us</h3>
                </div>
                <a href="mailto:lffc@yahoo.com">lffc@yahoo.com</a>
              </div>
              */}
            </section>

            <aside
              className="cx-aside page-enter delay-2"
              aria-label="Clinic information"
            >
              <p className="cx-subhead">With our services you can</p>
              <ul className="cx-checks">
                {services.map((service) => (
                  <li key={service.href}>
                    <CircleCheck size={18} aria-hidden="true" />
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>

              <div className="cx-details">
                <div>
                  <p className="cx-detail-title">
                    <MapPin size={16} aria-hidden="true" /> Visit us
                  </p>
                  <p>
                    604 Shiloh Dr., Ste. #1
                    <br />
                    Laredo, TX 78045
                  </p>
                  <a
                    className="cx-detail-link"
                    href="https://www.google.com/maps/dir/?api=1&destination=604+Shiloh+Dr,+Laredo,+TX+78045"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get directions
                  </a>
                </div>
                <div>
                  <p className="cx-detail-title">
                    <Clock3 size={16} aria-hidden="true" /> Office hours
                  </p>
                  <BusinessHours />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
