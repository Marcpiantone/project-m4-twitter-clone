import React, { useContext } from "react";

import Loading from "./Loading";
import Tweet from "./Tweet";
import Error from "./Error";
import Tweetbox from "./Tweetbox";

import { CurrentUserContext } from "./CurrentUserContext";

const HomeFeed = () => {
  const { feed, feedState } = useContext(CurrentUserContext);

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
