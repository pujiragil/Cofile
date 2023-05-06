import { FC } from "react";
import datas from "../../data/content.json";

interface CardItemProps {
  title: string;
  description: string;
  imageLink: string;
}

const CardItem: FC<CardItemProps> = ({ title, description, imageLink }) => {
  return (
    <div className="flex flex-col gap-4 sm:w-2/3 md:w-full">
      <img
        className="w-12 h-12 object-cover"
        src={imageLink}
        alt="features-1"
      />
      <div className="space-y-2 w-fit">
        <h2 className="text-2xl font-semibold text-primary-100">{title}</h2>
        <p className="text-primary-200 leading-6">{description}</p>
      </div>
    </div>
  );
};

interface CardFeaturesContentProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const CardFeatures = () => {
  const features = datas.home.features as CardFeaturesContentProps[];

  return (
    <section className="flex justify-center px-6 py-16">
      <div className="max-w-[908px] flex flex-col gap-12 sm:justify-center sm:items-center md:items-start md:flex-row">
        {features.map((feature) => (
          <CardItem
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imageLink={feature.img}
          />
        ))}
      </div>
    </section>
  );
};

export default CardFeatures;
