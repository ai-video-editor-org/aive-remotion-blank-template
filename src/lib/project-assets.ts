"use client";

const GOOGLE_STORAGE_HOST = "storage.googleapis.com";
const HYDRATED_ASSET_PREFIX = "/__project_assets__";

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

    return `${HYDRATED_ASSET_PREFIX}/${encodePath(url.pathname)}`;
  } catch {
    return null;
  }
}
