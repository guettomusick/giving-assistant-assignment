import React, { FC } from 'react';
import styled from 'styled-components';

import CloseButton from './CloseButton';
import useStopPropagation from '../hooks/useStopPropagation';

const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
  padding: 10vh 10vw;
  cursor: pointer;

  @media(max-width: 768px) {
    padding: 0;
  }
`;

const ModalContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
  cursor: default;

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export type Props = {
  open: boolean,
  onClose: () => any,
  onBackdrop: () => any,
  className?: string,
};

const Modal: FC<Props> = ({
  children,
  open,
  onClose,
  onBackdrop,
  className,
}) => {
  const handleClickContainer = useStopPropagation();

  if (!open) {
    return null;
  }

  const modalContainer = (
    <ModalContainer onClick={ handleClickContainer } className={ className }>
      { onClose && <CloseButton className='close-button' onClick={ onClose } /> }
      { children }
    </ModalContainer>
  );

  return onBackdrop
    ? <Backdrop onClick={ onBackdrop }>{ modalContainer }</Backdrop>
    : modalContainer;
};

export default Modal;