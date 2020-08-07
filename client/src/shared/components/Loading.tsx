import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const ldsRipple = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
`;

const LdsRipple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: ${ldsRipple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;

const LdsRippleInner = styled.div`
  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const Loading = () => (
  <LoadingContainer>
    <LdsRipple>
      <LdsRippleInner />
      <LdsRippleInner />
    </LdsRipple>
  </LoadingContainer>
);

export default Loading;