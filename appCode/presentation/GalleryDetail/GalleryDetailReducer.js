import * as ActionType from '../util/ActionType';

const INITIAL_STATE = {
    galleryImages: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionType.GALLERY_REFRESH:
            return { ...state, galleryImages: action.payload }
        case ActionType.GALLERY_CLEAR:
            return { ...state, galleryImages: [] }
        default:
            return state;
    }
};
