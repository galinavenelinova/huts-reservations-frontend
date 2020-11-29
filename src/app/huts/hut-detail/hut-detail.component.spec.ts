import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HutDetailComponent } from './hut-detail.component';

describe('HutDetailComponent', () => {
  let component: HutDetailComponent;
  let fixture: ComponentFixture<HutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HutDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
