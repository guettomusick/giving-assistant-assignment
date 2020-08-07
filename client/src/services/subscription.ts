import api, { onSuccess, onError } from './api';
import { CmsImage } from '../shared/types/cms';

export const subscribe = (email: string) =>
  api.post('/user-subscriptions', {
    email,
  })
  .then(onSuccess)
  .catch(onError);

type SubscribeCmsData = {
  hero: CmsImage,
  title: string,
  description: string,
  buttonTitle: string,
  errorMessage: string,
  successImage: CmsImage,
};

let subscribeCmsData: SubscribeCmsData;
export const getSubscribeCms = async () => {
  if (subscribeCmsData) {
    return subscribeCmsData;
  }

  try {
    const data = await api.get<SubscribeCmsData>('/subscription').then(onSuccess);
    subscribeCmsData = data;
    return data;
  } catch(onError) {
    return null;
  }
};