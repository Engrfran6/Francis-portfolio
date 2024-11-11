import Image from 'next/image';
import HeaderTitle from './ui/HeaderTitle';
import Wrapper from './Wrapper';

const skillsArr = [
  {
    title: 'Languages',
    skills: [
      {name: 'JavaScript', imageUrl: '/assets/tools/nextjs.webp'},
      {name: 'TypeScript', imageUrl: '/assets/tools/typescript.svg'},
      {name: 'HTML5', imageUrl: '/assets/tools/html.svg'},
      {name: 'CSS3', imageUrl: '/assets/tools/css3.svg'},
    ],
  },
  {
    title: 'Frontend Technologies',
    skills: [
      {name: 'React', imageUrl: '/assets/tools/reactjs.png'},
      {name: 'Next.js', imageUrl: '/assets/tools/nextjs.webp'},
      {name: 'Redux', imageUrl: '/assets/tools/redux.svg'},
      {name: 'Recoil', imageUrl: '/assets/tools/recoil.svg'},
      {name: 'Tailwind CSS', imageUrl: '/assets/tools/tailwindcss.svg'},
      {name: 'Bootstrap', imageUrl: '/assets/tools/bootstrap5.svg'},
      {name: 'Styled Component', imageUrl: '/assets/tools/styled-components.svg'},
    ],
  },
  {
    title: 'Backend Technologies',
    skills: [
      {name: 'Node.js', imageUrl: '/assets/tools/nodejs.png'},
      {name: 'Express.js', imageUrl: '/assets/tools/nextjs.webp'},
      {name: 'REST APIs', imageUrl: '/assets/tools/api.svg'},
      {name: 'GraphQL', imageUrl: '/assets/tools/graphql.svg'},
    ],
  },
  {
    title: 'Database Management',
    skills: [
      {name: 'MongoDB', imageUrl: '/assets/tools/mongodb.svg'},
      {name: 'Firebase', imageUrl: '/assets/tools/firebase.svg'},
      {name: 'MySQL', imageUrl: '/assets/tools/mysql.svg'},
    ],
  },
  {
    title: 'Tools & Version Control',
    skills: [
      {name: 'Git', imageUrl: '/assets/tools/git.svg'},
      {name: 'GitHub', imageUrl: '/assets/tools/github.svg'},
      {name: 'Postman', imageUrl: '/assets/tools/postman.svg'},
      {name: 'Docker', imageUrl: '/assets/tools/docker.svg'},
    ],
  },
  {
    title: 'Concepts',
    skills: [
      {name: 'Data Structures', imageUrl: '/assets/tools/nextjs.webp'},
      {name: 'Algorithms', imageUrl: '/assets/tools/nextjs.webp'},
      {name: 'Agile Methodologies', imageUrl: '/assets/tools/nextjs.webp'},
      {name: 'Responsive Design', imageUrl: '/assets/tools/nextjs.webp'},
    ],
  },
];

type SkillsProps = {
  title: string;
  skills: {
    name: string;
    imageUrl: string;
  }[];
};

export const TechnicalCard = ({title, skills}: SkillsProps) => {
  return (
    <div className="flex items-center  flex-wrap">
      <h3 className="font-bold  text-[13px] md:text-sm p-2 md:py-3 md:pr-3 mx-auto md:mx-0">
        {title}:
      </h3>
      <div className="block md:hidden border-t-2 border-t-[#111111] w-full" />
      <div className="flex flex-wrap items-center gap-1 pt-1">
        {skills.map((skill, index) => (
          <span
            key={index}
            className=" inline-flex items-center gap-1 p-1.5 bgd-white-100 rounded-lg">
            <Image width={20} height={20} alt={skill.name} src={skill.imageUrl} />

            <span className="text-gray-300 flex text-[10px] md:text-sm items-center gap-3">
              {skill.name}
              {index < skills.length - 1 ? (
                <div className="md:w-0.5 md:h-4 md:rounded-lg bg-[#ffffff]" />
              ) : (
                ''
              )}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function TechnicalSkills() {
  return (
    <section className="w-full bg-[#000000] border-y">
      <Wrapper className="md:p-20">
        <HeaderTitle title="Technical" titleSpan="Skills" />
        <ul className="flex flex-col gap-3 md:gap-6 p-2 md:p-14 bg-[#111111] border border-[#313030]">
          {skillsArr.map((skills, i) => (
            <li
              key={i}
              className="px-3 py-1.5 bg-[#000000]  hover:bg-[#161616] border hover:border-black rounded-md">
              <TechnicalCard title={skills.title} skills={skills.skills} />
            </li>
          ))}
        </ul>
        {/* <h4 className="text-center">Among many others</h4> */}
      </Wrapper>
    </section>
  );
}
