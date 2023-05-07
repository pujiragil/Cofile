import { FC } from "react";

export enum HeadingType {
  H1,
  H2,
  H3,
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

export enum ParagraphSize {
  BS = "text-base",
  LG = "text-lg",
}

export enum ParagraphWeight {
  N = "font-normal",
  SB = "font-semibold",
}

export enum ParagraphColor {
  PRIMARY = "text-primary-100",
  SECONDARY = "text-primary-200",
  TERTIARY = "text-secondary-100",
}

interface ParagraphProps {
  value: string;
  size: ParagraphSize;
  weight: ParagraphWeight;
  color: ParagraphColor;
  styles?: string;
}

export const Paragraph: FC<ParagraphProps> = ({
  value,
  size,
  weight,
  color,
  styles = ""
}): JSX.Element => {
  return <p className={`${size} ${weight} ${color} ${styles}`}>{value}</p>;
};
