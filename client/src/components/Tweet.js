import React from "react";
import { NavLink } from "react-router-dom";

import { format } from "date-fns";

import styled, { keyframes } from "styled-components";
import { COLORS } from "./constants";

const Tweet = ({ tweetId, tweet }) => {
  console.log(tweet);

  //const shortDate = format(tweet.timestamp.split("T")[0], "MMM-d");
  var d = Date.parse(tweet.timestamp.split("T")[0]);
  console.log(d);
  return (
    <LI>
      <Name to="/">{tweet.author.displayName}</Name>
      <Handle>@{tweet.author.handle}</Handle>
      <TweetedOn>{tweet.timestamp}</TweetedOn>
    </LI>
  );
};

const Name = styled(NavLink)`
  font-weight: bolder;
`;

const Handle = styled.span``;

const TweetedOn = styled.span``;

const LI = styled.li``;

export default Tweet;
