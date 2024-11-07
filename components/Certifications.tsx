import {certification} from '@/data';

const Certifications = () => {
  return (
    <section
      className="w-full md:w-max my-6 md:my-12 px-4 p-8 md:p-10"
      style={{boxShadow: '0px 2px 4px rgba(233, 224, 224, 0.5)'}}>
      <h1 className="heading mb-6 md:mb-12">Certifications</h1>
      <div className="flex flex-col gap-3 mt-6 md:mt-12">
        {certification.map((c, i) => (
          <div key={i} className="inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-purple" />
            <h3 className="text-[10px] md:text-xl">{c.name}:</h3>
            <p className="text-[10px] md:text-xl">{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certifications;
