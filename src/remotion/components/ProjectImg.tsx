"use client";

import { type ComponentProps, useEffect, useState } from "react";
import { Img } from "remotion";
import { getHydratedAssetCandidate } from "../../lib/project-assets";

type Props = ComponentProps<typeof Img>;

export const ProjectImg = ({ src, onError, ...props }: Props) => {
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
    return <Img src={src} onError={onError} {...props} />;
  }

  return (
    <Img
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
