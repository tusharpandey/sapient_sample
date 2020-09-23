import { createStore, combineReducers } from 'redux';

//REDUCER
import GalleryReducer from './presentation/Gallery/GalleryReducer';
import GalleryDetailReducer from './presentation/GalleryDetail/GalleryDetailReducer';

let rootReducer = combineReducers({
    gallery: GalleryReducer,
    gallerydetail: GalleryDetailReducer,
});

const store = createStore(rootReducer);

export default store;
