import { HTMLAttributes } from "react";

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3";

export interface HeadingElementProps {
  className?: string;
  rest?: HTMLAttributes<HTMLHeadingElement>;
}

export interface HeadingProps extends HeadingElementProps {
  tag?: HeadingTag;
  children: React.ReactNode;
}
