import Image from 'next/image';
import Typscript from '../../tools/typescript.svg';
import NextJs from '../../tools/nextjs.webp';
import NodeJs from '../../tools/nodejs.png';
import Figma from '../../tools/figma.png';
import ReactJs from '../../tools/react.png';

export default function Technologies() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-20 w-full min-h-[13vh] md:gap-8 md:px-12">
      <ul className="flex flex-wrap justify-center items-center gap-6 w-full min-h-[13vh] md:gap-30 md:px-10">
        <li>
          <Image width={40} height={40} alt="ReactJs" src={ReactJs} title="ReactJs" />
        </li>
        <li>
          <Image width={40} height={40} alt="Typescript" src={Typscript} title="Typescript" />
        </li>
        <li>
          <Image width={40} height={40} alt="Figma" src={Figma} title="Figma" />
        </li>
        <li>
          <Image width={70} height={70} alt="NextJS" src={NextJs} title="NextJS" />
        </li>
        <li>
          <Image width={40} height={40} alt="NodeJS" src={NodeJs} title="NodeJS" />
        </li>
      </ul>
    </section>
  );
}
