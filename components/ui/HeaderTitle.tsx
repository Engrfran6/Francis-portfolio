type HeaderProps = {
  title: string;
  titleSpan?: string;
};

const HeaderTitle = ({title, titleSpan}: HeaderProps) => {
  return (
    <h1 className="font-bold text-2xl md:text-4xl text-center">
      {title} <span className="text-purple">{titleSpan}</span>
    </h1>
  );
};
export default HeaderTitle;
