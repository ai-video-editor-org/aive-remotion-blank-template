"use client";

import { type ComponentProps } from "react";
import { Img } from "remotion";

type Props = ComponentProps<typeof Img>;

export const ProjectImg = (props: Props) => {
  return <Img {...props} />;
};
