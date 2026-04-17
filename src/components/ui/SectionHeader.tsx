import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  tag?: string;
}

export function SectionHeader({ title, description, tag }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl mb-16"
    >
      {tag && (
        <div className="inline-flex items-center gap-2 mb-5">
          <span
            className="text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(99,102,241,0.12)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#818cf8',
            }}
          >
            {tag}
          </span>
        </div>
      )}
      <h2
        className="text-4xl md:text-6xl font-bold mb-6 text-white"
        style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
      >
        {title}
      </h2>
      <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#94a3b8' }}>
        {description}
      </p>
    </motion.div>
  );
}
