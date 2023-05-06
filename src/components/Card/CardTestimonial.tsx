import { FC } from "react";
import datas from "../../data/content.json";

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
          <h3 className="text-primary-100 font-semibold pb-2 border-b border-primary-300">
            {description}
          </h3>
          <div className="space-y-4 pt-2">
            <p className="text-primary-100">{name}</p>
            <p className="text-primary-200">{job}</p>
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
      <div className="max-w-[908px] space-y-1 sm:w-2/3 md:w-full">
        <h2 className="text-2xl font-semibold text-primary-100 leading-32">
          {title}
        </h2>
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
