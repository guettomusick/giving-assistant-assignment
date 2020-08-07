import api, { onSuccess, onError } from './api';
import { CmsImage } from '../shared/types/cms';

export const subscribe = (email: string) =>
  api.post('/user-subscriptions', {
    email,
  })
  .then(onSuccess)
  .catch(onError);

export type CouponCmsData = {
  title: string,
  description: string,
  hero: CmsImage,
  code: string,
  active: boolean,
  cta: {
    title: string,
    thumbnail: CmsImage,
  }
};

export const getCouponCms = async (couponId: string): Promise<CouponCmsData | null> => 
  api.get<CouponCmsData>(`/coupons/${couponId}`)
  .then(onSuccess)
  .catch(onError);