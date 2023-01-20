import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementClientPageComponent } from './paiement-client-page.component';

describe('PaiementClientPageComponent', () => {
  let component: PaiementClientPageComponent;
  let fixture: ComponentFixture<PaiementClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
