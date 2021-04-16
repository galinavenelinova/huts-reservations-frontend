import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator, rePasswordValidatorFactory} from '../../shared/validators';
import {MountainService} from '../../home/shared/mountain.service';
import {IMountain} from '../../home/shared/mountain.model';
import {Cloudinary} from '@cloudinary/angular-5.x';
import {ImageUploadComponent} from '../../shared/image-upload/image-upload.component';

@Component({
  selector: 'app-hut-create',
  templateUrl: './hut-create.component.html',
  styleUrls: ['./hut-create.component.css']
})
export class HutCreateComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  mountains: IMountain[];

  constructor(
    private fb: FormBuilder,
    private mountainService: MountainService,
    // private imageUploadComponent: ImageUploadComponent
  ) {
    this.form = this.fb.group({
      mountainName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      shortInfo: ['', [Validators.required]],
      longInfo: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });
    mountainService.loadMountainsList().subscribe(
      mountains => this.mountains = mountains
    );
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    console.log(this.form.value);
  }
}
