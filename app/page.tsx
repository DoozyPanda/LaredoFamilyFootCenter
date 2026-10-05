'use client';

import Link from 'next/link';
import { BusinessHours } from '@/components/business-hours';
import {
  ArrowRight,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react';

const heroImage = '/foot-care-hero.png';
const serviceImages = {
  foot: '/foot-pain.png',
  heel: '/heel-pain.png',
  ankle: '/ankle-care.png',
  wound: '/wound-care.jpg',
};

const services = [
  {
    title: 'Foot pain',
    image: serviceImages.foot,
    copy: 'Relief for everyday pain, injuries, bunions, fractures, and more.',
  },
  {
    title: 'Heel pain',
    image: serviceImages.heel,
    copy: 'Personalized care for plantar fasciitis, tendonitis, and heel spurs.',
  },
  {
    title: 'Ankle care',
    image: serviceImages.ankle,
    copy: 'Expert treatment for sprains, instability, arthritis, and fractures.',
  },
  {
    title: 'Wound care',
    image: serviceImages.wound,
    copy: 'Early, attentive care for diabetic wounds, ulcers, and infections.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f8] text-[#242022]">
      <section id="top" className="hero">
        <img
          src={heroImage}
          alt="Family walking barefoot through a sunny field"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="shell relative z-10 flex min-h-155 items-center py-20">
          <div className="max-w-3xl text-white">
            <p className="eyebrow animate-rise">
              Laredo&apos;s trusted foot & ankle specialist
            </p>
            <h1 className="animate-rise delay-1 mt-5 max-w-2xl font-display text-5xl leading-[.98] md:text-8xl">
              Get back to the life you love.
            </h1>
            <p className="animate-rise delay-2 mt-7 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Compassionate, experienced care from{' '}
              <strong className="whitespace-nowrap text-white">
                Dr. Daniel Bell
              </strong>{' '}
              for every step, stride, and season of life.
            </p>
            <div className="animate-rise delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+19567123338" className="button button-light">
                <Phone size={17} /> Call (956) 712-3338
              </a>
              <a href="#services" className="button button-ghost">
                Explore our care <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-note">
          25+ years
          <br />
          <span>of putting patients first</span>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="shell grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="eyebrow eyebrow-dark">
              Professional care, close to home
            </p>
            <h2 className="section-title mt-4">
              Your feet carry your whole story.
            </h2>
          </div>
          <div>
            <p className="large-copy">
              Since 1994, Laredo Family Foot Center has helped patients across
              Laredo and surrounding areas move with less pain and more
              confidence. We combine thoughtful diagnosis with surgical and
              non-surgical treatment tailored to your life.
            </p>
            <a href="#about-dr.-bell" className="text-link mt-6 inline-flex">
              Meet Dr. Daniel Bell <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow eyebrow-dark">Focused expertise</p>
              <h2 className="section-title mt-3">Care for every step.</h2>
            </div>
            <p className="max-w-sm text-[#662d2e]">
              From a new injury to ongoing diabetic foot care, we are here when
              you need us.
            </p>
          </div>
          <div className="service-grid mt-12">
            {services.map((service, index) => (
              <Link
                href={
                  service.title === 'Foot pain'
                    ? '/foot-pain'
                    : service.title === 'Heel pain'
                      ? '/heel-pain'
                      : service.title === 'Ankle care'
                        ? '/ankle-pain'
                        : '/wound-care'
                }
                key={service.title}
                className={`service-card service-card-${index + 1}`}
              >
                <img src={service.image} alt={`${service.title} treatment`} />
                <div className="service-card-shade" />
                <div className="service-card-content">
                  <h3 className="font-display text-3xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
                    {service.copy}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Learn more <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="why-section section-pad">
        <div className="shell grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="eyebrow eyebrow-dark">The Bell difference</p>
            <h2 className="section-title mt-4">
              Experienced hands. A personal approach.
            </h2>
            <p className="large-copy mt-6">
              As a former state-champion distance runner, Dr. Bell understands
              foot pain firsthand. That perspective helps him listen closely,
              explain your options clearly, and build a plan that fits your
              goals.
            </p>
          </div>
          <div className="feature-list">
            <div>
              <ShieldCheck />
              <div>
                <h3>25+ years of experience</h3>
                <p>Serving families throughout Laredo since 1994.</p>
              </div>
            </div>
            <div>
              <HeartPulse />
              <div>
                <h3>Personalized treatment</h3>
                <p>We never rush the care or conversation you deserve.</p>
              </div>
            </div>
            <div>
              <Stethoscope />
              <div>
                <h3>Surgical & non-surgical options</h3>
                <p>Thoughtful care for injuries, diabetes, and daily pain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-dr.-bell" className="doctor-section">
        <div className="shell grid gap-10 md:grid-cols-[.6fr_1.4fr] md:items-center">
          <div>
            <p className="eyebrow">Your local podiatrist</p>
            <p className="mt-3 font-display text-4xl text-white">
              Dr. Daniel Bell,
              <br />
              D.P.M.
            </p>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">
            Dr. Bell is a Laredo native, graduate of UT Austin and Barry
            University School of Podiatric Medicine, and completed a two-year
            surgical residency in Houston. He brings advanced training and
            hometown understanding to every visit.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="shell contact-preview">
          <div>
            <p className="eyebrow eyebrow-dark">Let&apos;s get you moving</p>
            <h2 className="section-title mt-4">Your next step starts here.</h2>
            <p className="large-copy mt-5 max-w-lg">
              Call our office to schedule an appointment at our Laredo location.
            </p>
            <Link href="/contact" className="button button-primary mt-8">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="contact-summary">
            <div className="contact-row">
              <MapPin />
              <div>
                <strong>Visit us</strong>
                <p>
                  604 Shiloh Dr., Ste. #1
                  <br />
                  Laredo, TX 78045
                </p>
              </div>
            </div>
            <div className="contact-row">
              <Clock3 />
              <div>
                <strong>Office hours</strong>
                <BusinessHours />
              </div>
            </div>
            <div className="contact-row">
              <Phone />
              <div>
                <strong>Call us</strong>
                <p>
                  <a href="tel:+19567123338">(956) 712-3338</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
