import {certification} from '@/data';
import HeaderTitle from './ui/HeaderTitle';
import Wrapper from './Wrapper';

const Certifications = () => {
  return (
    <Wrapper
      className="md:w-[80%] lg:w-1/2 w-full"
      style={{boxShadow: '0px 2px 4px rgba(233, 224, 224, 0.5)'}}>
      <HeaderTitle title="Certifications" />
      <table className="w-full border-collapse">
        <thead className="mb-6">
          <tr className="bg-black-300 p-4 ">
            <th className="text-left text-[10px] md:text-xl font-semibold pl-5 py-4">
              Certification
            </th>
            <th className="text-left text-[10px] md:text-xl font-semibold pl-5 py-4">Issuer</th>
          </tr>
        </thead>
        <tbody>
          {certification.map((c, i) => (
            <tr key={i} className="border-b">
              <td className="text-[10px] md:text-xl pl-5  py-2 italic">{c.name}</td>
              <td className="text-[10px] md:text-xl pl-5 py-2 italic">{c.issuer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Certifications;
