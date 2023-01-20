import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsAdminPageComponent } from './clients-admin-page.component';

describe('ClientsAdminPageComponent', () => {
  let component: ClientsAdminPageComponent;
  let fixture: ComponentFixture<ClientsAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
