import React, { FC } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Thumbnail from './Thumbnail';
import { CmsImage } from '../types/cms';

const CouponButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`;

const StyledThumbnail = styled(Thumbnail)`
  border-radius: 6px 6px 0 0;
`;

type StyledButtonProps = {
  hasThumbnail: boolean;
};

const StyledButton = styled(Button)<StyledButtonProps>`
  ${props => props.hasThumbnail && `
    border-radius: 0 0 6px 6px;
  `};
`;

type Props = {
  title: string,
  onClick: () => any,
  thumbnail?: CmsImage,
};

const CouponButton: FC<Props> = ({
  title,
  onClick,
  thumbnail,
}) => (
  <CouponButtonContainer>
    { thumbnail && (
      <StyledThumbnail
        src={ `/api${thumbnail.formats?.medium?.url || thumbnail.url}` } 
        onClick={ onClick }
      />
    )}
    <StyledButton
      onClick={ onClick }
      hasThumbnail = { !!thumbnail }
    >
      { title }
    </StyledButton>
  </CouponButtonContainer>
);

export default CouponButton;