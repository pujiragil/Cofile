import React, { FC, useState } from "react";

interface AccordionItemProps {
  isOpen: boolean;
  handleOpen: () => void;
  title: string;
  description: string;
}

const AccordionItem: FC<AccordionItemProps> = ({
  isOpen,
  handleOpen,
  title,
  description,
}) => {
  return (
    <div
      onClick={handleOpen}
      className="py-5 border-b border-primary-300 space-y-6 first:pt-0 last:pb-0 last:border-none"
    >
      <div className="pl-8 flex items-start gap-3 text-primary-100 font-semibold leading-8 relative">
        <h2 className={`text-2xl cursor-pointer before:content-['‣'] before:text-[28px] before:absolute before:left-2 ${isOpen ? "before:rotate-90" : "before:rotate-0"} before:transition-all before:duration-200 before:ease-in`}>
          {title}
        </h2>
      </div>
      {isOpen && (
        <div className="pl-8">
          <p className="text-primary-200 leading-6">{description}</p>
        </div>
      )}
    </div>
  );
};

type SelectedAccordionProps = "first" | "second" | "third" | "";

const Accordions = () => {
  const [selectedAccordion, setSelectAccordion] =
    useState<SelectedAccordionProps>("");

  const handleSelectedAccordion = (
    currentAccordion: SelectedAccordionProps
  ): void => {
    setSelectAccordion((prevAccordion) => {
      if (prevAccordion === currentAccordion) {
        return "";
      }
      return currentAccordion;
    });
  };

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
          <AccordionItem
            isOpen={selectedAccordion === "first"}
            handleOpen={() => handleSelectedAccordion("first")}
            title="Is there any limitation for free plan?"
            description="Of course there are limitations to the free plan. But you don't need to worry about the free plan, because we also provide various features for users with the free plan"
          />
          <AccordionItem
            isOpen={selectedAccordion === "second"}
            handleOpen={() => handleSelectedAccordion("second")}
            title="What is the minimum specification to run the apps on Android or iOS?"
            description="There are no minimum specifications to run Cofile on your device. Cofile is designed for all devices and emphasizes the user experience"
          />
          <AccordionItem
            isOpen={selectedAccordion === "third"}
            handleOpen={() => handleSelectedAccordion("third")}
            title="Can I downgrade the plan?"
            description="Unfortunately you cannot downgrade plan on Cofile. However, the plan will automatically downgrade when the plan deadline expires and no plan extensions are made"
          />
        </div>
      </div>
    </section>
  );
};

export default Accordions;
