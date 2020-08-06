import React, { useContext } from "react";

import styled from "styled-components";
import { COLORS } from "./constants";

import { CurrentUserContext } from "./CurrentUserContext";

import Action from "./Action";

import { FiShare, FiHeart, FiRepeat, FiMessageCircle } from "react-icons/fi";

const ActionBar = ({ numRetweets, numLikes, tweetID, tweet }) => {
  const { handleFeedRefresh } = useContext(CurrentUserContext);

  const handleLike = async () => {
    const tweetLiked = tweet.isLiked;
    await fetch(`/api/tweet/${tweetID}/like`, {
      method: "PUT",
      body: JSON.stringify({ like: !tweetLiked }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      handleFeedRefresh();
    });
  };

  const handleRetweet = async () => {
    const tweetRetweeted = tweet.isRetweeted;
    await fetch(`/api/tweet/${tweetID}/retweet`, {
      method: "PUT",
      body: JSON.stringify({ retweet: !tweetRetweeted }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      handleFeedRefresh();
    });
  };

  return (
    <Bar>
      <Action color={COLORS.commentButton}>
        <FiMessageCircle />
      </Action>
      <Action
        onclick={handleRetweet}
        color={COLORS.retweetButton}
        num={numRetweets}
      >
        <FiRepeat />
      </Action>
      <Action onclick={handleLike} color={COLORS.likeButton} num={numLikes}>
        <FiHeart />
      </Action>
      <Action color={COLORS.shareButton}>
        <FiShare />
      </Action>
    </Bar>
  );
};

const Bar = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default ActionBar;
