"use client";

import { type ComponentProps, useEffect, useState } from "react";
import { Video } from "remotion";
import { getHydratedAssetCandidate } from "../../lib/project-assets";

type Props = ComponentProps<typeof Video>;

export const ProjectVideo = ({ src, onError, ...props }: Props) => {
  const remoteSrc = typeof src === "string" ? src : null;
  const localCandidate =
    typeof src === "string" ? getHydratedAssetCandidate(src) : null;
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(
    localCandidate ?? remoteSrc,
  );

  useEffect(() => {
    setResolvedSrc(localCandidate ?? remoteSrc);
  }, [localCandidate, remoteSrc]);

  if (!resolvedSrc) {
    return <Video src={src} onError={onError} {...props} />;
  }

  return (
    <Video
      src={resolvedSrc}
      onError={(event) => {
        onError?.(event);
        if (remoteSrc && resolvedSrc !== remoteSrc) {
          setResolvedSrc(remoteSrc);
        }
      }}
      {...props}
    />
  );
};
