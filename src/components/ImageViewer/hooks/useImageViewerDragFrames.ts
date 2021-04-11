import { useState, useCallback, useEffect } from "react";

export function useImageViewerDragFrames(onChange: (frameChange: number) => void) {
    const [isDragging, setIsDragging] = useState(false);
    const [initialX, setInitialX] = useState(0);
    const [deltaX, setDeltaX] = useState(0);
  
    const onMouseDown = useCallback((event: React.MouseEvent) => {
      setInitialX(event.clientX);
      setIsDragging(true);
    }, []);
  
    // While this hook is in the render-loop, make sure dragging stops when "mouseup" is called anywhere in the application
    useEffect(() => {
      const handleMouseUp = () => setIsDragging(false);
      const handleMouseMove = (event: any) => {
        setDeltaX(event.clientX - initialX);
      };
  
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, [initialX]);
  
    useEffect(() => {
      if (!isDragging) {
        return;
      }
  
      onChange(Math.round(deltaX / 20));
    }, [deltaX, isDragging, onChange]);
  
    return { onMouseDown };
  }
  