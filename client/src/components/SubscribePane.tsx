import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Button from '../shared/components/Button';
import Input from '../shared/components/Input';
import useHandleChange from '../shared/hooks/useHandleChange';
import { getSubscribeCms, subscribe } from '../services/subscription';
import useCmsData from '../shared/hooks/useCmsData';
import Loading from '../shared/components/Loading';

const SubscribePaneContainer = styled.div`
  background-color: #A8E5DA;
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
  width: calc(100% + 40px);
  margin: -30px;
  margin-bottom: 10px;
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
  margin: auto;
  width: 50%;

  @media(max-width: 450px) {
    width: 100%;
  }
`;

const SuccessImage = styled.img`
  width: 80%;
  margin: auto;
`;

const SubscribePane = () => {
  const cmsData = useCmsData(getSubscribeCms);
  const [data, handleChange] = useHandleChange({ email: '' });
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [error, setError] = useState<string | undefined>()

  if (!cmsData) {
    return <Loading />;
  }

  const {
    title,
    description,
    hero,
    buttonTitle,
    errorMessage,
    successImage,
  } = cmsData;

  const { email } = data;

  const handleSubscribe = async () => {
    try {
      setSubscribing(true);
      await subscribe(email);
      setSubscribed(true);
    } catch(error) {
      setError(errorMessage);
      setSubscribing(false);
    }
  };

  return (
    <SubscribePaneContainer>
      <Header>
        <HeroImage src={ `http://localhost:3000/api${hero.formats?.medium?.url || hero.url}` }/>
        <Title>{ title }</Title>
      </Header>
      <Description>
        <ReactMarkdown source={ description } />
      </Description>
      { !subscribed && (
        <>
          <StyledInput
            name='email'
            value={ email }
            onChange={ handleChange }
            placeholder='Email Address'
            textMuted={ error }
            disabled={ subscribing }
          />
          <SubscribeButton
            onClick={ handleSubscribe }
            disabled={ subscribing }
          >
            { buttonTitle }
          </SubscribeButton>
        </>
      )}
      { subscribed && (
        <SuccessImage src={ `http://localhost:3000/api${successImage.formats?.medium?.url || successImage.url}` } />
      )}
    </SubscribePaneContainer>
  )
};

export default SubscribePane;