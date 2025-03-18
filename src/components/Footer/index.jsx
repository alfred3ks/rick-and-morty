const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-4 mt-8">
      <p className="text-sm text-gray-600">
        ©{currentYear} <span className="font-semibold">@alfred3ks</span> - Rick
        and Morty. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
