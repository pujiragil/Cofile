import { FC } from "react";

interface CardItemProps {
  title: string;
  description: string;
  imageLink: string;
}

const CardItem: FC<CardItemProps> = ({ title, description, imageLink }) => {
  return (
    <div className="space-y-4">
      <img
        className="w-12 h-12 object-cover"
        src={imageLink}
        alt="features-1"
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary-100">{title}</h2>
        <p className="text-primary-200 leading-6">{description}</p>
      </div>
    </div>
  );
};

const CardFeatures = () => {
  return (
    <section className="flex justify-center px-6 py-16">
      <div className="max-w-[908px] flex flex-col gap-12 md:flex-row">
        <CardItem
          title="24 Hours Customer Service"
          description="We respect your passion to run your business by always accompany you"
          imageLink="/features-1.png"
        />
        <CardItem
          title="Currencies All Over The World"
          description="Our complete and real-time currencies database will help your business"
          imageLink="/features-2.png"
        />
        <CardItem
          title="Upgrade Once You Ready"
          description="No worries, we always welcome you once you ready to upgrade"
          imageLink="/features-3.png"
        />
      </div>
    </section>
  );
};

export default CardFeatures;
