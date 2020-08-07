import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Button from '../shared/components/Button';
import Input from '../shared/components/Input';
import useHandleChange from '../shared/hooks/useHandleChange';
import { getSubscribeCms, subscribe } from '../services/subscription';
import useCmsData from '../shared/hooks/useCmsData';
import Loading from '../shared/components/Loading';
import useThrotle from '../shared/hooks/useThrotle';

const MAX_RETRIES = 2;

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubscribePane = () => {
  const cmsData = useCmsData(getSubscribeCms);
  const [data, handleChange] = useHandleChange({ email: '' });
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [remaining, retry, incrementRetry, resetRetry] = useThrotle();

  useEffect(() => {
    if (retry > MAX_RETRIES) {
      setError('No more retries left.');
      // To force input dirtys
      data.email += ' ';
      return;
    }

    if (remaining > 0 && cmsData?.errorMessage) {
      setError(cmsData.errorMessage.replace('${remaining}', remaining.toString()));
    }

    if (remaining === 0) {
      setError(undefined);
      setSubscribing(false);
    }
  }, [remaining, cmsData, retry]);

  if (!cmsData) {
    return <Loading />;
  }

  const {
    title,
    description,
    hero,
    buttonTitle,
    successImage,
  } = cmsData;

  const { email } = data;
  const disabled = subscribing || retry > MAX_RETRIES;

  const handleSubscribe = async () => {
    if (email && !disabled) {
      try {
        setSubscribing(true);
        await subscribe(email);
        setSubscribed(true);
        resetRetry();
      } catch(error) {
        incrementRetry();
      }
    }
  };

  return (
    <SubscribePaneContainer>
      <Header>
        <HeroImage src={ `/api${hero.formats?.medium?.url || hero.url}` }/>
        <Title>{ title }</Title>
      </Header>
      <Description>
        <ReactMarkdown source={ description } />
      </Description>
      { !subscribed && (
        <Form onSubmit={ handleSubscribe }>
          <StyledInput
            name='email'
            value={ email }
            onChange={ handleChange }
            placeholder='Email Address'
            textMuted={ error }
            disabled={ disabled }
          />
          <SubscribeButton
            onClick={ handleSubscribe }
            disabled={ disabled }
          >
            { buttonTitle }
          </SubscribeButton>
        </Form>
      )}
      { subscribed && (
        <SuccessImage src={ `/api${successImage.formats?.medium?.url || successImage.url}` } />
      )}
    </SubscribePaneContainer>
  )
};

export default SubscribePane;