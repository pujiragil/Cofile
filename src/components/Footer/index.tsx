const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-10 px-6 pt-14 pb-6 md:pb-14">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <img
          className="w-[110px] h-auto object-cover"
          src="/cofile.png"
          alt="cofile"
        />
        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6 object-cover"
            src="/instagram.svg"
            alt="instagram"
          />
          <img
            className="w-6 h-6 object-cover"
            src="/twitter.svg"
            alt="twitter"
          />
          <img
            className="w-6 h-6 object-cover"
            src="/dribbble.svg"
            alt="dribbble"
          />
          <img
            className="w-6 h-6 object-cover"
            src="/medium.svg"
            alt="medium"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <p>Home</p>
        <p>About us</p>
        <p>Pricing</p>
      </div>
    </footer>
  );
};

export default Footer;
