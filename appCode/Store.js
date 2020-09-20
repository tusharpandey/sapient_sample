import { createStore, combineReducers } from 'redux';

//REDUCER
import GalleryReducer from './presentation/picsumGallery/GalleryReducer';

let rootReducer = combineReducers({
    gallery: GalleryReducer,
});

const store = createStore(rootReducer);

export default store;
