const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-4 mt-8 bg-gray-800 text-white">
      <p className="text-sm">
        ©{currentYear} <span className="font-semibold">@alfred3ks</span> - Rick
        and Morty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
