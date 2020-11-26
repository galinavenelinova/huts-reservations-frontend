import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HutComponent } from './hut.component';

describe('HutComponent', () => {
  let component: HutComponent;
  let fixture: ComponentFixture<HutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
