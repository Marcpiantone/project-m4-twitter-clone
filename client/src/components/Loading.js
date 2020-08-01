import React from "react";

import styled, { keyframes } from "styled-components";
import { COLORS } from "./constants";

import { FiLoader } from "react-icons/fi";

const Loading = () => {
  return <StyledLoader />;
};

const spin = keyframes`
  from {
  transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

const StyledLoader = styled(FiLoader)`
  font-size: 30px;
  color: ${COLORS.greyish};
  animation: ${spin} 1000ms infinite linear;
`;

export default Loading;
