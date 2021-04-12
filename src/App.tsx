import { ImageViewerContainer } from "./components/ImageViewer";
import { ApiContextProvider } from "./api/ApiContext";
import styled from "@emotion/styled";
import { Card } from "./components/Card/Card";
import { defaultTheme } from "./theme/theme-default";
import { ThemeProvider } from "@emotion/react";

const AppRoot = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export function App() {
  return (
    <ApiContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <AppRoot>
          <h1>
            <b>Spin</b> the chair
          </h1>

          <Card style={{ maxWidth: "400px" }}>
            <ImageViewerContainer
              initialFrameIndex={0}
              productIdentifier="ARCHIBALDCHAIR"
              productName="Archibald chair"
            />
          </Card>
        </AppRoot>
      </ThemeProvider>
    </ApiContextProvider>
  );
}
