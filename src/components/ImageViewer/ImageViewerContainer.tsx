import { useState } from "react";
import { ImageViewer, useImageViewerFrames } from ".";

type ImageViewerContainerProps = {
  productIdentifier: string;
  productName: string;
  initialFrameIndex?: number;
};

export function ImageViewerContainer({
  productIdentifier,
  productName,
  initialFrameIndex = 0,
}: ImageViewerContainerProps) {
  const frames = useImageViewerFrames(productIdentifier);
  const [frameIndex, setFrameIndex] = useState(initialFrameIndex);

  return (
    <ImageViewer
      frames={frames}
      frameIndex={frameIndex}
      productName={productName}
      onChange={setFrameIndex}
    />
  );
}
