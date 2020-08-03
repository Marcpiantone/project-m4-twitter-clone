import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    try {
      fetch(`/api/me/profile`)
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data);
          setStatus("idle");
        });
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status, setStatus }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
