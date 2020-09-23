import {createAction, props} from '@ngrx/store';

export const GET_IMAGES_SUCCESS = 'GET_IMAGES <SUCCESS>';

export const getImagesSuccess = createAction(GET_IMAGES_SUCCESS);
export const getImagesRequest = createAction('GET_IMAGES <REQUEST>', props<{ query: string }>());

export const updateFavorite = createAction('FAVORITE_UPDATE', props<{ [k: string]: any }>());
export const createFavorite = createAction('FAVORITE_CREATE', props<{ [k: string]: any }>());
export const addImageToFavorite = createAction('FAVORITE_ADD_IMAGE', props<{ [k: string]: any }>());
