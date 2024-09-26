import './customLink.css';

const CustomLink = ({className, href, text, icon}) => {
  return (
    <div>
      <a className={className} href={href} rel="noopener noreferrer">
        {text}
        {icon}
      </a>
    </div>
  );
};
export default CustomLink;
