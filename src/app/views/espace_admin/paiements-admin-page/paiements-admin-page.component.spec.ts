import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementsAdminPageComponent } from './paiements-admin-page.component';

describe('PaiementsAdminPageComponent', () => {
  let component: PaiementsAdminPageComponent;
  let fixture: ComponentFixture<PaiementsAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementsAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementsAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
