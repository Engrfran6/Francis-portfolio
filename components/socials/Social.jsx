import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import './social.css';

export default function Socials({className = ''}) {
  return (
    <div className={`socials ${className}`}>
      <a href="https://github.com/Engrfran6" target="_blank" rel="noopener noreferrer">
        <AiOutlineGithub />
      </a>
      <a href="https://x.com/deulodev" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
      <a href="https://linkedin.com/in/deulo" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
  );
}
