import { FC } from "react";

import { SectionProps } from "@/types";

export const Section: FC<SectionProps> = ({ className = "", children }) => {
  return <section className={className}>{children}</section>;
};
