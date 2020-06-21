import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "7Hl_-lhdVSrXSwnayqLBOpquMP_81ErK_zur6YkKx6M",
  secret: "kIkhYPaHa6xocrquAYfT6nDpo7Jwv9qFphlia68YFeo",
  callbackUrl: "http://viewerphoto.ru/"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

// export function autf() {
//
//   const autfCode = location.search.split('code=')[1];
//   console.log('CODE', autfCode);
//
//   return {
//     type: 'CODE',
//     code: autfCode
//   };
//
// }

export function autfToken() {

  const code = location.search.split('code=')[1];

  return (dispatch) => {
    unsplash.auth.userAuthentication(code)
      .then(res => {
        console.log('res', res);
        return res.json()})
      .then(token => {
        console.log('TOKEN', token);
        return dispatch(getToken(token))
      });
  }
}

export function getToken(token) {
  return {
    type: 'GET_TOKEN',
    token: token.access_token
  };
}

export function likePhoto(token, id) {

  console.log("ID", id);
  console.log("TOKEN", token);
  // const code = location.search.split('code=')[1];

  return (dispatch) => {

      unsplash.auth.setBearerToken(token);

      return unsplash.photos.likePhoto(id)
        .then(res => {
            console.log('res2', res);
            return res.json()})
        .then(item => {
            console.log('item', item);
            return dispatch(getNewLike(item));
      });
  }
}

export function getNewLike(item) {
  return {
    type: 'GET_NEW_LIKE',
      id: item.photo.id,
      likes: item.photo.likes
  };
}
