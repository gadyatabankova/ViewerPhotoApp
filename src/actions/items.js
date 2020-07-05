import { unsplash, authenticationUrl } from '../components/linkUnsplash';

export const GET_OUT = 'GET_OUT';
export const GET_LOGIN = 'GET_LOGIN';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const SCROLLING = 'SCROLLING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
export const ITEMS_INCR_PAGE = 'ITEMS_INCR_PAGE';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
export const GET_TARGET_ID = 'GET_TARGET_ID';

export const getOut = () => ({type: GET_OUT, token: null});
export const getLogin = (bool) => ({type: GET_LOGIN, login: bool});
export const itemsHasErrored = (bool) => ({type: ITEMS_HAS_ERRORED, itemsHasErrored: bool});
export const itemsIsLoading = (bool) => ({type: ITEMS_IS_LOADING, itemsIsLoading: bool});
export const scrolling = (bool) => ({type: SCROLLING, scrolling: bool});
export const itemsFetchDataSuccess = (items) => ({type: ITEMS_FETCH_DATA_SUCCESS, items});
export const itemsIncrPage = (page) => ({type: ITEMS_INCR_PAGE, page: page + 1});
export const openModalWindow = (bool) => ({type: OPEN_MODAL_WINDOW, isOpen: bool});
export const getTargetId = (id) => ({type: GET_TARGET_ID, targetId: id});

export function itemsFetchData(page, token) {

  console.log('BARRERTOKEN');
  console.log('page', page);
  console.log('token', token);

  if (token != null) {
    unsplash.auth.setBearerToken(token);
  }

  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    dispatch(scrolling(true));

    unsplash.photos.listPhotos(page)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));
        console.log('response1', response);
        return response;
      })
      .then((response) => {
        console.log('response2', response);
        return response.json();
      })
      .then((response) => {
        console.log('response3', response);
        return response;
      })
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
      .then(() => dispatch(scrolling(false)));
  };
};
