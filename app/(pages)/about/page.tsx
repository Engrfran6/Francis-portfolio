import About from '../../../components/about/About';

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: `About | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

const Page = () => {
  return (
    <section className="relative flex flex-col md:py-12 verflow-hidden">
      <section className="w-100 md:w-1/2  mx-auto  pb-10 pt-[14rem] md:pt-[18.5rem]">
        <About />
      </section>
    </section>
  );
};
export default Page;
