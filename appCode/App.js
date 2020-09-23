import React, { useState } from 'react';
import store from './Store';
import { Provider } from 'react-redux';
import GalleryContainer from './presentation/Gallery/GalleryContainer';
import AppNavigator from './AppNavigator';

const App = (props) => {

    return (
        <Provider store={store}>
            <AppNavigator />
            {/* <GalleryContainer /> */}
        </Provider>
    );
}

export default App;
