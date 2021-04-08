import { useState } from "react";
import { FRAMES_TOTAL, ImageViewer } from ".";
import { useApiContext } from "../../context/ApiContext";

type ImageViewerContainerProps = {
  productIdentifier: string;
  initialFrameIndex?: number;
};

export function ImageViewerContainer({
  initialFrameIndex = 0,
  productIdentifier,
}: ImageViewerContainerProps) {
  const frames = useImageViewerFrames(productIdentifier);
  const [frameIndex, setFrameIndex] = useState(initialFrameIndex);

  const handleChange = (index: number) => {
    const indexModulo = index % FRAMES_TOTAL;
    setFrameIndex(indexModulo);
  };

  return (
    <ImageViewer
      frames={frames}
      frameIndex={frameIndex}
      onChange={handleChange}
    />
  );
}

function useImageViewerFrames(productIdentifier: string) {
  const { baseUrl, customerId } = useApiContext();

  // Api product frames are based 1, not based 0
  return Array.from({ length: FRAMES_TOTAL - 1 }).map(
    (_, index) =>
      `${baseUrl}/${customerId}/products/${productIdentifier}/frames/${
        index + 1
      }/`
  );
}
