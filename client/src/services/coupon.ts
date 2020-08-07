import api, { onSuccess, onError } from './api';
import { CmsImage } from '../shared/types/cms';

export const subscribe = (email: string) =>
  api.post('/user-subscriptions', {
    email,
  })
  .then(onSuccess)
  .catch(onError);

export type CouponCmsData = {
  id: string,
  title: string,
  description: string,
  hero?: CmsImage,
  code: string,
  active: boolean,
  cta: {
    title: string,
    thumbnail?: CmsImage,
  }
};

export const getCoupons = (): Promise<string[] | null> => 
  api.get<CouponCmsData[]>('/coupons')
  .then(onSuccess)
  .then(coupons => coupons.map(coupon => coupon.id))
  .catch(onError);

let couponCmsData: CouponCmsData;
export const getCouponCms = async (couponId: string | null): Promise<CouponCmsData | null> => {
  if (couponCmsData) {
    return couponCmsData;
  }
  
  if (!couponId?.length) {
    return null;
  }

  try {
    const data = await api.get<CouponCmsData>(`/coupons/${couponId}`).then(onSuccess);
    couponCmsData = data;
    return data;
  } catch(onError) {
    return null;
  }
};