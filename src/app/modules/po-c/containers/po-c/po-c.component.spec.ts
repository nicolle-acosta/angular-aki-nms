import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoCComponent } from './po-c.component';

describe('PoCComponent', () => {
  let component: PoCComponent;
  let fixture: ComponentFixture<PoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
