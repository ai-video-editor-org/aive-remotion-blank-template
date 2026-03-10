"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import {
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { Main } from "../remotion/MyComp/Main";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-[#020617] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-[420px] flex-col gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            AI Video Editor
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
            Blank starter
          </h1>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <Player
            component={Main}
            inputProps={defaultMyCompProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{ width: "100%" }}
            controls
            autoPlay
            loop
            acknowledgeRemotionLicense
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
