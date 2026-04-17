import { motion, type Variants } from 'framer-motion';
import type { ComponentType } from 'react';

interface Skill {
  name: string;
  icon: ComponentType<{ size?: number | string; className?: string; style?: React.CSSProperties }>;
}

import { skillsData } from '../../config/skills.config';

type Category = keyof typeof skillsData;

interface Props {
  category: Category;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.08, y: -6 }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default skill-card"
    >
      {/* Glow blob on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(99,102,241,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Icon container */}
      <div className="relative z-10 p-3 rounded-xl icon-box transition-all duration-300">
        <Icon size={24} className="icon-inner" />
      </div>

      {/* Name */}
      <span className="relative z-10 text-xs font-medium text-center leading-tight skill-name">
        {skill.name}
      </span>
    </motion.div>
  );
}

export function SkillGrid({ category }: Props) {
  const skills = skillsData[category];
  
  return (
    <>
      <style>{`
        .skill-card {
          background: rgba(8,14,24,0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(99,102,241,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .skill-card:hover {
          border-color: rgba(99,102,241,0.45);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.15),
            0 8px 32px rgba(99,102,241,0.2),
            0 0 60px rgba(99,102,241,0.05);
        }
        .icon-box {
          background: rgba(99,102,241,0.08);
          color: rgba(98,114,164,0.9);
        }
        .skill-card:hover .icon-box {
          background: rgba(99,102,241,0.15);
          color: #818cf8;
          box-shadow: 0 0 20px rgba(99,102,241,0.25);
        }
        .icon-inner {
          color: inherit;
          transition: color 0.3s ease;
        }
        .skill-name {
          color: #94a3b8;
          font-family: 'Inter', sans-serif;
          transition: color 0.3s ease;
        }
        .skill-card:hover .skill-name {
          color: #e2e8f0;
        }
      `}</style>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
      >
        {skills.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </>
  );
}
