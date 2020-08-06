import React, { FC } from 'react';
import styled from 'styled-components';

import Modal, { Props as ModalProps } from './Modal';

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media(max-width: 640px) {
    flex-direction: column;
    overflow: auto;
  }
`;

const SplitPane = styled.div`
  flex-grow: 1;
  width: 50%;
  @media(max-width: 640px) {
    width: 100%;
  }
`;

const LeftSplitPane = styled(SplitPane)`

`;

const RightSplitPane = styled(SplitPane)`
  
`;

export type Props = ModalProps & {
  left: JSX.Element,
  right: JSX.Element,
};

const SplitModal: FC<Props> = ({
  left,
  right,
  ...props
}) => (
  <StyledModal { ...props }>
    <LeftSplitPane>{ left }</LeftSplitPane>
    <RightSplitPane>{ right }</RightSplitPane>
  </StyledModal>
);

export default SplitModal;