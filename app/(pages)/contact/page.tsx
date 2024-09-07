import Contact from '../../../components/contact/Contact';

import {Metadata} from 'next';

export const metadata: Metadata = {
  title: `Contact | Francis's Portfolio`,
  description: 'Modern & Minimal Software Engineer Portfolio',
};

const page = () => {
  return (
    <section className="relative py-0  md:py-12">
      <Contact />
    </section>
  );
};
export default page;
