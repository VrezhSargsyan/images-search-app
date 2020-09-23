import {createReducer, createSelector, on} from '@ngrx/store';
import {getImagesSuccess} from '../action/common.action';

export const initialState = [];

const imageListReducer = createReducer(
  initialState,
  on(getImagesSuccess, (state: [], action: {[k: string]: any}) => {
    return [...action.payload?.results];
  })
);

export function imagesReducer(state: [] | undefined, action: any): any {
  return imageListReducer(state, action);
}
