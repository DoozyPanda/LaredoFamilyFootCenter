'use client';

import { Check, Stethoscope } from 'lucide-react';
import { useState } from 'react';

const conditions = [
  {
    name: 'Plantar Fasciitis',
    symptomsLabel: 'Causes & symptoms of plantar fasciitis',
    symptoms: [
      'Foot Pain',
      'Swelling',
      'Weakness in the Foot',
      'Fallen Arches',
      'Difficulty Walking & Balancing',
    ],
    treatments: [
      'Physical Therapy',
      'Medication',
      'Foot Surgery',
      'Custom Orthotics',
      'Patient Education',
    ],
  },
  {
    name: 'Achilles Tendonitis',
    symptomsLabel: 'Symptoms of Achilles tendon injury',
    symptoms: [
      'Pain',
      'Stiffness',
      'Tenderness',
      'Swelling & Inflammation',
      'Decreased Flexibility',
      'Weakness in Foot & Ankle',
    ],
    treatments: [
      'Physical Therapy',

      'Medication',
      'Custom Orthotics',
      'Patient Education',
    ],
  },
  {
    name: 'Calcaneal Stress Fractures',
    symptomsLabel: 'Symptoms of stress fractures',
    symptoms: ['Pain', 'Swelling', 'Limping', 'Tenderness'],
    treatments: [
      'Placed in walking boot, brace, or crutches',
      'Surgery',
      'Physical Therapy',
    ],
  },
  {
    name: 'Heel Spurs',
    symptomsLabel: 'Causes & symptoms of heel spurs',
    symptoms: [
      'Abnormal Gait',
      'Excessive Weight',
      'Walking on hard surfaces',
      'Diabetes',
      'Flat Feet',
      'Wrong Shoes',
      'Genetic Conditions',
      'Calcium Deposit Growth',
      'Heel Pain',
      'Limited Mobility',
    ],
    treatments: [
      'Custom Orthotics',
      'Injection Therapy',
      'Physical Therapy',
      'Medications',
      'Patient Education',
      'Heel Surgery',
    ],
  },
];

export function HeelConditions() {
  const [active, setActive] = useState(0);
  const condition = conditions[active];

  return (
    <section
      className="heel-conditions"
      aria-labelledby="heel-conditions-title"
    >
      <div className="shell relative">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Know your diagnosis</p>
            <h2 id="heel-conditions-title" className="heel-conditions-title">
              Causes &amp; treatments of heel pain
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#f3d2d4]">
            Select a condition to see its common symptoms and how Dr. Bell can
            help treat it.
          </p>
        </div>

        <div className="heel-explorer">
          <div
            role="tablist"
            aria-label="Heel conditions"
            aria-orientation="vertical"
            className="heel-tabs"
          >
            {conditions.map((item, index) => (
              <button
                key={item.name}
                id={`heel-tab-${index}`}
                role="tab"
                aria-selected={active === index}
                aria-controls="heel-panel"
                className="heel-tab"
                onClick={() => setActive(index)}
              >
                <span className="heel-tab-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          <div
            id="heel-panel"
            role="tabpanel"
            aria-labelledby={`heel-tab-${active}`}
            className="heel-panel"
            key={condition.name}
          >
            <h3 className="heel-panel-title">{condition.name}</h3>
            <div className="heel-panel-grid">
              <div>
                <p className="heel-panel-label">{condition.symptomsLabel}</p>
                <ul className="heel-symptoms">
                  {condition.symptoms.map((symptom) => (
                    <li key={symptom}>
                      <span aria-hidden="true" className="heel-dot" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="heel-treatments-box">
                <p className="heel-panel-label flex items-center gap-2">
                  <Stethoscope size={15} aria-hidden="true" /> Treatments
                </p>
                <ul className="heel-treatments">
                  {condition.treatments.map((treatment) => (
                    <li key={treatment}>
                      <Check size={15} aria-hidden="true" />
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
