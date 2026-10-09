import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foot Pain Specialist | Laredo Family Foot Center",
  description:
    "Laredo Family Foot Center manages and treats foot pain that has been caused by injuries or skin infections such as fractures, Athlete's Foot, Bunions, and more.",
};

export default function FootPainPage() {
  return (
    <main className="bg-[#faf9f8] text-[#242022]">
      <section className="page-enter bg-white pt-16 pb-13.5 md:pt-22 md:pb-19.5">
        <div className="shell">
          <p className="eyebrow eyebrow-dark">Specialized podiatric care</p>
          <h1 className="section-title mt-4 max-w-175">Foot pain specialist</h1>
          <div className="mt-7 max-w-250 text-base leading-[1.7] text-[#242022] md:text-[17px] [&>p+p]:mt-4.5 [&_a]:font-bold [&_a]:text-[#880303] [&_a]:underline">
            <p>
              Getting you back on your feet and pain free is{" "}
              <strong>Laredo Family Foot Center&apos;s</strong> main goal. We specialize
              in diagnosing and treating a wide range of foot ailments. 25 years of
              treating <strong>Laredo</strong> makes us the best choice in the area for
              your foot needs. Dr. Bell stays up to date on the latest treatments to
              better serve our patients.
            </p>
            <p>
              We know your schedule can be busy, and we want to make care as easy as
              possible. For more information or to schedule an appointment, call us at{" "}
              <a href="tel:+19567123338">(956) 712-FEET (3338)</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="page-enter delay-1 relative overflow-hidden bg-[#163d1d] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #092712e8, #092712a8), url('/foot-care-hero.png')",
          }}
        />
        <div className="shell relative grid items-center gap-10.5 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-19">
          <div className="max-w-155">
            <p className="eyebrow">Personalized treatment</p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
              Foot pain
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-[#fffdfd]">
              Laredo Family Foot Center has the experience to effectively diagnose your
              foot pain. We will recommend our best course of action to treat your pain.
              What we can guarantee and give you peace of mind, is that we will look and
              try every option that is non-surgical first. If that does not do the trick,
              then we can look at surgical options to best correct the pain.
            </p>
          </div>
          <img
            src="/foot-pain.png"
            alt="Patient receiving care for foot pain"
            className="aspect-[1.35] w-full max-w-110 justify-self-start object-cover shadow-[10px_10px_0_#880303] md:justify-self-end md:shadow-[18px_18px_0_#880303]"
          />
        </div>
      </section>

      <section className="page-enter delay-3 bg-[#662d2e] py-16 text-white">
        <div className="shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Ready for relief?</p>
            <h2 className="mt-3 max-w-155 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">
              Take your next step with confidence.
            </h2>
          </div>
          <a
            href="tel:+19567123338"
            className="button button-light shrink-0 whitespace-nowrap max-[520px]:gap-1.75 max-[520px]:px-3 max-[520px]:text-xs"
          >
            <Phone size={16} /> Call (956) 712-3338
          </a>
        </div>
      </section>
    </main>
  );
}
