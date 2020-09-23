import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ImageService} from '../services/image.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-favorite-popup',
  templateUrl: './favorite-popup.component.html',
  styleUrls: ['./favorite-popup.component.scss']
})
export class FavoritePopupComponent implements OnInit, OnDestroy {
  public imageData: { [k: string]: any };
  public favoriteList: { [k: string]: any }[];
  public showPopup$: Subscription;
  public favoriteList$: Subscription;
  public formGroup: FormGroup;

  constructor(private _imageService: ImageService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getImageData();
    this.getFavoriteList();
  }

  public createNewFavorite(): void {
    this._imageService.createFavoriteList({item: this.formGroup.get('new_favorite_item').value, imageData: this.imageData});
    this.closePopup();
    this.formGroup.get('new_favorite_item').patchValue(null);
  }

  public selectFavoriteItem(item: { [k: string]: any }): void {
    this._imageService.addImageToFavoriteList({item, imageData: this.imageData});
    this.closePopup();
  }

  private initForm(): void {
    this.formGroup = this._formBuilder.group({
      new_favorite_item: ['', []],
    });
  }

  private getImageData(): void {
    this.showPopup$ = this._imageService.showPopup
      .subscribe((data: { [k: string]: any }) => this.imageData = data);
  }

  private getFavoriteList(): void {
    this.favoriteList$ = this._imageService.favoriteList
      .subscribe((data: { [k: string]: any }[]) => this.favoriteList = data);
  }

  private closePopup(): void {
    this._imageService.showPopupSubject.next(null);
  }

  ngOnDestroy(): void {
    if (this.showPopup$) {
      this.showPopup$.unsubscribe();
    }

    if (this.favoriteList$) {
      this.favoriteList$.unsubscribe();
    }
  }
}
