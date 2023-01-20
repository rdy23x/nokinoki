import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesAdminPageComponent } from './commandes-admin-page.component';

describe('CommandesAdminPageComponent', () => {
  let component: CommandesAdminPageComponent;
  let fixture: ComponentFixture<CommandesAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
