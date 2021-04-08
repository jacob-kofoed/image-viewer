import React, { useContext, useState } from "react";

const ApiContext = React.createContext<{
  baseUrl?: string;
  customerId?: string;
}>({});

export const ApiContextProvider: React.FunctionComponent = (props) => {
  const [value] = useState({
    baseUrl: "https://content.cylindo.com/api/v2",
    customerId: "4404",
  });

  return <ApiContext.Provider {...props} value={value} />;
};

export function useApiContext() {
  return useContext(ApiContext);
}
