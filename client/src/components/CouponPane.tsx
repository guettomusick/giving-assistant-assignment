import React from 'react';
import styled from 'styled-components';

import Input from '../shared/components/Input';
import useCopyClipboard from '../shared/hooks/useCopyClipboard';

const CouponPaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

const CouponPane = () => {
  const [ref, handleCopy] = useCopyClipboard();
  const title = 'A title';
  const description = { __html: 'A description' };
  const code = 'TEST0001';

  return (
    <CouponPaneContainer>
      <Header>
        <HeroImage />
        <Title>{ title }</Title>
      </Header>
      <Description dangerouslySetInnerHTML={ description } />
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