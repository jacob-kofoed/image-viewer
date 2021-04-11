import { useState } from "react";
import { FRAMES_TOTAL, ImageViewer, useImageViewerFrames } from ".";

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

  const handleChange = (index: number) => {
    const indexModulo = modulo(index, FRAMES_TOTAL);
    setFrameIndex(indexModulo);
  };

  return (
    <>
      <ImageViewer
        frames={frames}
        frameIndex={frameIndex}
        productName={productName}
        onChange={handleChange}
      />
    </>
  );
}

// https://stackoverflow.com/a/4467559
function modulo(n: number, m: number) {
  return ((n % m) + m) % m;
}
