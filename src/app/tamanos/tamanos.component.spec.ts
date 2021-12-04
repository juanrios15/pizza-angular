import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamanosComponent } from './tamanos.component';

describe('TamanosComponent', () => {
  let component: TamanosComponent;
  let fixture: ComponentFixture<TamanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
