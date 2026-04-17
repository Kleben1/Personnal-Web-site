import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Syntax tokens for a richer look
const CODE_TOKENS = [
  { text: '// ', color: '#6272a4' },
  { text: 'Kieran Lelong', color: '#50fa7b' },
  { text: ' • Architecte de Solutions IT\n', color: '#6272a4' },
  { text: '\n', color: '' },
  { text: 'class ', color: '#ff79c6' },
  { text: 'SolutionArchitect', color: '#8be9fd' },
  { text: ' {\n', color: '#f8f8f2' },
  { text: '  constructor', color: '#50fa7b' },
  { text: '(', color: '#f8f8f2' },
  { text: 'client', color: '#ffb86c' },
  { text: ') {\n', color: '#f8f8f2' },
  { text: '    this', color: '#ff79c6' },
  { text: '.needs   = ', color: '#f8f8f2' },
  { text: 'analyse', color: '#50fa7b' },
  { text: '(client);\n', color: '#f8f8f2' },
  { text: '    this', color: '#ff79c6' },
  { text: '.stack   = new ', color: '#f8f8f2' },
  { text: 'TechStack', color: '#8be9fd' },
  { text: '();\n', color: '#f8f8f2' },
  { text: '    this', color: '#ff79c6' },
  { text: '.target  = ', color: '#f8f8f2' },
  { text: '"Excellence"', color: '#f1fa8c' },
  { text: ';\n', color: '#f8f8f2' },
  { text: '  }\n', color: '#f8f8f2' },
  { text: '\n', color: '' },
  { text: '  async ', color: '#ff79c6' },
  { text: 'build', color: '#50fa7b' },
  { text: '() {\n', color: '#f8f8f2' },
  { text: '    const ', color: '#ff79c6' },
  { text: 'plan ', color: '#f8f8f2' },
  { text: '= await ', color: '#ff79c6' },
  { text: 'this', color: '#ff79c6' },
  { text: '.design();\n', color: '#f8f8f2' },
  { text: '    const ', color: '#ff79c6' },
  { text: 'code ', color: '#f8f8f2' },
  { text: '= await ', color: '#ff79c6' },
  { text: 'this', color: '#ff79c6' },
  { text: '.develop(plan);\n', color: '#f8f8f2' },
  { text: '    return ', color: '#ff79c6' },
  { text: 'deploy', color: '#50fa7b' },
  { text: '(code, { env: ', color: '#f8f8f2' },
  { text: '"production"', color: '#f1fa8c' },
  { text: ' });\n', color: '#f8f8f2' },
  { text: '  }\n', color: '#f8f8f2' },
  { text: '}\n', color: '#f8f8f2' },
  { text: '\n', color: '' },
  { text: '// ', color: '#6272a4' },
  { text: 'Initialisation\n', color: '#6272a4' },
  { text: 'const ', color: '#ff79c6' },
  { text: 'projet ', color: '#f8f8f2' },
  { text: '= new ', color: '#f8f8f2' },
  { text: 'SolutionArchitect', color: '#8be9fd' },
  { text: '(', color: '#f8f8f2' },
  { text: '"Votre entreprise"', color: '#f1fa8c' },
  { text: ');\n', color: '#f8f8f2' },
  { text: 'projet', color: '#f8f8f2' },
  { text: '.build()', color: '#50fa7b' },
  { text: '.then(result => ', color: '#f8f8f2' },
  { text: 'console', color: '#8be9fd' },
  { text: '.log(', color: '#f8f8f2' },
  { text: '`✅ Livré : ${result}`', color: '#f1fa8c' },
  { text: '));\n', color: '#f8f8f2' },
];

// Flatten tokens to char-level for typing
function buildCharArray(tokens: typeof CODE_TOKENS) {
  const chars: { char: string; color: string }[] = [];
  for (const token of tokens) {
    for (const char of token.text) {
      chars.push({ char, color: token.color });
    }
  }
  return chars;
}

const CHARS = buildCharArray(CODE_TOKENS);

// Line numbers
function countLines(chars: typeof CHARS, upTo: number) {
  let lines = 1;
  for (let i = 0; i < upTo; i++) {
    if (chars[i].char === '\n') lines++;
  }
  return lines;
}

export function Terminal() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start typing when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [started]);

  // Typing with variable speed
  useEffect(() => {
    if (!started || revealedCount >= CHARS.length) return;
    const nextChar = CHARS[revealedCount];
    // Pause longer on newlines, punctuation, brackets
    const delay =
      nextChar.char === '\n' ? 60 :
      '(){}[];'.includes(nextChar.char) ? 35 :
      ' '.includes(nextChar.char) ? 15 :
      10 + Math.random() * 20;

    timerRef.current = setTimeout(() => {
      setRevealedCount(c => c + 1);
    }, delay);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [started, revealedCount]);

  const totalLines = countLines(CHARS, CHARS.length);
  const visibleLines = countLines(CHARS, revealedCount);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="terminal-wrapper"
    >
      {/* Title bar */}
      <div className="terminal-titlebar">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57', boxShadow: '0 0 6px rgba(255,95,87,0.6)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e', boxShadow: '0 0 6px rgba(255,189,46,0.6)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#27c840', boxShadow: '0 0 6px rgba(39,200,64,0.6)' }} />
        </div>
        <div className="flex-1 text-center text-xs font-mono" style={{ color: '#6272a4' }}>
          build-solution.js — Kieran Lelong Portfolio
        </div>
        <div className="flex gap-3 text-xs font-mono" style={{ color: '#6272a4' }}>
          <span>JavaScript</span>
          <span>UTF-8</span>
        </div>
      </div>

      {/* Code area */}
      <div className="terminal-content flex gap-0">
        {/* Line numbers gutter */}
        <div
          className="flex-shrink-0 pr-4 text-right select-none"
          style={{
            color: '#44475a',
            fontSize: '0.8rem',
            lineHeight: '1.8',
            minWidth: '2.5rem',
            borderRight: '1px solid rgba(99,102,241,0.1)',
            paddingLeft: '8px',
          }}
        >
          {Array.from({ length: Math.max(visibleLines, 1) }, (_, i) => (
            <div key={i} style={{ color: i + 1 === visibleLines ? '#818cf8' : '#44475a' }}>
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex-1 pl-4 relative z-10">
          <pre style={{ fontFamily: "'Fira Code', monospace", fontSize: '0.875rem', lineHeight: '1.8', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {CHARS.slice(0, revealedCount).map((c, i) => (
              <span key={i} style={{ color: c.color || '#f8f8f2' }}>
                {c.char}
              </span>
            ))}
            {/* Blinking cursor */}
            {revealedCount < CHARS.length && (
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1em',
                  background: '#818cf8',
                  verticalAlign: 'text-bottom',
                  boxShadow: '0 0 8px rgba(129,140,248,0.8)',
                  animation: 'blink-cursor 1s step-end infinite',
                  borderRadius: '1px',
                }}
              />
            )}
            {revealedCount >= CHARS.length && (
              <span style={{ color: '#50fa7b' }}>
                {'\n// ✅ Build succès — En attente de votre projet...'}
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    background: '#50fa7b',
                    verticalAlign: 'text-bottom',
                    boxShadow: '0 0 8px rgba(80,250,123,0.8)',
                    animation: 'blink-cursor 1s step-end infinite',
                    borderRadius: '1px',
                    marginLeft: '2px',
                  }}
                />
              </span>
            )}
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
