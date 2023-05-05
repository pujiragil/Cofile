const SponsorShip = () => {
  return (
    <div className="px-6 flex justify-center">
      <div className="max-w-[908px] w-full space-y-8 md:space-y-1">
        <h2 className="text-2xl font-semibold text-primary-100 text-center md:text-left">Trusted by</h2>
        <div className="py-5 flex flex-col items-center gap-12 md:flex-row md:gap-6 lg:gap-12">
          <img className="w-48 h-auto object-cover sm:w-2/5 md:w-full" src="/paple.png" alt="paple" />
          <img className="w-48 h-auto object-cover sm:w-2/5 md:w-full" src="/masbobz.png" alt="masbobz" />
          <img className="w-48 h-auto object-cover sm:w-2/5 md:w-full" src="/notion.png" alt="notion" />
          <img className="w-48 h-auto object-cover sm:w-2/5 md:w-full" src="/super.png" alt="super" />
        </div>
      </div>
    </div>
  );
};

export default SponsorShip;
