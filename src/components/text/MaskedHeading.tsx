import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LUXURY_EASE } from '../../utils/motion';

export interface MaskedHeadingProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
  italicWords?: string[];
  italicClassName?: string;
  id?: string;
}

export const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  stagger = 0.045,
  italicWords = [],
  italicClassName = 'italic font-serif text-crimson',
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Parse words while supporting markdown style *italic* or italicWords array
  const words = children.split(' ').map((word) => {
    const isMarkdownItalic = word.startsWith('*') && word.endsWith('*') && word.length > 2;
    const cleanWord = isMarkdownItalic ? word.slice(1, -1) : word;
    const isMatchedItalic = isMarkdownItalic || italicWords.some((iw) => cleanWord.toLowerCase().includes(iw.toLowerCase()));
    return {
      text: cleanWord,
      isItalic: isMatchedItalic,
    };
  });

  // If reduced motion is requested, render clean static markup immediately with formatting preserved
  if (shouldReduceMotion) {
    return (
      <Component id={id} className={className}>
        {words.map((item, index) => (
          <span
            key={`${item.text}-${index}`}
            className={`inline-block mr-[0.26em] last:mr-0 ${item.isItalic ? italicClassName : ''}`}
          >
            {item.text}
          </span>
        ))}
      </Component>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.82,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <Component id={id} className={className}>
      <motion.span
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-30px' }}
      >
        {words.map((item, index) => (
          <span
            key={`${item.text}-${index}`}
            className="inline-block overflow-hidden align-baseline pb-[0.14em] -mb-[0.14em] mr-[0.26em] last:mr-0"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${item.isItalic ? italicClassName : ''}`}
            >
              {item.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
