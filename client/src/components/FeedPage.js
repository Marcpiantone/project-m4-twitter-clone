import React, { useContext } from "react";
import Tweetbox from "./Tweetbox";
import HomeFeed from "./HomeFeed";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

import { UL } from "./GlobalStyles";

const FeedPage = () => {
  const { feed, feedState } = useContext(CurrentUserContext);
  return (
    <UL>
      <Tweetbox />
      <HomeFeed feed={feed} feedState={feedState} />
    </UL>
  );
};

export default FeedPage;
