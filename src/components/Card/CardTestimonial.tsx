import { FC } from "react";
import datas from "../../data/content.json";
import {
  Heading,
  HeadingType,
  Paragraph,
  ParagraphColor,
  ParagraphSize,
  ParagraphWeight,
} from "../globals";

interface CardItemProps {
  description: string;
  name: string;
  job: string;
  avatar: string;
}

const CardItem: FC<CardItemProps> = ({ avatar, name, job, description }) => {
  return (
    <div className="space-y-12">
      <img className="w-24 h-24 object-cover" src={avatar} alt="testimonial" />
      <div className="space-y-2">
        <p className="font-semibold text-4xl text-secondary-100">“ ”</p>
        <div className="flex flex-col leading-6">
          <Paragraph
            size={ParagraphSize.BS}
            weight={ParagraphWeight.SB}
            color={ParagraphColor.PRIMARY}
            value={description}
            styles="pb-2"
          />
          <div className="space-y-4 pt-2 border-t border-primary-300">
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.PRIMARY}
              value={name}
            />
            <Paragraph
              size={ParagraphSize.BS}
              weight={ParagraphWeight.N}
              color={ParagraphColor.SECONDARY}
              value={job}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardTestimonialsContentProps {
  title: string;
  datas: CardDataProps[];
}

interface CardDataProps {
  id: number;
  avatar: string;
  name: string;
  job: string;
  description: string;
}

const CardTestimonials = () => {
  const { title, datas: testimonials } = datas.home
    .testimonials as CardTestimonialsContentProps;

  return (
    <section className="px-6 flex justify-center">
      <div className="max-w-[908px] space-y-1 sm:w-4/5 md:w-full">
        <Heading type={HeadingType.H3} value={title} />
        <div className="py-8 flex flex-col gap-12 md:flex-row">
          {testimonials.map((testimonial) => (
            <CardItem
              key={testimonial.id}
              avatar={testimonial.avatar}
              name={testimonial.name}
              job={testimonial.job}
              description={testimonial.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardTestimonials;
