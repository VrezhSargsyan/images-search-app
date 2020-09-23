import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ImageService} from '../services/image.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  public showFormGroup: boolean;
  public favoriteList: { [k: string]: any }[];
  public editItem: { [k: string]: any };
  public favoriteList$: Subscription;

  constructor(private _imageService: ImageService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getFavoriteList();
  }

  public saveFavoriteItem(): void {
    const values = this.formGroup.value;
    this._imageService.updateFavoriteList({id: this.editItem.id, data: values});
    this.editItem = void 0;
    this.showFormGroup = null;
  }

  public editFavoriteItem(item: { [k: string]: any }): void {
    this.editItem = item;
    this.initForm(item);
    this.showFormGroup = true;
  }

  private initForm(item: { [k: string]: any }): void {
    this.formGroup = this._formBuilder.group({
      title: [item.title, []],
      description: [item.description, []],
    });
  }


  public downloadImage(url: string, name: string): void {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const a = document.createElement('a');
          if (typeof reader.result === 'string') {
            a.href = reader.result;
          }
          a.download = `${name}.jpg`;
          a.click();
        };
        reader.readAsDataURL(blob);
      });
  }

  private getFavoriteList(): void {
    this.favoriteList$ = this._imageService.favoriteList.subscribe((data: { [k: string]: any }[]) => this.favoriteList = data);
  }

  ngOnDestroy(): void {
    if (this.favoriteList$) {
      this.favoriteList$.unsubscribe();
    }
  }
}
