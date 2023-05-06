const CardPromote = () => {
  return (
    <section className="flex justify-center py-8 px-6">
      <div className="max-w-[908px] flex flex-col gap-12 sm:w-2/3 md:w-full md:flex-row">
        <div className="space-y-10 md:basis-1/2">
          <div className="space-y-4">
            <h2 className="text-primary-100 text-[28px] font-semibold">
              Get it Now
            </h2>
            <p className="text-primary-200 leading-6">
              Monitor your worldwide business with this handy apps
            </p>
          </div>
          <div className="py-5 flex flex-col gap-4 sm:flex-row sm:justify-center md:flex-col">
            <img
              className="w-[170px] h-auto object-contain"
              src="/app-store.png"
              alt="app-store"
            />
            <img
              className="w-[170px] h-auto object-contain"
              src="/play-store.png"
              alt="app-store"
            />
          </div>
        </div>

        <div className="flex justify-center md:basis-1/2">
          <img
            className="w-full h-auto object-cover"
            src="/promote.png"
            alt="promote"
          />
        </div>
      </div>
    </section>
  );
};

export default CardPromote;
