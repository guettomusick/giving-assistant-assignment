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
  text-align: center;
  margin-bottom: 20px;
`;

const HeroImage = styled.img`

`;

const Title = styled.h1`
  margin: 0;
`;

const Description = styled.div`
  flex-grow: 1;
`;

type CouponPaneProps = {
  cmsData: CouponCmsData,
};

const CouponPane: FC<CouponPaneProps> = ({ cmsData }) => {
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
        <HeroImage src={ `http://localhost:3000/api${hero.formats?.medium?.url || hero.url}` }/>
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