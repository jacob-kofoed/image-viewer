import { useState } from "react";
import { ImageViewer } from ".";

type ImageViewerContainerProps = {
  productIdentifier: string;
  initialFrameIndex?: number;
};

export function ImageViewerContainer({
  initialFrameIndex = 0,
  productIdentifier,
}: ImageViewerContainerProps) {
  const [frameIndex, setFrameIndex] = useState(initialFrameIndex);

  // Wait for ImageViewer to load first image to not pollute request que
  // then load remaining images into memory
  const images = Array.from({ length: 32 }).map(
    (index) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.src = `https://content.cylindo.com/api/v2/4404/products/ARCHIBALDCHAIR/frames/${index}/`;

        image.onload = () => resolve(image);
        image.onerror = reject;
      })
  );

  Promise.any(images).then((x) => x.src);

  return <ImageViewer frames={[]} frameIndex={frameIndex} />;
}
