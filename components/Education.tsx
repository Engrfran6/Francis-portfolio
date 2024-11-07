import {education} from '@/data';

const Education = () => {
  return (
    <section className="w-full  md:w-[61%] px-4 md:p-10 border-x-2 mt-10 md:mt-20 mb-12">
      <h1 className="heading mb-6 md:mb-12">Education</h1>
      <div className="flex flex-col gap-4">
        <h3 className="flex gap-2 items-center font-extrabold">
          <span className="text-[10px] md:text-xl">{education.university}: </span>
          <span className="text-[10px] md:text-xl">{education.location}</span>
        </h3>
        <div className="flex justify-between">
          <h3 className="inline-flex gap-2 items-center">
            <span className="text-[10px] md:text-xl">{education.honor}</span>

            <span className="text-[10px] md:text-xl ">{education.course}</span>
          </h3>
          <span className="italic text-[10px] md:text-sm ">
            {education.start}-{education.end}
          </span>
        </div>
      </div>
    </section>
  );
};
export default Education;
