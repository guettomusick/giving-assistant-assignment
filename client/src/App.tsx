import React from 'react';
import styled from 'styled-components';

import useModal from './shared/hooks/useModal';
import CouponButton from './shared/components/CouponButton';
import SplitModal from './shared/components/SplitModal';

import CouponPane from './components/CouponPane';
import SubscribePane from './components/SubscribePane';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { open, handleToggleModal } = useModal(true);

  return (
    <AppContainer>
      <CouponButton title='Get Coupon' onClick={ handleToggleModal }/>
      <SplitModal
        open={ open }
        onClose={ handleToggleModal }
        onBackdrop={ handleToggleModal }
        left={ <CouponPane />}
        right={ <SubscribePane /> }
      />
    </AppContainer>
  );
}

export default App;
