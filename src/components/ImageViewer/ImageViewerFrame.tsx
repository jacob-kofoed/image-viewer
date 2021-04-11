import clsx from "clsx";
import styles from "./ImageViewerFrame.module.css";

type ImageViewerFrameProps = {
  src: string;
  alt: string;
  active: boolean;
  onLoad: React.ReactEventHandler<HTMLImageElement>;
};

export function ImageViewerFrame({
  active,
  alt,
  ...rest
}: ImageViewerFrameProps) {
  return (
    <img
      {...rest}
      alt={alt}
      className={clsx(styles.root, { [styles.active]: active })}
    />
  );
}
