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

  // We explicitely load the first frame before loading the rest in parallel,
  // this is to get something on screen as fast as possible.
  const framesToRender = firstFrameLoaded ? frames : [currentFrame];

  return (
    <>
      <p>{productName}</p>
      <ImageViewerRoot {...bindings}>
        {framesToRender.map((src, index) => (
          <ImageViewerFrame
            src={src}
            key={src}
            active={src === currentFrame}
            onLoad={() => setFirstFrameLoaded(true)}
            alt={`Frame ${index + 1} of ${productName}`}
          />
        ))}
      </ImageViewerRoot>
    </>
  );
}
