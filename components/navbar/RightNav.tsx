import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {FaLocationArrow} from 'react-icons/fa';
import styled from 'styled-components';
import MagicButton from '../MagicButton';
import {StateProps} from './Hamburger'; // Import StateProps from Hamburger

// Use the StateProps interface to type the props
const MenuList = styled.div<StateProps>`
  display: flex;
  background-color: black;
  z-index: 1000;
  position: relative;
  gap: 0;

  & h1,
  .action {
    margin: 20px 40px;
  }

  & .link {
    margin: 20px 40px;
    color: #ffffff;
    text-decoration: none;
    width: max-content;

    &:hover {
      color: #bebbbb;
    }
  }

  .active {
    position: relative;
    display: inline-block;
  }

  .active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 7px;
    height: 7px;
    background-color: #cbacf9;
    border-radius: 50%;
  }

  @media (max-width: 640px) {
    position: fixed;
    flex-flow: column nowrap;
    transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(120%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 85%;
    transition: transform 0.3s ease-in-out;

    .active::after {
      bottom: 7px;
      left: 125%;
    }
  }
`;

const RightNav = ({open, setOpen}: StateProps) => {
  const pathname = usePathname();

  return (
    <MenuList open={open} setOpen={setOpen}>
      <h1 className="text-lg font-black block md:hidden">
        Francis <span className="text-purple">U. Okpoluaefe</span>
      </h1>
      <Link
        className={`link ${pathname === '/' ? 'active' : ''}`.trim()}
        href="/"
        onClick={() => setOpen(false)}>
        Home
      </Link>
      <Link
        className={`link ${pathname === '/#about' ? 'active' : ''}`.trim()}
        href="#about"
        onClick={() => setOpen(false)}>
        About
      </Link>
      <Link
        className={`link ${pathname.startsWith('/portfolio') ? 'active' : ''}`.trim()}
        href="/portfolio"
        onClick={() => setOpen(false)}>
        Projects
      </Link>
      <Link
        className={`link ${pathname === '/contact' ? 'active' : ''}`.trim()}
        href="/contact"
        onClick={() => setOpen(false)}>
        Contact
      </Link>

      <div className=" block md:hidden opacity-100 md:opacity-0">
        <div className="action flex flex-col gap-3 w-100">
          <MagicButton
            title="Book call"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() =>
              window.open(
                'https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe',
                '_blank'
              )
            }
          />
          <MagicButton
            title="Message"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => (window.location.href = 'mailto:deulo.dev@gmail.com')}
          />
        </div>
      </div>
    </MenuList>
  );
};

export default RightNav;
