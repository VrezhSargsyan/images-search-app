import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getImagesRequest, createFavorite, updateFavorite, addImageToFavorite} from '../store/action/common.action';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ImageService {
  public showPopupSubject: BehaviorSubject<{ [k: string]: any }>;
  public isOpen: boolean;

  private images$: Observable<{ [k: string]: any }>;
  private favoriteList$: Observable<{ [k: string]: any }>;

  constructor(private store: Store<{ images: { [k: string]: any } }[]>) {
    this.showPopupSubject = new BehaviorSubject<{ [k: string]: any }>(void 0);

    this.images$ = store.pipe(select((state: any) => state.images));
    this.favoriteList$ = store.pipe(select((state: any) => state.favorite));
  }

  get images(): Observable<{ [k: string]: any }> {
    return this.images$;
  }

  get favoriteList(): Observable<{ [k: string]: any }> {
    return this.favoriteList$;
  }

  get showPopup(): Observable<{ [k: string]: any }> {
    return this.showPopupSubject;
  }

  public addImageToFavoriteList(data: { [k: string]: any }): void {
    this.store.dispatch(addImageToFavorite(data));
  }

  public updateFavoriteList(data: { [k: string]: any }): void {
    this.store.dispatch(updateFavorite(data));
  }

  public createFavoriteList(data: { [k: string]: any }): void {
    this.store.dispatch(createFavorite(data));
  }

  public requestImages(query: string): void {
    this.store.dispatch(getImagesRequest({query}));
  }
}
