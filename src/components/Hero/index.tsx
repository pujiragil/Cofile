const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="max-w-[908px] py-4 px-6 flex flex-col items-center gap-10 md:flex-row">
        <div>
          <div className="pt-12 space-y-2">
            <h1 className="text-4xl font-semibold text-primary-100 leading-[48px]">
              Check Currency Exchange Rate in Real Time
            </h1>
            <p className="text-primary-200 leading-6">
              Monitor your worldwide business with this handy apps
            </p>
          </div>
          <div className="py-5 flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
            <img
              className="w-[170px] h-auto lg:w-40"
              src="/app-store.png"
              alt="app-store"
            />
            <img
              className="w-[170px] h-auto lg:w-40"
              src="/play-store.png"
              alt="app-store"
            />
          </div>
        </div>
        <div className="flex justify-center w-full lg:justify-end">
          <img
            className="w-full h-auto object-cover sm:w-8/12 md:w-full md:object-contain lg:w-10/12 lg:object-cover"
            src="/main.png"
            alt="main"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
