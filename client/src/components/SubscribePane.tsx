import React from 'react';
import styled from 'styled-components';

import Button from '../shared/components/Button';
import Input from '../shared/components/Input';
import useHandleChange from '../shared/hooks/useHandleChange';

const SubscribePaneContainer = styled.div`
  background-color: #A8E5DA;
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

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const SubscribeButton = styled(Button)`

`;

const SubscribePane = () => {
  const [data, handleChange] = useHandleChange({ email: '' });
  const title = 'A title';
  const description = { __html: 'A description' };

  const { email } = data;

  return (
    <SubscribePaneContainer>
      <Header>
        <HeroImage />
        <Title>{ title }</Title>
      </Header>
      <Description dangerouslySetInnerHTML={ description } />
      <StyledInput
        name='email'
        value={ email }
        onChange={ handleChange }
        placeholder='Email Address'
      />
      <SubscribeButton>Subscribe</SubscribeButton>
    </SubscribePaneContainer>
  )
};

export default SubscribePane;