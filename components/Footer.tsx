const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2">
      <p className="text-sm font-light italic">Copyright © {currentYear} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
