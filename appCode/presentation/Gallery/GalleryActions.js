import * as ActionType from '../util/ActionType';

export const galleryRefresh = (payload) => {
    return {
        type: ActionType.GALLERY_REFRESH,
        payload: payload,
    }
};

export const galleryClear = () => {
    return {
        type: ActionType.GALLERY_CLEAR,
    }
};