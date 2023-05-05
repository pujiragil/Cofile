import { FC } from "react";

interface CardProps {
  orderBy: "content" | "image";
  title: string;
  description: string;
  imageLink: string;
}

const Card: FC<CardProps> = ({ orderBy, title, description, imageLink }) => {
  return (
    <section className="flex flex-col gap-12 md:flex-row">
      <div
        className={`pt-20 space-y-4 basis-1/2 ${
          orderBy === "content" ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-primary-100 text-[28px] font-semibold">{title}</h2>
        <p className="text-primary-200 leading-6 sm:w-3/5 lg:w-10/12">{description}</p>
      </div>

      <div
        className={`flex justify-center basis-1/2 ${
          orderBy === "image" ? "order-1" : "order-2"
        }`}
      >
        <img
          className="w-full h-auto object-cover sm:w-2/3 lg:w-10/12"
          src={imageLink}
          alt="card-image"
        />
      </div>
    </section>
  );
};

export default Card;
