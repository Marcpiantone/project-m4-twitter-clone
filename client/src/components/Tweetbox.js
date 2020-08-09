import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

import { COLORS } from "./constants";

import { Divider, Avatar, LI } from "./GlobalStyles";
import Error from "./Error";
import Loading from "./Loading";

const Tweetbox = () => {
  const {
    handleFeedRefresh,
    setFeedState,
    currentUser,
    currentUserState,
  } = useContext(CurrentUserContext);

  const [textLeft, setTextLeft] = useState(280);
  const [newStatus, setNewStatus] = useState("");

  const handleNewStatus = async (status) => {
    await fetch("/api/tweet", {
      method: "POST",
      body: JSON.stringify({ status: status }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      setNewStatus("");
      setFeedState("loading");
      handleFeedRefresh();
    });
  };

  useEffect(() => {
    setTextLeft(280 - newStatus.length);
  }, [newStatus]);

  if (currentUserState === "idle") {
    return (
      <LI>
        <Center>
          <Avatar src={currentUser.profile.avatarSrc} />
          <Inputbox
            type="text"
            placeholder="What's happening?"
            value={newStatus}
            onChange={(ev) => {
              setNewStatus(ev.target.value);
            }}
          />
        </Center>
        <AlignRight>
          {textLeft > 55 && <Counter className="normal">{textLeft}</Counter>}
          {textLeft < 55 && textLeft > 0 && (
            <Counter className="orange">{textLeft}</Counter>
          )}
          {textLeft < 0 && <Counter className="red">{textLeft}</Counter>}
          {textLeft === 280 || textLeft < 0 ? (
            <Meow disabled> Meow</Meow>
          ) : (
            <Meow onClick={() => handleNewStatus(newStatus)}> Meow</Meow>
          )}
        </AlignRight>

        <Divider />
      </LI>
    );
  }
  if (currentUserState === "error") {
    return <Error />;
  } else {
    return <Loading />;
  }
};

const Center = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Inputbox = styled.input`
  border: none;
  width: 100%;
  font-size: 1.2em;
  margin-left: 5px;
  outline: none;
`;

const Counter = styled.span`
  color: ${COLORS.grey};
  font-size: 0.85em;
  margin-right: 10px;
  &.orange {
    color: orange;
  }
  &.red {
    color: red;
  }
`;

const Meow = styled.button`
  border-radius: 20px;
  outline: none;
  border: none;
  background-color: ${COLORS.primary};
  color: white;
  font-weight: bolder;
  font-size: 1.3em;
  padding: 8px;
  cursor: pointer;
  transition: all ease 300ms;
  &:hover {
    background-color: ${COLORS.darker};
  }
  &:disabled {
    background-color: ${COLORS.secondary};
  }
  &:active {
    transform: scale(0.8);
  }
`;

const AlignRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export default Tweetbox;
