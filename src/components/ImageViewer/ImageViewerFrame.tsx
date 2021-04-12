import styled from '@emotion/styled'

type ImageViewerFrameProps = {
  src: string;
  alt: string;
  active: boolean;
  onLoad: React.ReactEventHandler<HTMLImageElement>;
};

const ImageViewerFrameRoot = styled.img<{active: boolean}>({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%",
  "-webkit-user-drag": "none",
  userSelect: "none",
  cursor: "grab",
}, ({ active }) => ({
  visibility: active ? "visible" : "hidden"
}))

export function ImageViewerFrame({
  alt,
  ...rest
}: ImageViewerFrameProps) {
  return (
    <ImageViewerFrameRoot
      {...rest}
      alt={alt}
    />
  );
}
