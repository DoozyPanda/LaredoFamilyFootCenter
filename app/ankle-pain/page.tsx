import type { Metadata } from 'next';
import {
  Activity,
  Phone,
  Pill,
  ScanLine,
  ShieldCheck,
  Syringe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ankle Pain Specialist | Laredo Family Foot Center',
  description:
    'Treatment for sprained ankles, tarsal tunnel syndrome, arthritis, ankle instability, gout, and fractures in Laredo, TX, with on-site X-ray.',
};

const causes = [
  'Tarsal Tunnel Syndrome',
  'Arthritis',
  'Ankle Instability',
  'Gout',
  'Fractured Ankle',
];
const symptoms = [
  'Pain',
  'Limited Mobility',
  'Stiffness',
  'Swelling',
  'Tenderness',
];
const treatments = [
  { icon: Pill, label: 'Medication' },
  { icon: Activity, label: 'Physical Therapy' },
  { icon: ShieldCheck, label: 'Ankle Brace or Supports' },
  { icon: Syringe, label: 'Steroid Injection' },
];
const rice = [
  { letter: 'R', word: 'Rest' },
  { letter: 'I', word: 'Ice' },
  { letter: 'C', word: 'Compression' },
  { letter: 'E', word: 'Elevation' },
];

export default function AnklePainPage() {
  return (
    <main className="service-page">
      <section className="ankle-hero page-enter">
        <div className="shell ankle-hero-inner">
          <div>
            <p className="eyebrow eyebrow-dark">Ankle care in Laredo</p>
            <h1 className="section-title mt-4">Ankle pain specialist</h1>
            <div className="service-copy">
              <p>
                <strong>Laredo Family Foot Center</strong> knows that the ankle
                is one of the most common places that is susceptible to pain and
                injury. This is because of its weight bearing function. If you
                are experiencing pain, swelling, or limited mobility it is best
                to come in right away.
              </p>
              <p>
                Laredo Family Foot Center has X-Ray Machine on-site to pin point
                the issue. Once it is diagnosed, we will explain what exactly is
                happening and give you your options. We believe for most cases
                non-surgical treatments is the solution. For more information
                call us today at{' '}
                <a href="tel:+19567123338">(956) 712-FEET (3338)</a>.
              </p>
            </div>
          </div>
          <aside className="ankle-xray" aria-label="On-site diagnostics">
            <span className="ankle-xray-icon">
              <ScanLine size={26} aria-hidden="true" />
            </span>
            <p className="ankle-xray-title">X-ray on-site</p>
            <p className="ankle-xray-copy">
              Pinpoint the issue in the same visit, with no referral and no
              second appointment.
            </p>
            <ol className="ankle-flow">
              <li>
                <span>1</span>Diagnose
              </li>
              <li>
                <span>2</span>Explain
              </li>
              <li>
                <span>3</span>Treat
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section
        className="ankle-causes page-enter delay-1"
        aria-labelledby="ankle-causes-title"
      >
        <div className="shell ankle-causes-inner">
          <div>
            <p className="eyebrow">Why it happens</p>
            <h2 id="ankle-causes-title" className="ankle-causes-heading">
              Causes for ankle pain
            </h2>
            <p className="ankle-causes-copy">
              Most of the time when someone experiences an ankle injury it is
              because of a sudden unnatural twist or force on the ankle commonly
              known as a sprained ankle. Other reasons can be because of
              excessive stretching or tearing of ligaments. Some other reasons
              include:
            </p>
            <ul className="ankle-cause-list">
              {causes.map((cause, index) => (
                <li key={cause}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {cause}
                </li>
              ))}
            </ul>
          </div>
          <figure className="ankle-causes-media">
            <img
              src="/podiatry-consultation.png"
              alt="Person holding a painful ankle"
            />
          </figure>
        </div>
      </section>

      <section className="service-cta page-enter delay-3">
        <div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Twisted, swollen, or sore?</p>
            <h2>Get your ankle checked the same day.</h2>
          </div>
          <a href="tel:+19567123338" className="button button-light">
            <Phone size={16} /> Call (956) 712-3338
          </a>
        </div>
      </section>
    </main>
  );
}
