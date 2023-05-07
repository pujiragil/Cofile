import { FC } from "react";

export enum HeadingType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

interface HeadingProps {
  type: HeadingType;
  value: string;
  styles?: string;
}

export const Heading: FC<HeadingProps> = ({
  type,
  value,
  styles = "",
}): JSX.Element | null => {
  switch (type) {
    case HeadingType.H1:
      return (
        <h1
          className={`${styles} text-primary-100 text-4xl font-semibold leading-[48px]`}
        >
          {value}
        </h1>
      );
    case HeadingType.H2:
      return (
        <h2
          className={`${styles} text-primary-100 text-[28px] leading-9 font-semibold`}
        >
          {value}
        </h2>
      );
    case HeadingType.H3:
      return (
        <h3
          className={`${styles} text-primary-100 text-2xl leading-8 font-semibold`}
        >
          {value}
        </h3>
      );
    default:
      return null;
  }
};
