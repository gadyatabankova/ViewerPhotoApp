import Unsplash from 'unsplash-js';
// import { autfToken } from '../actions/like';

const unsplash = new Unsplash({
  accessKey: "7Hl_-lhdVSrXSwnayqLBOpquMP_81ErK_zur6YkKx6M",
  secret: "kIkhYPaHa6xocrquAYfT6nDpo7Jwv9qFphlia68YFeo",
  callbackUrl: "http://viewerphoto.ru/"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

export default function Autf() {

  location.assign(authenticationUrl);
  const autfCode = location.search.split('code=')[1];
  console.log('CODE', autfCode);

  // let token = JSON.parse(localStorage.getItem('token2'));
  // if ((!token || token.error) && code) {
  //   autfToken(code, (json) => {
  //     if (!json.error) {
  //       localSorage.setItem('token2', JSON.stringify(json))
  //       handler(json);
  //     } else {
  //       handler(null)
  //     }
  //   })
  // } else if (token && !token.error) {
  //   unsplash.auth.setBearerToken(token.access_token);
  //   handler(token);
  // } else {
  //   handler(null);
  // }

}
