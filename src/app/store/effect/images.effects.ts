import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError, filter} from 'rxjs/operators';
import {getImagesRequest, GET_IMAGES_SUCCESS} from '../action/common.action';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ImagesEffects {
  loadImages$ = createEffect<any, any, any, any>(() => this.actions$.pipe(
    ofType(getImagesRequest),
    mergeMap((payload: { query: string }) => this.http.get(`https://api.unsplash.com/search/photos?&query=${payload.query}&client_id=acOs2nZo4ikkpilDLZvfk0STLpgpjgrlMb03GS5NUJY`, {})
      .pipe(
        map(images => ({type: GET_IMAGES_SUCCESS, payload: images})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
  }
}
