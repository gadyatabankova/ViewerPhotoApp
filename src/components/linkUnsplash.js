import Unsplash from 'unsplash-js';

export const unsplash = new Unsplash({
  accessKey: "7Hl_-lhdVSrXSwnayqLBOpquMP_81ErK_zur6YkKx6M",
  secret: "kIkhYPaHa6xocrquAYfT6nDpo7Jwv9qFphlia68YFeo",
  callbackUrl: "http://viewerphoto.ru/"
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);
