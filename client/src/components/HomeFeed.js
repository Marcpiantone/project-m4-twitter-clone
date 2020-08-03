import React, { useContext, useState, useEffect } from "react";

import Loading from "./Loading";
import Tweet from "./Tweet";

const HomeFeed = () => {
  const [feed, setFeed] = useState("null");
  const [feedState, setFeedState] = useState("loading");

  useEffect(() => {
    fetch(`/api/me/home-feed`)
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
        setFeedState("idle");
      });
  }, []);

  const tweetArray = feed.tweetIds;
  const tweets = feed.tweetsById;

  const getTweetById = (id) => {
    return tweets[id];
  };

  if (feedState === "idle") {
    return (
      <ul>
        {tweetArray.map((id) => {
          console.log(getTweetById(id));
          const tweet = getTweetById(id);
          return <Tweet tweetId={id} tweet={tweet} />;
        })}
      </ul>
    );
  } else {
    return <Loading />;
  }
};

export default HomeFeed;
