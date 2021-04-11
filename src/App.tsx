import { ImageViewerContainer } from "./components/ImageViewer";
import styles from "./App.module.css";
import { ApiContextProvider } from "./context/ApiContext";

export function App() {
  return (
    <ApiContextProvider>
      <div className={styles.root}>
        <ImageViewerContainer
          initialFrameIndex={5}
          productIdentifier="ARCHIBALDCHAIR"
          productName="Archibald chair"
        />
      </div>
    </ApiContextProvider>
  );
}
