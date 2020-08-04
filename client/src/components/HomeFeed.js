import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Tweet from "./Tweet";
import Error from "./Error";
import Tweetbox from "./Tweetbox";

const HomeFeed = () => {
  const [feed, setFeed] = useState("null");
  const [feedState, setFeedState] = useState("loading");

  useEffect(() => {
    const fetchFeed = async () => {
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
    fetchFeed();
  }, []);

  const tweetArray = feed.tweetIds;
  const tweets = feed.tweetsById;

  const getTweetById = (id) => {
    return tweets[id];
  };

  if (feedState === "idle") {
    return (
      <>
        <ul>
          <Tweetbox />
          {tweetArray.map((id) => {
            console.log(getTweetById(id));
            const tweet = getTweetById(id);
            return <Tweet tweetId={id} tweet={tweet} />;
          })}
        </ul>
      </>
    );
  }
  if (feedState === "error") {
    return <Error />;
  } else {
    return <Loading />;
  }
};

export default HomeFeed;
