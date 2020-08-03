import React from "react";

import styled from "styled-components";
import { COLORS } from "./constants";

const Action = ({ color, children }) => {
  console.log(children);
  console.log(color);
  return (
    <ActionWrapper>
      <ActionButton color={color}>{children}</ActionButton>
    </ActionWrapper>
  );
};

const ActionWrapper = styled.div``;

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
