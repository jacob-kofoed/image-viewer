import { useCallback, useState } from "react";
import styled from '@emotion/styled'
import { ImageViewerFrame, useImageViewerDragFrames } from ".";

type ImageViewerProps = {
  productName: string;
  frames: string[];
  frameIndex: number;
  onChange: (index: number) => void;
};

const ImageViewerRoot = styled.div({
  background: "var(--white)",
  position: "relative",
  width: 372,
  height: 372,
})

export function ImageViewer({
  productName,
  frames,
  frameIndex,
  onChange,
}: ImageViewerProps) {
  const handleFrameDrag = useCallback(
    (frameChange: number) => onChange(frameChange),
    [onChange]
  );

  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const framesToRender = firstFrameLoaded ? frames : [frames[frameIndex]];

  return (
    <ImageViewerRoot {...useImageViewerDragFrames(handleFrameDrag)}>
      {framesToRender.map((src, index) => (
        <ImageViewerFrame
          src={src}
          active={src === frames[frameIndex]}
          onLoad={() => setFirstFrameLoaded(true)}
          key={src}
          alt={`Frame ${index + 1} of ${productName}`}
        />
      ))}
    </ImageViewerRoot>
  );
}
