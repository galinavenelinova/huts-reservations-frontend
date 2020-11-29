import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HutListComponent } from './hut-list.component';

describe('HutListComponent', () => {
  let component: HutListComponent;
  let fixture: ComponentFixture<HutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
