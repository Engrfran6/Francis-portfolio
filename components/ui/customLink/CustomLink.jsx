import './customLink.css';

const CustomLink = ({className, href, text, icon}) => {
  return (
    <div>
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {text}
        {icon}
      </a>
    </div>
  );
};
export default CustomLink;
