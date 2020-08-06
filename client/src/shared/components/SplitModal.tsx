import React, { FC } from 'react';
import styled from 'styled-components';

import Modal, { Props as ModalProps } from './Modal';

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media(max-width: 768px) {
    flex-direction: column;
    overflow: auto;
  }
`;

const SplitPane = styled.div`
  flex-grow: 1;
  padding: 40px;
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
}) => {

  return (
    <StyledModal { ...props }>
      <LeftSplitPane>{ left }</LeftSplitPane>
      <RightSplitPane>{ right }</RightSplitPane>
    </StyledModal>
  )
};

export default SplitModal;