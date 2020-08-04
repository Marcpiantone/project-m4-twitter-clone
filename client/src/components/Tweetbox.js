import React, { useContext, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { COLORS } from "./constants";

import { Divider, Avatar, LI } from "./GlobalStyles";

const Tweetbox = () => {
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
    }).then(setNewStatus(""));
  };

  useEffect(() => {
    setTextLeft(280 - newStatus.length);
  }, [newStatus]);

  return (
    <LI>
      <Inputbox
        type="text"
        placeholder="What's happening?"
        value={newStatus}
        onChange={(ev) => {
          setNewStatus(ev.target.value);
        }}
      />
      <AlignRight>
        <Counter inactive>{textLeft}</Counter>
        {textLeft === 280 || textLeft < 0 ? (
          <Meow disabled> Meow</Meow>
        ) : (
          <Meow onClick={() => handleNewStatus(newStatus)}> Meow</Meow>
        )}
      </AlignRight>
      <Divider />
    </LI>
  );
};

const Inputbox = styled.input`
  outline: none;
  border: none;
  max-width: 100%;
  width: 100%;
  font-size: 1.2em;
`;

const Counter = styled.span`
  color: ${COLORS.grey};
  font-size: 0.85em;
  margin-right: 10px;
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
`;

export default Tweetbox;
