import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { format } from "date-fns";

import { COLORS } from "./constants";

import { Status, Divider } from "./GlobalStyles";

import Loading from "./Loading";
import ActionBar from "./ActionBar";

const TweetDetails = ({ id }) => {
  const [details, setDetails] = useState("null");
  const [detailsState, setdetailsState] = useState("loading");

  useEffect(() => {
    fetch(`/api${window.location.pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setdetailsState("idle");
      });
  }, []);

  if (detailsState === "idle") {
    console.log(details);
    console.log(details.tweet.author);

    const tweetedOn = format(
      new Date(details.tweet.timestamp),
      "H:mm a · MMM d yyyy"
    );
    return (
      <Content>
        <AuthorInfos>
          <Avatar src={details.tweet.author.avatarSrc} />
          <NameHandle>
            <Name to={`/tweet/${details.tweet.author.handle}`}>
              {details.tweet.author.displayName}
            </Name>
            <Handle>@ {details.tweet.author.handle}</Handle>
          </NameHandle>
        </AuthorInfos>
        <Status>{details.tweet.status}</Status>
        <Media>
          {details.tweet.media.map((media) => {
            if (media.type === "img") {
              return <ImgMedia src={media.url} alt="brokenLink" />;
            } else {
              return <span>Media unrecognized</span>;
            }
          })}
          <ImgMedia />
        </Media>
        <TweetedOn>{tweetedOn}</TweetedOn>
        <ActionBar
          numRetweets={details.tweet.numRetweets}
          numLikes={details.tweet.numLikes}
        />
        <Divider />
      </Content>
    );
  } else {
    return <Loading />;
  }
};

const Content = styled.div`
  width: 700px;
  padding: 15px 15px 0px 15px;
  border-left: solid 1px ${COLORS.greyish};
  border-right: solid 1px ${COLORS.greyish};
`;

const AuthorInfos = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
`;

const NameHandle = styled.div`
  margin-left: 8px;
`;

const Name = styled(NavLink)`
  font-weight: bolder;
  font-size: 1.1em;
  color: black;
`;

const Handle = styled.div`
  color: ${COLORS.grey};
`;

const Media = styled.div`
  margin-bottom: 8px;
`;

const ImgMedia = styled.img`
  border-radius: 20px;
  max-width: 100%;
`;

const TweetedOn = styled.span`
  color: ${COLORS.grey};
  font-size: 0.85em;
`;

export default TweetDetails;
