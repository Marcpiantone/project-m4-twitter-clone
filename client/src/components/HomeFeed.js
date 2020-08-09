import React from "react";

import Loading from "./Loading";
import Tweet from "./Tweet";
import Error from "./Error";

const HomeFeed = ({ feed, feedState }) => {
  const tweetArray = feed.tweetIds;
  const tweets = feed.tweetsById;

  const getTweetById = (id) => {
    return tweets[id];
  };

  if (feedState === "idle") {
    return (
      <>
        {tweetArray.map((id) => {
          console.log(getTweetById(id));
          const tweet = getTweetById(id);
          return <Tweet tweetId={id} tweet={tweet} />;
        })}
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
