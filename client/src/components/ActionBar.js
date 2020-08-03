import React, { useContext } from "react";

import styled from "styled-components";
import { COLORS } from "./constants";

import Action from "./Action";

import { FiShare, FiHeart, FiRepeat, FiMessageCircle } from "react-icons/fi";

const ActionBar = ({ numRetweets, numLikes }) => {
  return (
    <Bar>
      <Action color={COLORS.commentButton}>
        <FiMessageCircle />
      </Action>
      <Action color={COLORS.retweetButton} num={numRetweets}>
        <FiRepeat />
      </Action>
      <Action color={COLORS.likeButton} num={numLikes}>
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
