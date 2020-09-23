import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FavoriteComponent} from './favorite/favorite.component';
import {SearchComponent} from './search/search.component';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
