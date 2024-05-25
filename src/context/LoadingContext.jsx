import React, { createContext, useState } from "react";
import { handleApiErros } from "../utils/globalErrors";

export const LoadingContext = createContext(null);

const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState({});

  async function handleLoading(fn, key) {
    setLoading((prev) => {
      return { ...prev, [key]: true };
    });
    try {
      await fn();
    } catch (e) {
      handleApiErros(e);
    } finally {
      setLoading((prev) => {
        return { ...prev, [key]: false };
      });
    }
  }

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
        handleLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
