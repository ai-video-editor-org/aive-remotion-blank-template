import { fontFamily, loadFont } from "@remotion/google-fonts/Inter";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { z } from "zod";
import { CompositionProps } from "../../../types/constants";

loadFont("normal", {
  subsets: ["latin"],
  weights: ["400", "700"],
});

export const Main = ({ title, emoji }: z.infer<typeof CompositionProps>) => {
  const frame = useCurrentFrame();
  const rise = interpolate(frame, [0, 18], [40, 0], {
    extrapolateRight: "clamp",
  });
  const fadeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.22), transparent 36%), linear-gradient(180deg, #111827 0%, #030712 100%)",
        color: "white",
        fontFamily,
      }}
      className="items-center justify-center"
    >
      <div
        style={{
          transform: `translateY(${rise}px)`,
          opacity: fadeIn,
        }}
        className="flex flex-col items-center gap-8"
      >
        <div className="text-[180px] leading-none">{emoji}</div>
        <div className="rounded-full border border-white/15 bg-white/8 px-8 py-3 text-[28px] font-medium tracking-[-0.03em]">
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};
