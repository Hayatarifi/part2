import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("userToken") || "");

  useEffect(() => {
    localStorage.setItem("userToken", token);
  }, [token]);

  function logout() {
    setToken("");
    localStorage.removeItem("userToken");
    window.location.assign("/login");
  }

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
