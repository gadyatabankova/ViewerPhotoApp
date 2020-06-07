import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData, itemsIncrPage, scrolling, openModalWindow, getTargetId } from '../actions/items';
import { likePhoto, autfToken} from '../actions/like';

import DownloadPhoto from '../components/download-photo';
import ShowPhoto from '../components/photo-show';

let App = (props) => {
    const {
      items, itemsHasErrored, itemsIsLoading, fetchData, likePhoto, ownProps, page, loadMore, scrolling, openModal, isOpen, getTargetId, targetId, token, autfToken
    } = props;

    console.log('OwProps', ownProps);
    console.log('page', page);

    return (
        <div className="block1">
            <DownloadPhoto
              likePhoto={likePhoto}
              fetchData={fetchData}
              items={items}
              itemsHasErrored={itemsHasErrored}
              itemsIsLoading={itemsIsLoading}
              page={page}
              loadMore={loadMore}
              scrolling={scrolling}
              openModal={openModal}
              getTargetId={getTargetId}
              token={token}
              autfToken={autfToken}

            />
            <ShowPhoto
              isOpen={isOpen}
              closeModal={() => {
                openModal(false);
                const el = document.querySelector('body');
                el.classList.remove('modal');
              }}
              likePhoto = {() => likePhoto(token, targetId)}
              targetId={targetId}
              token={token}
            />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        token: state.token,
        targetId: state.targetId,
        isOpen: state.isOpen,
        scrolling: state.scrolling,
        page: state.page,
        items: state.items,
        itemsHasErrored: state.itemsHasErrored,
        itemsIsLoading: state.itemsIsLoading,
        ownProps
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page, perPage, orderBy) => dispatch(itemsFetchData(page, perPage, orderBy)),
        likePhoto: (id, token) => dispatch(likePhoto(id, token)),
        loadMore: (page) => dispatch(itemsIncrPage(page)),
        openModal: (bool) => dispatch(openModalWindow(bool)),
        getTargetId: (id) => dispatch(getTargetId(id)),
        autfToken: (code) => dispatch(autfToken(code)),
    };
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;
