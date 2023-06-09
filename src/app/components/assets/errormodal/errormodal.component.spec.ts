import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrormodalComponent } from './errormodal.component';

describe('ErrormodalComponent', () => {
  let component: ErrormodalComponent;
  let fixture: ComponentFixture<ErrormodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrormodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrormodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
