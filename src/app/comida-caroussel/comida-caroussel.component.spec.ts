import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaCarousselComponent } from './comida-caroussel.component';

describe('ComidaCarousselComponent', () => {
  let component: ComidaCarousselComponent;
  let fixture: ComponentFixture<ComidaCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaCarousselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
