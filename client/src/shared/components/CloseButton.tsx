import React, { FC } from 'react';
import styled from 'styled-components';

import CloseButtonIcon from '../icons/Close';

const CloseButtonIconContainer = styled.div`
  svg {
    cursor: pointer;
    fill: #444;
    &:hover {
      fill: #888;
    }
  }
`;

type Props = {
  onClick: () => any,
  className?: string,
};

const CloseButton: FC<Props> = ({ onClick, className }) => (
  <CloseButtonIconContainer
    onClick={ onClick } 
    className={ className }
  >
    <CloseButtonIcon />
  </CloseButtonIconContainer>
);

export default CloseButton;