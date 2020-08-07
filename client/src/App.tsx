import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import useModal from './shared/hooks/useModal';
import CouponButton from './shared/components/CouponButton';
import SplitModal from './shared/components/SplitModal';

import CouponPane from './components/CouponPane';
import SubscribePane from './components/SubscribePane';
import Loading from './shared/components/Loading';
import useCmsData from './shared/hooks/useCmsData';
import { getCouponCms, getCoupons } from './services/coupon';
import useQueryParams from './shared/hooks/useQueryParams';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { get: getQueryParam } = useQueryParams();
  const [couponId, setCouponId] = useState<string | null>(getQueryParam('couponId'));
  const { open, handleToggleModal } = useModal(false);
  const couponCmsData = useCmsData(() => getCouponCms(couponId));

  useEffect(() => {
    (async () => {
      if (!couponId) {
        try {
          const coupons = await getCoupons();
          if (coupons && coupons.length > 0) {
            setCouponId(coupons[Math.floor(Math.random() * coupons.length)]);
          }
        } catch(error) {
          setCouponId('5f2cb0d87d3dae00fc70c1a2');
        };
      }
    })();
  }, [couponId]);

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
