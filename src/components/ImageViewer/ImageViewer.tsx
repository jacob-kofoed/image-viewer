type ImageViewerProps = {
  frames: string[];
  frameIndex: number;
  onChange: (index: number) => void;
};

export function ImageViewer({
  frames,
  frameIndex,
  onChange,
}: ImageViewerProps) {
  return (
    <div>
      <button onClick={() => onChange(frameIndex + 1)}>Next</button>
      <img src={frames[frameIndex]} alt="" />
    </div>
  );
}
