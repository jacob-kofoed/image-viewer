import { useState, useEffect } from "react";
import { modulo } from "../ImageViewer.util";

type useDragFramesProps = {
  onChange: (frameChange: number) => void;
  frames: string[];
  frameIndex: number;
};

export function useDragFrames({
  onChange,
  frames,
  frameIndex,
}: useDragFramesProps): [
  string,
  { onMouseDown: (event: React.MouseEvent) => void }
] {
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(frameIndex);

  useEffect(() => {
    setCurrentIndex(modulo(frameIndex, frames.length));
  }, [frameIndex, frames.length]);

  const onMouseDown = (event: React.MouseEvent) => {
    setInitialX(event.clientX);
    setIsDragging(true);
  };

  // Instead of binding "mouseup" & "mousemove" to the input, we bind it to the top-level
  // window to catch any out of bounds events. This is a preferred user experience.
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      // Move one frame per 20 pixels
      const deltaFrames = Math.round((event.clientX - initialX) / 20);

      // Make sure to wrap back to beginning by taking modulo of the new index
      setCurrentIndex(modulo(frameIndex + deltaFrames, frames.length));
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      onChange(currentIndex);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Remember to clean up global events nicely!
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [currentIndex, frameIndex, initialX, isDragging, onChange]);

  const currentFrame = frames[currentIndex];
  return [currentFrame, { onMouseDown }];
}
