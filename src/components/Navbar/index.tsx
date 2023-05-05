const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-6">
      <img
        className="h-10 w-auto object-cover"
        src="/cofile.png"
        alt="cofile"
      />
      <img
        className="w-8 h-8 object-cover md:hidden"
        src="/hamburger.svg"
        alt="hamburger"
      />
      <ul className="hidden md:flex items-center gap-10 text-base font-medium text-black/70">
        <li className="navlink">Home</li>
        <li className="navlink">About us</li>
        <li className="navlink">Pricing</li>
      </ul>
    </nav>
  );
};

export default Navbar;
