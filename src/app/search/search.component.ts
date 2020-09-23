import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImageService} from '../services/image.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public formGroup: FormGroup;
  public imageList: { [k: string]: any }[];
  public isOpen: boolean;

  constructor(private _imageService: ImageService, private _formBuilder: FormBuilder) {
    this.getImageList();
  }

  ngOnInit(): void {
    this.initForm();
    this.actionOnInput();
  }

  private initForm(): void {
    this.formGroup = this._formBuilder.group({
      image_name: ['', [Validators.required]]
    });
  }

  private getImageList(): void {
    this._imageService.images
      .pipe(filter(data => !!data && data.length))
      .subscribe((images: { [k: string]: any }[]) => this.imageList = images);
  }

  private actionOnInput(): void {
    this.formGroup.get('image_name').valueChanges
      .pipe(filter(value => !!value))
      .subscribe((value) => this._imageService.requestImages(value));
  }

  public showPopup(image: { [k: string]: any }): void {
    this.isOpen = true;
    this._imageService.showPopupSubject.next(image);
  }
}
