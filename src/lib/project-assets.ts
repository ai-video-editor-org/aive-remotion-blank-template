"use client";

import { staticFile } from "remotion";

const GOOGLE_STORAGE_HOST = "storage.googleapis.com";
const HYDRATED_ASSET_PREFIX = "__project_assets__";

type RemotionStaticFile = {
  name?: string;
  src?: string;
};

function encodePath(pathname: string): string {
  return pathname
    .split("/")
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(decodeURIComponent(segment)))
    .join("/");
}

export function getHydratedAssetCandidate(src: string): string | null {
  try {
    const url = new URL(src);
    if (url.hostname !== GOOGLE_STORAGE_HOST) {
      return null;
    }

    const assetName = `${HYDRATED_ASSET_PREFIX}/${encodePath(url.pathname)}`;
    const remotionStaticFiles = (
      window as typeof window & { remotion_staticFiles?: RemotionStaticFile[] }
    ).remotion_staticFiles;
    const remotionStaticSrc = remotionStaticFiles?.find(
      (file) => file.name === assetName,
    )?.src;

    return remotionStaticSrc ?? staticFile(assetName);
  } catch {
    return null;
  }
}
