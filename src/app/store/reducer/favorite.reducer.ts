import {createReducer, on} from '@ngrx/store';
import {updateFavorite, createFavorite, addImageToFavorite} from '../action/common.action';

export const initialState = [];

const favoriteListReducer = createReducer(
  initialState,
  on(createFavorite, (state, action: { [k: string]: any }) => {
    const favoriteNewItem = {
      id: state.reduce((max, item) => (item.id > max) ? item.id : max, 0) + 1,
      title: action.item,
      description: '',
      images: [action.imageData]
    };

    return [...state, favoriteNewItem];
  }),
  on(addImageToFavorite, (state, action: { [k: string]: any }) => {
    return state.map(item => (item.id === action.item.id) ? {...item, images: [...item.images, action.imageData]} : item);
  }),
  on(updateFavorite, (state, action: { [k: string]: any }) => {
    return state.map(item => (item.id === action.id) ? {...item, ...action.data} : item);
  })
);

export function favoriteReducer(state: any, action: any): any {
  return favoriteListReducer(state, action);
}
