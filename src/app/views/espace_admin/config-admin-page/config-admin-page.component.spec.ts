import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAdminPageComponent } from './config-admin-page.component';

describe('ConfigAdminPageComponent', () => {
  let component: ConfigAdminPageComponent;
  let fixture: ComponentFixture<ConfigAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
