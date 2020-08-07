import React, { FC } from 'react';
import styled from 'styled-components';

import Modal, { Props as ModalProps } from './Modal';

const SplitPlaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media(max-width: 640px) {
    flex-direction: column;
    overflow: auto;
  }
`;

const SplitPane = styled.div`
  position: relative;
  flex-grow: 1;
  width: 50%;
  overflow: auto;
  @media(max-width: 640px) {
    width: 100%;
    overflow: initial;
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
  <Modal { ...props }>
    <SplitPlaneContainer>
      <LeftSplitPane>{ left }</LeftSplitPane>
      <RightSplitPane>{ right }</RightSplitPane>
    </SplitPlaneContainer>
  </Modal>
);

export default SplitModal;