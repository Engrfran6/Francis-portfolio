import {calculateReadingTime, formatTitle} from '@/lib/utils';
import {useScroll} from 'framer-motion';
import Image, {StaticImageData} from 'next/image';
import {usePathname} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import {IoArrowForward} from 'react-icons/io5';
import {MdAccessTime} from 'react-icons/md';
import CustomLink from '../ui/customLink/CustomLink';
import './projectCard.css';

export interface ProjectCardProps {
  image: StaticImageData | string;
  tech: string[];
  title: string;
  description: string;
  role?: string;
  snapshots?: string[];
  livepreview?: string;
}

export default function ProjectCard({image, tech, title, description}: ProjectCardProps) {
  const pathname = usePathname();
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    // Calculate the reading time for the description
    const time = calculateReadingTime(description);
    setReadingTime(time);
  }, [description]); // Effect runs whenever the description changes

  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const formattedTitle = formatTitle(title)?.toLocaleLowerCase();

  return (
    <section
      ref={container}
      className={`card_container ${pathname === '/portfolio' ? 'card_container-grid' : ''}`.trim()}>
      <section
        // style={{top: `calc(-5vh + ${index * 25}%)`}}
        className={`card ${pathname === '/portfolio' ? 'card-remove-grid' : ''}`.trim()}>
        <h4
          className={`card_header ${
            pathname === '/portfolio' ? 'card_header-hidden_grid' : ''
          }`.trim()}>
          {title}
        </h4>
        <div
          className={`card_content ${
            pathname === '/portfolio' ? 'card_content-reverse_grid' : ''
          }`.trim()}>
          <div
            className={`card_description ${
              pathname === '/portfolio' ? 'card_description-grid' : ''
            }`.trim()}>
            <div
              className={`card_description-title ${
                pathname === '/portfolio' ? 'card_description-title-grid' : ''
              }`.trim()}>
              <span className="description_readingtime">
                <MdAccessTime />
                {readingTime} min read
              </span>
              <h2 className="description_heading">{title}</h2>
              <div className="card_description-underline" />
            </div>
            <div
              className={`card_description-text ${
                pathname === '/portfolio' ? 'card_description-text-grid' : ''
              }`.trim()}>
              <p className="card_description-p">{description?.slice(0, 150)}...</p>
              <h4 className="card_description-tech">{tech}</h4>
              <CustomLink
                className="btn"
                href={`portfolio/${formattedTitle}`}
                text="VIEW PROJECT"
                icon={<IoArrowForward />}
              />
            </div>
          </div>
          <a
            href={`portfolio/${formattedTitle}`}
            className={`card_image ${pathname === '/portfolio' ? 'card_image-grid' : ''}`.trim()}>
            <Image src={image} width={1000} height={1000} alt="Project image" />
          </a>
        </div>
      </section>
    </section>
  );
}
