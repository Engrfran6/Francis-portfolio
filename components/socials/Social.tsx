import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';

export default function Socials({otherClassName}: any) {
  return (
    <div className={`flex items-center gap-5 ${otherClassName}`}>
      <a
        href="https://github.com/Engrfran6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-gray-400 transition-colors">
        <AiOutlineGithub />
      </a>
      <a
        href="https://x.com/deulodev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-gray-400 transition-colors">
        <BsTwitter />
      </a>
      <a
        href="https://linkedin.com/in/deulo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-gray-400 transition-colors">
        <BsLinkedin />
      </a>
    </div>
  );
}
