import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshleychaseComponent } from './ashleychase.component';

describe('AshleychaseComponent', () => {
  let component: AshleychaseComponent;
  let fixture: ComponentFixture<AshleychaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshleychaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshleychaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
