import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImageSearchRoutingModule} from '../modules/image-search/src/image-search-routing.module';
import {ImageSearchModule} from '../modules/image-search';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageSearchModule,
    ImageSearchRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
