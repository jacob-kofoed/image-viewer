import { ImageViewerContainer } from "./components/ImageViewer";
import styles from "./App.module.css";
import { ApiContextProvider } from "./context/ApiContext";

export function App() {
  return (
    <ApiContextProvider>
      <div className={styles.root}>
        <ImageViewerContainer productIdentifier="ARCHIBALDCHAIR" />
      </div>
    </ApiContextProvider>
  );
}
