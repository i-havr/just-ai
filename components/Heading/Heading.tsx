import { FC, createElement } from "react";
import classnames from "classnames";

import { HeadingElementProps, HeadingProps } from "@/types";

export const Heading: FC<HeadingProps> = ({
  tag = "h2",
  className = "",
  children,
  ...rest
}) => {
  const headingClass = classnames("text-[32px]", className);

  const getHeadingProps = () => {
    const props: HeadingElementProps = { className: headingClass, ...rest };
    return props;
  };

  return createElement(tag, getHeadingProps(), children);
};
