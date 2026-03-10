import { z } from "zod";
export const COMP_NAME = "Main";

export const CompositionProps = z.object({
  title: z.string(),
  emoji: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "Start editing",
  emoji: "✨",
};

export const DURATION_IN_FRAMES = 150;
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
export const VIDEO_FPS = 30;
