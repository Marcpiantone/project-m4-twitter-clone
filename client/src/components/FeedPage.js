import React from "react";
import Tweetbox from "./Tweetbox";
import HomeFeed from "./HomeFeed";
import styled from "styled-components";

const FeedPage = () => {
  return (
    <UL>
      <Tweetbox />
      <HomeFeed />
    </UL>
  );
};

const UL = styled.ul`
  width: 55%;
`;

export default FeedPage;
