import React, { FC } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Thumbnail from './Thumbnail';

const CouponButtonContainer = styled.div`

`;

type Props = {
  title: string,
  onClick: () => any,
  thumb?: string,
};

const CouponButton: FC<Props> = ({
  title,
  onClick,
  thumb,
}) => {
  return (
    <CouponButtonContainer>
      { thumb && <Thumbnail src={ thumb } /> }
      <Button onClick={ onClick }>{ title }</Button>
    </CouponButtonContainer>
  )
}

export default CouponButton;