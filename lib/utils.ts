import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Utility function to calculate reading time
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length; // Count words
  const minutes = Math.ceil(words / wordsPerMinute); // Calculate time in minutes
  return minutes;
};
