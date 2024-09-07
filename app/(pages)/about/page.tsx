import About from '../../../components/about/About';

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: `About | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

const Page = () => {
  return (
    <section className="relative flex flex-col py-0  md:py-12 verflow-hidden">
      <section className="w-100 md:w-1/2  mx-auto mt-[18.5rem] mb-20  md:mb-0 md:mt-[18.5rem">
        <About />
      </section>
    </section>
  );
};
export default Page;
