"use client";

import { type ComponentProps } from "react";
import { Video } from "remotion";

type Props = ComponentProps<typeof Video>;

export const ProjectVideo = (props: Props) => {
  return <Video {...props} />;
};
