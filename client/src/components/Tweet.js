import React from "react";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";

import styled, { keyframes } from "styled-components";
import { COLORS } from "./constants";

const Tweet = ({ tweetId, tweet }) => {
  console.log();
  const tweetedOn = format(new Date(tweet.timestamp.split("T")[0]), "MMM do");
  console.log(
    tweet.timestamp.split("T")[0] +
      " does not compare to " +
      tweetedOn +
      " WHY, SCOTT ?"
  );
  return (
    <LI>
      <Content>
        <Name to="/">{tweet.author.displayName}</Name>
        <TweetInfos>
          <Handle>@{tweet.author.handle} </Handle>
          <TweetedOn>· {tweetedOn}</TweetedOn>
        </TweetInfos>
        <Status>{tweet.status}</Status>
        {tweet.media.map((media) => {
          if (media.type === "img") {
            return <ImgMedia src={media.url} alt="brokenLink" />;
          } else {
            return <span>Media unrecognized</span>;
          }
        })}
        <Divider />
      </Content>
    </LI>
  );
};

const LI = styled.li`
  border-left: solid 1px ${COLORS.greyish};
  border-right: solid 1px ${COLORS.greyish};
`;

const Content = styled.div`
  width: 700px;
  padding: 15px 15px 0px 15px;
`;

const Name = styled(NavLink)`
  font-weight: bolder;
  color: black;
`;

const TweetInfos = styled.span`
  color: ${COLORS.grey};
`;

const Handle = styled.span``;

const TweetedOn = styled.span``;

const Status = styled.p`
  margin-bottom: 8px;
`;

const Media = styled.div``;

const ImgMedia = styled.img`
  margin-bottom: 8px;
  border-radius: 20px;
  max-width: 670px;
`;

const Divider = styled.div`
  top: 10px;
  height: 1px;
  background: ${COLORS.greyish};
`;

export default Tweet;
