import React from 'react';

import useModal from './shared/hooks/useModal';
import CouponButton from './shared/components/CouponButton';
import Modal from './shared/components/Modal';

import './App.css';

function App() {
  const { open, handleToggleModal } = useModal();

  return (
    <div className="App">
      <CouponButton title='Get Coupon' onClick={ handleToggleModal }/>
      <Modal
        open={ open }
        onClose={ handleToggleModal }
        onBackdrop={ handleToggleModal }
      />
    </div>
  );
}

export default App;
