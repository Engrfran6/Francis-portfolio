const HeroBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 h-full w-full dark:bg-[#111111] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        flex items-center justify-center"
        style={{zIndex: -2}}
      />
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-[#101010] bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{zIndex: -1}}
      />
    </>
  );
};
export default HeroBackground;
