import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Wound Care Specialist | Laredo Family Foot Center",
  description:
    "Care for diabetic wounds and ulcers, infected wounds, pressure ulcers, and arterial ulcers in Laredo, TX.",
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="wound-checklist">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function WoundHeader({ index, title }: { index: number; title: string }) {
  return (
    <header className="wound-type-header">
      <span aria-hidden="true">{String(index).padStart(2, "0")}</span>
      <h3>{title}</h3>
    </header>
  );
}

export default function WoundCarePage() {
  return (
    <main className="service-page">
      <section className="wound-hero page-enter">
        <div className="shell wound-hero-inner">
          <div>
            <p className="eyebrow eyebrow-dark">Wound care in Laredo</p>
            <h1 className="section-title mt-4">Wound care specialist</h1>
            <div className="service-copy">
              <p>
                <strong>Laredo Family Foot Center</strong> knows how important it is to
                treat wounds as early as possible. If wounds or ulcers are left untreated
                they can lead to more serious complications. When you visit us you will
                know right away that you are in good hands. We make sure to give our full
                attention to each patient and make sure your questions are answered and
                your treatment is handled properly.
              </p>

              <p>
                For more than 30 years, Dr. Daniel Bell has successfully treated diabetic
                foot ulcers, helping patients heal and avoid serious complications.
                Through experience, careful evaluation, and individualized treatment
                plans, Dr. Bell provides specialized wound care focused on promoting
                healing and protecting the health of his patients’ feet.
              </p>
            </div>
          </div>
          <figure className="wound-hero-media">
            <img
              src="/wound-care.jpg"
              alt="Podiatrist wrapping a patient's foot with a bandage"
            />
          </figure>
        </div>
      </section>

      <section className="service-cta page-enter delay-3">
        <div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">For more information or to schedule an appointment</p>
            <h2>Do not hesitate and give us a call today.</h2>
          </div>
          <a href="tel:+19567123338" className="button button-light">
            <Phone size={16} /> Call (956) 712-FEET (3338)
          </a>
        </div>
      </section>
    </main>
  );
}
