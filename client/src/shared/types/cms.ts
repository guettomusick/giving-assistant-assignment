type ImageFormat = {
  height: number,
  width: number,
  url: string,
};

export type CmsImage = ImageFormat & {
  formats: {
    large: ImageFormat,
    medium: ImageFormat,
    small: ImageFormat,
    thumbnail: ImageFormat,
  },
};