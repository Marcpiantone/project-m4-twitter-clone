import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [feed, setFeed] = useState("null");
  const [feedState, setFeedState] = useState("loading");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/me/profile`);
        await res.json().then((data) => {
          setCurrentUser(data);
          setStatus("idle");
        });
      } catch (err) {
        console.log(err);
        setStatus("error");
      }
    };
    fetchUser();
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
        status,
        setStatus,
        feed,
        feedState,
        setFeedState,
        handleFeedRefresh,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
