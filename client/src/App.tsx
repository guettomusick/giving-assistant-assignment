import React from 'react';
import styled from 'styled-components';

import useModal from './shared/hooks/useModal';
import CouponButton from './shared/components/CouponButton';
import SplitModal from './shared/components/SplitModal';

import CouponPane from './components/CouponPane';
import SubscribePane from './components/SubscribePane';
import Loading from './shared/components/Loading';
import useCmsData from './shared/hooks/useCmsData';
import { getCouponCms } from './services/coupon';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const couponId = '5f2cb0d87d3dae00fc70c1a2';
  const { open, handleToggleModal } = useModal(true);
  const couponCmsData = useCmsData(() => getCouponCms(couponId));

  if (!couponCmsData) {
    return <Loading />;
  }

  const {
    cta: {
      title,
      thumbnail,
    },
  } = couponCmsData;

  return (
    <AppContainer>
      <CouponButton
        title={ title }
        thumbnail={ thumbnail }
        onClick={ handleToggleModal }
      />
      <SplitModal
        open={ open }
        onClose={ handleToggleModal }
        onBackdrop={ handleToggleModal }
        left={ <CouponPane cmsData={ couponCmsData }/>}
        right={ <SubscribePane /> }
      />
    </AppContainer>
  );
}

export default App;
