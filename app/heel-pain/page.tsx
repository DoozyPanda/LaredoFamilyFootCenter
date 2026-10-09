import type { Metadata } from 'next';
import { Activity, Phone, Scissors, Search } from 'lucide-react';
import { HeelConditions } from '@/components/heel-conditions';

export const metadata: Metadata = {
  title: 'Heel Pain Specialist | Laredo Family Foot Center',
  description:
    'Diagnosis and treatment of plantar fasciitis, Achilles tendonitis, calcaneal stress fractures, and heel spurs in Laredo, TX with Dr. Daniel Bell, DPM.',
};

const approach = [
  {
    icon: Search,
    step: 'Step 01',
    title: 'Accurate diagnosis',
    copy: 'Dr. Bell identifies the exact cause of your heel pain using the latest equipment.',
  },
  {
    icon: Activity,
    step: 'Step 02',
    title: 'Non-surgical first',
    copy: 'Caught early, most heel issues respond best to physical therapy and rehabilitation.',
  },
  {
    icon: Scissors,
    step: 'Step 03',
    title: 'Surgery if needed',
    copy: 'In the rare case conservative care isn’t enough, we review the best surgical options for you.',
  },
];

export default function HeelPainPage() {
  return (
    <main className="service-page">
      <section className="heel-hero page-enter">
        <div className="shell heel-hero-inner">
          <div>
            <p className="eyebrow eyebrow-dark">
              Heel pain treatment in Laredo
            </p>
            <h1 className="section-title mt-4">Heel pain specialist</h1>
            <div className="service-copy">
              <p>
                <strong>Laredo Family Foot Center</strong> knows that your heel
                plays a key role in mobility and also holds a lot of stress with
                each step. With 25 years of experience, we specialize in
                diagnosing and treating the different causes of pain that can
                affect your heel. We use the latest equipment for non-surgical
                methods. We believe for most heel issues if caught early
                physical therapy and rehabilitation work best. If this
                isn&apos;t successful, which is very rare, we will look at the
                best surgical options for you.
              </p>
              <p>
                We want to make sure that you are comfortable and educated on
                your condition. Dr. Bell will explain in detail what you can do
                to help treat and prevent further injury to your heels. For more
                information give us a call today at{' '}
                <a href="tel:+19567123338">(956) 712-FEET (3338)</a>.
              </p>
            </div>
          </div>
          <figure className="heel-hero-media">
            <img
              src="/heel-pain.png"
              alt="Patient holding her heel while seated on an exam table at the podiatry office"
            />
            <figcaption className="heel-badge">
              <strong>25</strong>
              <span>
                years treating
                <br />
                Laredo heels
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="page-enter delay-1">
        <HeelConditions />
      </div>

      <section
        className="heel-approach page-enter delay-2"
        aria-labelledby="heel-approach-title"
      >
        <div className="shell">
          <p className="eyebrow eyebrow-dark">Our approach</p>
          <h2 id="heel-approach-title" className="section-title mt-3 max-w-2xl">
            A clear path back to pain-free steps.
          </h2>
          <ol className="heel-steps">
            {approach.map(({ icon: Icon, step, title, copy }) => (
              <li key={title} className="heel-step">
                <div className="flex items-center justify-between">
                  <span className="heel-step-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.19em] text-[#cd9c9e]">
                    {step}
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="service-cta page-enter delay-3">
        <div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Don&apos;t walk through the pain</p>
            <h2>Let&apos;s get your heels feeling right again.</h2>
          </div>
          <a href="tel:+19567123338" className="button button-light">
            <Phone size={16} /> Call (956) 712-3338
          </a>
        </div>
      </section>
    </main>
  );
}
