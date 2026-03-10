"use client";

import { type ComponentProps } from "react";
import { Audio } from "remotion";

type Props = ComponentProps<typeof Audio>;

export const ProjectAudio = (props: Props) => {
  return <Audio {...props} />;
};
