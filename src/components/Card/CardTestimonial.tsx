import { FC } from "react";

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

const CardTestimonials = () => {
  return (
    <section className="px-6 flex justify-center">
      <div className="max-w-[908px] space-y-1 sm:w-2/3 md:w-full">
        <h2 className="text-2xl font-semibold text-primary-100 leading-32">
          Testimonials
        </h2>
        <div className="py-8 flex flex-col gap-12 md:flex-row">
          <CardItem
            avatar="/testimonial-1.png"
            name="Ashley Rock"
            job="Founder of Paple"
            description="Really happy with the product and kind services provided by Cofile. Will recommend it to the world!"
          />
          <CardItem
            avatar="/testimonial-2.png"
            name="Natalie Bloom"
            job="Marketing of Simpage"
            description="Top class product and services! Since my first sign up, they helped my team a lot."
          />
        </div>
      </div>
    </section>
  );
};

export default CardTestimonials;
