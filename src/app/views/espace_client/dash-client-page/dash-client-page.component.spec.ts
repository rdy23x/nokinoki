import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashClientPageComponent } from './dash-client-page.component';

describe('DashClientPageComponent', () => {
  let component: DashClientPageComponent;
  let fixture: ComponentFixture<DashClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
