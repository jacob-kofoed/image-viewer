import { FRAMES_TOTAL } from "..";
import { useApiContext } from "../../../api/ApiContext";

export function useImageViewerFrames(productIdentifier: string) {
    const { baseUrl, customerId } = useApiContext();
  
    // Api product frames has index base 1, not 0
    return Array.from({ length: FRAMES_TOTAL }).map(
      (_, index) =>
        `${baseUrl}/${customerId}/products/${productIdentifier}/frames/${
          index + 1
        }/`
    );
  }
  