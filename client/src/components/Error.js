import React from "react";
import { GiNuclearBomb } from "react-icons/gi";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <Bomb />
      <ErrorMessage>An unknown error has occured!</ErrorMessage>
      <ErrorSub>
        Please try refreshing the page, or contact support if the problem
        persists...
      </ErrorSub>
    </Wrapper>
  );
};

const Bomb = styled(GiNuclearBomb)`
  font-size: 150px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: bolder;
  font-size: 2em;
  margin-top: 10px;
`;

const ErrorSub = styled.div`
  margin-top: 10px;
`;
export default Error;
