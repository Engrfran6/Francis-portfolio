'use client';
import {cn} from '@/lib/utils';
import {motion, stagger, useAnimate} from 'framer-motion';
import Link from 'next/link';
import {useEffect} from 'react';

export const TextGenerateEffect = ({words, className}: {words: string; className?: string}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');

  // Calculate the total duration based on the number of words and stagger delay
  const totalDuration = wordsArray.length * 1 + 3; // 0.2 seconds stagger + 2 seconds for animation

  useEffect(() => {
    animate(
      'span',
      {opacity: 1},
      {
        duration: 1,
        delay: stagger(0.07),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`${idx > 19 ? 'text-purple' : 'dark:text-white text-black'} opacity-0`}>
            {word}{' '}
          </motion.span>
        ))}

        {/* Delay the appearance of the "Read more" link */}
        <motion.span
          initial={{x: 100, y: 100, opacity: 0}} // Start from top-right
          animate={{x: 0, y: 0, opacity: 1}} // Animate to x:0, y:0
          transition={{
            delay: totalDuration, // Delay until all words are animated
            type: 'spring', // Optional: Use spring animation for a smooth effect
            stiffness: 120, // Optional: Adjust stiffness of spring animation
          }}>
          <Link
            href="/#about"
            className="underline ml-2"
            style={{
              textDecorationThickness: '5px', // Thicker underline (bold)
              textUnderlineOffset: '5px', // Adjust the space between text and underline
            }}>
            Read more
          </Link>
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <h3 className="dark:text-white text-black leading-snug tracking-wide">{renderWords()}</h3>
      </div>
    </div>
  );
};
