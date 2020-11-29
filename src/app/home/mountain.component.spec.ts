import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainComponent } from './mountain.component';

describe('HomeComponent', () => {
  let component: MountainComponent;
  let fixture: ComponentFixture<MountainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
