import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MountainService} from '../../home/shared/mountain.service';
import {IMountain} from '../../home/shared/mountain.model';
import {HutService} from '../shared/hut.service';
import {IHut} from '../shared/hut.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hut-create',
  templateUrl: './hut-create.component.html',
  styleUrls: ['./hut-create.component.css']
})
export class HutCreateComponent implements OnInit {
  form: FormGroup;
  hut: IHut;
  isLoading = false;
  isHutCreated = false;
  mountains: IMountain[];
  imagePreview: string;
  file: File;

  constructor(
    private fb: FormBuilder,
    private mountainService: MountainService,
    private hutService: HutService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      mountain: ['', [Validators.required]],
      name: ['', [Validators.required]],
      bedCapacity: ['', [Validators.required, Validators.min(1)]],
      shortInfo: ['', [Validators.required]],
      longInfo: ['', [Validators.required]],
      image: [null]
    });
    mountainService.loadMountainsList().subscribe(
      mountains => this.mountains = mountains
    );
  }

  ngOnInit(): void {
  }

  submitHandler(): void {
    this.hutService.createHut(this.form.value, this.form.get('mountain').value.id).subscribe(
      (hut) => {
        this.isHutCreated = true;
        this.hut = hut;
      }
    );
  }

  onSelect($event: Event): void {
    this.file = ($event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: this.file});
    this.form.get('image').updateValueAndValidity();
    const formData: FormData = new FormData();
    formData.append('file', this.file);
    this.hutService.uploadImage(formData, this.hut.id).subscribe(
      () => {
        this.router.navigate([`${this.hut.mountain.id}/huts`]);
      }
    );
  }
}
