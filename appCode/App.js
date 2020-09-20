import React, { useState } from 'react';
import store from './Store';
import { Provider } from 'react-redux';
import GalleryContainer from './presentation/picsumGallery/GalleryContainer';

const App = (props) => {

    return (
        <Provider store={store}>
            <GalleryContainer />
        </Provider>
    );
}

export default App;
