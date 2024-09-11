import About from '../../../components/about/About';

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: `About | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

const Page = () => {
  return (
    <section className="flex flex-col verflow-hidden">
      <section className="w-[100%] md:w-[90%] lg:w-1/2  mx-auto  pb-10 pt-[1rem] md:pt-[4.5rem]">
        <About />
      </section>
    </section>
  );
};
export default Page;
