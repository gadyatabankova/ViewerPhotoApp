import { unsplash, authenticationUrl } from '../components/linkUnsplash';

export const GET_TOKEN = 'GET_TOKEN';
export const GET_NEW_LIKE = 'GET_NEW_LIKE';

export const getToken = (token) => ({type: GET_TOKEN, token: token.access_token});
export const getNewLike = (item) => (
  {
    type: GET_NEW_LIKE,
    id: item.photo.id,
    likes: item.photo.likes,
    liked_by_user: item.photo.liked_by_user
  }
);

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
};

export function likePhoto(token, id, liked_by_user) {

  console.log("ID", id);
  console.log("TOKEN", token);
  console.log('liked_by_user', liked_by_user);

  return (dispatch) => {

      unsplash.auth.setBearerToken(token);
      if (liked_by_user) {
        return unsplash.photos.unlikePhoto(id)
          .then(res => {
              console.log('res2', res);
              return res.json()})
          .then(item => {
              console.log('item', item);
              return dispatch(getNewLike(item));
        });
      } else {
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
};
