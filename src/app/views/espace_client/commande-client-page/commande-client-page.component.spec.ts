import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeClientPageComponent } from './commande-client-page.component';

describe('CommandeClientPageComponent', () => {
  let component: CommandeClientPageComponent;
  let fixture: ComponentFixture<CommandeClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
