import React from "react";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";

import { FiRepeat } from "react-icons/fi";

import styled from "styled-components";
import { COLORS } from "./constants";

import { Status, Divider, Avatar, LI } from "./GlobalStyles";

import ActionBar from "./ActionBar";

const Tweet = ({ tweetId, tweet }) => {
  const tweetedOn = format(new Date(tweet.timestamp), "MMM do");
  return (
    <LI>
      <Content to={`/tweet/${tweetId}`}>
        {tweet.retweetFrom !== undefined && (
          <RetweetedBy>
            <FiRepeat />
            <pre> </pre> {tweet.retweetFrom.displayName} remeowed
          </RetweetedBy>
        )}
        <Author>
          <Avatar src={tweet.author.avatarSrc} />
          <Name to={`/tweet/${tweetId}`} id={tweetId}>
            {tweet.author.displayName}
          </Name>
          <pre> </pre>
          <TweetInfos>
            <Handle>@{tweet.author.handle} </Handle>
            <TweetedOn>· {tweetedOn}</TweetedOn>
          </TweetInfos>
        </Author>
        <Status>{tweet.status}</Status>
        <Media>
          {tweet.media.map((media) => {
            if (media.type === "img") {
              return <ImgMedia src={media.url} alt="brokenLink" />;
            } else {
              return <span>Media unrecognized</span>;
            }
          })}
        </Media>
      </Content>
      <ActionBar
        tweet={tweet}
        tweetID={tweetId}
        numRetweets={tweet.numRetweets}
        numLikes={tweet.numLikes}
      />
      <Divider />
    </LI>
  );
};

const Content = styled(NavLink)`
  padding: 0px 15px 0px 15px;
`;

const RetweetedBy = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  font-size: 0.85em;
  color: ${COLORS.grey};
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled(NavLink)`
  margin-left: 8px;
  font-weight: bolder;
  font-size: 1.1em;
  color: black;
`;

const TweetInfos = styled.span`
  color: ${COLORS.grey};
`;

const Handle = styled.span``;

const TweetedOn = styled.span``;

const Media = styled.div`
  margin-bottom: 8px;
`;

const ImgMedia = styled.img`
  border-radius: 20px;
  max-width: 100%;
  max-height: 100%;
`;

export default Tweet;
