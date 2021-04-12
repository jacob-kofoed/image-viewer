import { ImageViewerContainer } from "./components/ImageViewer";
import { ApiContextProvider } from "./api/ApiContext";
import styled from "@emotion/styled";

const AppRoot = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
})

export function App() {
  return (
    <ApiContextProvider>
      <AppRoot>
        <ImageViewerContainer
          initialFrameIndex={0}
          productIdentifier="ARCHIBALDCHAIR"
          productName="Archibald chair"
        />
      </AppRoot>
    </ApiContextProvider>
  );
}
