import styled from "@emotion/styled";

type ImageViewerFrameProps = {
  src: string;
  alt: string;
  active: boolean;
  onLoad: React.ReactEventHandler<HTMLImageElement>;
};

const ImageViewerFrameRoot = styled.img<{ active: boolean }>(
  {
    top: 0,
    left: 0,
    WebkitUserDrag: "none",
    userSelect: "none",
    cursor: "grab",
    maxWidth: "100%",
  },
  ({ active }) => ({
    position: active ? "initial" : "absolute",
    visibility: active ? "visible" : "hidden",
  })
);

export function ImageViewerFrame({ alt, ...rest }: ImageViewerFrameProps) {
  return <ImageViewerFrameRoot {...rest} alt={alt} />;
}
