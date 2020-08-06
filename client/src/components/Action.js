import React from "react";

import styled from "styled-components";
import { COLORS } from "./constants";
import ScaleIn from "./ScaleIn";

const Action = ({ color, children, num, onclick }) => {
  if (onclick !== null) {
    return (
      <ActionWrapper onClick={() => onclick()}>
        {/* <ScaleIn> NEED TO FIX THIS ONCLICK*/}
        <ActionButton color={color}>{children}</ActionButton>
        {num !== 0 ? <span>{num}</span> : <span></span>}
      </ActionWrapper>
    );
  } else {
    return (
      <ActionWrapper>
        {/* <ScaleIn> NEED TO FIX THIS ONCLICK*/}
        <ActionButton color={color}>{children}</ActionButton>
        {num !== 0 ? <span>{num}</span> : <span></span>}
      </ActionWrapper>
    );
  }
};

const ActionWrapper = styled.button`
  display: flex;
  align-items: center;
  color: ${COLORS.grey};
  background: none;
  border: none;
`;

const ActionButton = styled.div`
  border-radius: 50%;
  font-size: 20px;
  padding: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:after {
    content: "";
    background-color: ${(p) => p.color};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0;
  }

  &:hover {
    color: ${(p) => p.color};
  }

  &:hover:after {
    opacity: 0.12;
  }
`;

export default Action;
