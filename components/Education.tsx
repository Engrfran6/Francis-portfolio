import {education} from '@/data';
import HeaderTitle from './ui/HeaderTitle';
import Wrapper from './Wrapper';

const Education = () => {
  return (
    <Wrapper className="px-3">
      <HeaderTitle title="Education" />
      <div className="flex flex-col gap-4 border-x-2 p-4 md:p-10">
        <h3 className="flex gap-2 items-center font-extrabold">
          <span className="text-[10px] md:text-xl">{education.university} - </span>
          <span className="text-[10px] md:text-xl">{education.location}</span>
        </h3>
        <div className="flex justify-between border-t-2 pt-3">
          <h3 className="inline-flex gap-2 items-center">
            <span className="text-[10px] md:text-xl">{education.honor} -</span>

            <span className="text-[10px] md:text-xl ">{education.course}</span>
          </h3>
          <span className="italic text-[10px] md:text-sm ">
            {education.start}-{education.end}
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
export default Education;
