import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("inventra_user");
    const storedToken = window.localStorage.getItem("inventra_token");
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    window.localStorage.setItem("inventra_user", JSON.stringify(userData));
    window.localStorage.setItem("inventra_token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    window.localStorage.removeItem("inventra_user");
    window.localStorage.removeItem("inventra_token");
    window.location.href = "/login";
  };

  const isAuthenticated = !!user && !!token;

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
