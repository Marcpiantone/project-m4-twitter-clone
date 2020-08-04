import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserState, setCurrentUserState] = useState("loading");
  const [feed, setFeed] = useState("null");
  const [feedState, setFeedState] = useState("loading");

  const handleUserRefresh = async () => {
    try {
      const res = await fetch(`/api/me/profile`);
      await res.json().then((data) => {
        setCurrentUser(data);
        setCurrentUserState("idle");
      });
    } catch (err) {
      console.log(err);
      setCurrentUserState("error");
    }
  };

  useEffect(() => {
    handleUserRefresh();
  }, []);

  const handleFeedRefresh = async () => {
    try {
      const res = await fetch(`/api/me/home-feed`);
      await res.json().then((data) => {
        setFeed(data);
        setFeedState("idle");
      });
    } catch (err) {
      console.log(err);
      setFeedState("error");
    }
  };

  useEffect(() => {
    handleFeedRefresh();
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        currentUserState,
        setCurrentUserState,
        feed,
        feedState,
        setFeedState,
        handleFeedRefresh,
        handleUserRefresh,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
