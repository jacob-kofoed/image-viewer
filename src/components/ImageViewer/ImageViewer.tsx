import { useState } from "react";
import styled from "@emotion/styled";
import { ImageViewerFrame, useDragFrames } from ".";

type ImageViewerProps = {
  productName: string;
  frames: string[];
  frameIndex: number;
  onChange: (index: number) => void;
};

const ImageViewerRoot = styled.div({
  position: "relative",
});

export function ImageViewer({
  productName,
  frames,
  frameIndex,
  onChange,
}: ImageViewerProps) {
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [currentFrame, bindings] = useDragFrames({
    frameIndex,
    frames,
    onChange,
  });

  const framesToRender = firstFrameLoaded ? frames : [currentFrame];

  return (
    <>
      <p>{productName}</p>
      <ImageViewerRoot {...bindings}>
        {framesToRender.map((src, index) => (
          <ImageViewerFrame
            src={src}
            active={src === currentFrame}
            onLoad={() => setFirstFrameLoaded(true)}
            key={src}
            alt={`Frame ${index + 1} of ${productName}`}
          />
        ))}
      </ImageViewerRoot>
    </>
  );
}
