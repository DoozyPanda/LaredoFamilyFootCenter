'use client';

import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Bone,
  CircleDot,
  Droplets,
  Flame,
  Footprints,
  HeartPulse,
  Layers,
  Microscope,
  Mountain,
  Phone,
  ScanLine,
  Shield,
  Sparkles,
  Stethoscope,
  Waves,
  Zap,
  type LucideIcon,
} from 'lucide-react';

type Category = 'everyday' | 'injuries' | 'specialized';

type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
  category: Category;
};

const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All services' },
  { id: 'everyday', label: 'Everyday care' },
  { id: 'injuries', label: 'Injuries & infections' },
  { id: 'specialized', label: 'Specialized care' },
];

const services: Service[] = [
  {
    name: 'Bunions, Bunionette & Tailor’s Bunions',
    description:
      'Relief for painful bony bumps at the big or little toe joint.',
    icon: Footprints,
    category: 'everyday',
  },
  {
    name: 'Hallux Limitus & Hallux Rigidus',
    description: 'Treatment for stiffness and arthritis in the big toe joint.',
    icon: Bone,
    category: 'everyday',
  },
  {
    name: 'Flat Feet (Fallen Arches)',
    description: 'Support and correction for collapsed or low arches.',
    icon: Waves,
    category: 'everyday',
  },
  {
    name: 'High Arched Feet',
    description: 'Care for excess pressure and instability from high arches.',
    icon: Mountain,
    category: 'everyday',
  },
  {
    name: 'Hammertoe',
    description: 'Straightening and relief for bent, contracted toes.',
    icon: Activity,
    category: 'everyday',
  },
  {
    name: 'Peripheral Neuropathy',
    description: 'Management of numbness, tingling and nerve pain.',
    icon: Zap,
    category: 'everyday',
  },
  {
    name: 'Stress Fractures',
    description: 'Diagnosis and healing of small overuse cracks in the bone.',
    icon: ScanLine,
    category: 'everyday',
  },
  {
    name: 'Accessory Navicular Syndrome',
    description: 'Treatment for an extra bone or cartilage on the inner foot.',
    icon: Layers,
    category: 'everyday',
  },
  {
    name: 'Ingrown Toenail',
    description: 'Gentle in-office care for painful, infected nail edges.',
    icon: Shield,
    category: 'injuries',
  },
  {
    name: 'Athlete’s Foot',
    description: 'Clearing itchy, burning fungal skin infections.',
    icon: Droplets,
    category: 'injuries',
  },
  {
    name: 'Neuromas',
    description: 'Relief for pinched nerves causing ball-of-foot pain.',
    icon: Zap,
    category: 'injuries',
  },
  {
    name: 'Charcot Neuroarthropathy',
    description: 'Protecting weakened bones and joints in neuropathic feet.',
    icon: HeartPulse,
    category: 'injuries',
  },
  {
    name: 'Fungal Nail',
    description: 'Restoring thick, discolored or brittle toenails.',
    icon: Microscope,
    category: 'injuries',
  },
  {
    name: 'Warts',
    description: 'Safe removal of stubborn plantar warts.',
    icon: CircleDot,
    category: 'injuries',
  },
  {
    name: 'Plantar Fibromas',
    description: 'Care for firm, benign knots in the arch of the foot.',
    icon: CircleDot,
    category: 'injuries',
  },
  {
    name: 'PTTD / Progressive Flatfoot',
    description:
      'Treating posterior tibial tendon dysfunction before arches collapse.',
    icon: Waves,
    category: 'injuries',
  },
  {
    name: 'Metatarsal Fractures',
    description: 'Healing breaks in the long bones of the forefoot.',
    icon: Bone,
    category: 'specialized',
  },
  {
    name: 'Corns & Calluses',
    description: 'Removing painful thickened skin and preventing return.',
    icon: Sparkles,
    category: 'specialized',
  },
  {
    name: 'Gout',
    description: 'Fast relief for sudden, inflamed joint flare-ups.',
    icon: Flame,
    category: 'specialized',
  },
  {
    name: 'LisFranc Fractures',
    description: 'Expert care for midfoot fractures and ligament injuries.',
    icon: ScanLine,
    category: 'specialized',
  },
  {
    name: 'Toe Fractures',
    description: 'Proper alignment and healing for broken toes.',
    icon: Footprints,
    category: 'specialized',
  },
  {
    name: 'Ganglion Cysts',
    description: 'Evaluation and treatment of fluid-filled lumps.',
    icon: CircleDot,
    category: 'specialized',
  },
  {
    name: 'Rheumatoid Arthritis',
    description: 'Managing joint pain and deformity caused by RA.',
    icon: Stethoscope,
    category: 'specialized',
  },
];

const categoryLabel: Record<Category, string> = {
  everyday: 'Everyday care',
  injuries: 'Injuries & infections',
  specialized: 'Specialized care',
};

export function FootServices() {
  const [active, setActive] = useState<Category | 'all'>('all');
  const visible =
    active === 'all'
      ? services
      : services.filter((service) => service.category === active);

  return (
    <section
      className="bg-[#f7eeee] py-20 md:py-24"
      aria-labelledby="foot-services-title"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-dark">Comprehensive care</p>
            <h2 id="foot-services-title" className="section-title mt-4">
              Foot services we offer
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-[#4a3f41] md:text-lg">
              From everyday discomfort to complex conditions, Dr. Bell treats{' '}
              {services.length} foot conditions in-office, always starting with
              non-surgical options first.
            </p>
          </div>
          <p
            className="font-display text-6xl leading-none text-[#880303] md:text-7xl"
            aria-hidden="true"
          >
            {services.length}
            <span className="ml-2 align-top font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#662d2e]">
              conditions
            </span>
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter services by category"
        >
          {categories.map((category) => {
            const isActive = active === category.id;
            const count =
              category.id === 'all'
                ? services.length
                : services.filter((s) => s.category === category.id).length;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(category.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#880303] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'border-[#880303] bg-[#880303] text-white'
                    : 'border-[#e3c4c6] bg-white text-[#662d2e] hover:border-[#880303] hover:text-[#880303]'
                }`}
              >
                {category.label}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-white/20 text-white' : 'bg-[#f3d2d4] text-[#880303]'}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map(({ name, description, icon: Icon, category }) => (
            <li
              key={name}
              className="group flex flex-col rounded-2xl border border-[#ecd6d7] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#880303] hover:shadow-[0_18px_40px_-20px_rgba(136,3,3,0.45)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f3d2d4] text-[#880303] transition-colors duration-300 group-hover:bg-[#880303] group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a0787a]">
                  {categoryLabel[category]}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl leading-snug text-[#242022]">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5c5153]">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#ecd6d7] bg-white p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="font-display text-2xl text-[#242022]">
              {'Don’t see your condition listed?'}
            </p>
            <p className="mt-1 text-sm text-[#5c5153]">
              Call us to discuss your symptoms and schedule an appointment.
            </p>
          </div>
          <a href="tel:+19567123338" className="button button-primary">
            <Phone size={16} /> (956) 712-3338 <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
