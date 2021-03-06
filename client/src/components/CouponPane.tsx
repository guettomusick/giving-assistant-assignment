import React, { FC } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Input from '../shared/components/Input';
import useCopyClipboard from '../shared/hooks/useCopyClipboard';
import { CouponCmsData } from '../services/coupon';

const CouponPaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 30px 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  text-align: center;
  margin-bottom: 20px;
`;

const HeroImage = styled.img`
  width: 30%;
`;

const Title = styled.h1`
  margin: 0;
  flex-grow: 1;
`;

const Description = styled.div`
  flex-grow: 1;
`;

export type Props = {
  cmsData: CouponCmsData,
};

const CouponPane: FC<Props> = ({ cmsData }) => {
  const [ref, handleCopy] = useCopyClipboard();

  const {
    hero,
    title,
    description,
    code,
  } = cmsData;


  return (
    <CouponPaneContainer>
      <Header>
        { hero && <HeroImage src={ `/api${hero.formats?.medium?.url || hero.url}` }/> }
        <Title>{ title }</Title>
      </Header>
      <Description>
        <ReactMarkdown source={ description } />
      </Description>
      <Input
        inputRef={ ref }
        name='code'
        value={ code }
        onClick={ handleCopy }
        cta='Copy'
        disabled={ true }
      />
    </CouponPaneContainer>
  )
};

export default CouponPane;