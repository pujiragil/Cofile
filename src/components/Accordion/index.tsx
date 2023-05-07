import React, { FC, useState } from "react";
import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

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
    <div className="py-5 border-b border-primary-300 space-y-6 first:pt-0 last:pb-0 last:border-none">
      <div
        onClick={handleOpen}
        className="pl-8 flex items-start gap-3 text-primary-100 font-semibold leading-8 relative"
      >
        <Heading
          type={HeadingType.H3}
          value={title}
          styles={`cursor-pointer before:content-['‣'] before:text-[28px] before:absolute before:left-2 ${
            isOpen ? "before:rotate-90" : "before:rotate-0"
          } before:transition-all before:duration-200 before:ease-in`}
        />
      </div>
      {isOpen && (
        <div className="pl-8">
          <Paragraph
            size={ParagraphSize.BS}
            weight={ParagraphWeight.N}
            color={ParagraphColor.SECONDARY}
            value={description}
          />
        </div>
      )}
    </div>
  );
};

type SelectedAccordionProps = "first" | "second" | "third" | "";

interface ItemProps {
  id: number;
  selected: SelectedAccordionProps;
  title: string;
  description: string;
}

interface AccordionsContentProps {
  img: string;
  title: string;
  datas: ItemProps[];
}

const Accordions = () => {
  const [selectedAccordion, setSelectAccordion] =
    useState<SelectedAccordionProps>("");
  const {
    title,
    img,
    datas: accordions,
  } = datas.home.accordions as AccordionsContentProps;

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
          <img className="w-12 h-12 object-cover" src={img} alt="faq" />
          <Heading type={HeadingType.H2} value={title} />
        </div>
        <div className="flex flex-col py-6 md:basis-1/2">
          {accordions.map((accordion) => (
            <AccordionItem
              key={accordion.id}
              isOpen={selectedAccordion === accordion.selected}
              handleOpen={() => handleSelectedAccordion(accordion.selected)}
              title={accordion.title}
              description={accordion.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordions;
