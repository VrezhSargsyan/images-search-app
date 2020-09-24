import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SearchComponent} from './search/search.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {FavoritePopupComponent} from './favorite-popup/favorite-popup.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {favoriteReducer} from './store/reducer/favorite.reducer';
import {imagesReducer} from './store/reducer/images.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ImagesEffects} from './store/effect/images.effects';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FavoriteComponent,
    FavoritePopupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({favorite: favoriteReducer, images: imagesReducer}),
    EffectsModule.forRoot([ImagesEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
