import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshleychasecommentComponent } from './ashleychasecomment.component';

describe('AshleychasecommentComponent', () => {
  let component: AshleychasecommentComponent;
  let fixture: ComponentFixture<AshleychasecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshleychasecommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshleychasecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
