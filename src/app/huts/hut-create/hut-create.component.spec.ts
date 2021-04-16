import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HutCreateComponent } from './hut-create.component';

describe('HutCreateComponent', () => {
  let component: HutCreateComponent;
  let fixture: ComponentFixture<HutCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HutCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
