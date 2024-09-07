import './customBtn.css';

const CustomBtn = ({onClick, text, icon, className}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {text} {icon}
      </button>
    </div>
  );
};
export default CustomBtn;
