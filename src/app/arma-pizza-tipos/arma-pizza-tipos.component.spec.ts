import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaPizzaTiposComponent } from './arma-pizza-tipos.component';

describe('ArmaPizzaTiposComponent', () => {
  let component: ArmaPizzaTiposComponent;
  let fixture: ComponentFixture<ArmaPizzaTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmaPizzaTiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaPizzaTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
