const AccordionItem = () => {
  return (
    <div className="py-5 border-b border-primary-300 first:pt-0 last:pb-0 last:border-none">
      <div className="pl-2 flex items-start gap-3 text-primary-100 font-semibold leading-8">
        <span className="text-[28px]">‣</span>
        <h2 className="text-2xl">Is there any limitation for free plan?</h2>
      </div>
    </div>
  );
};

const Accordions = () => {
  return (
    <section className="flex justify-center p-6">
      <div className="max-w-[908px] flex flex-col gap-12 sm:w-2/3 md:w-full md:flex-row">
        <div className="py-5 space-y-4 md:basis-1/2">
          <img className="w-12 h-12 object-cover" src="/faq.png" alt="faq" />
          <h2 className="text-primary-100 text-[28px] font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col py-6 md:basis-1/2">
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>
      </div>
    </section>
  );
};

export default Accordions;
