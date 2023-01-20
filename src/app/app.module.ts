import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClientPageComponent } from './views/espace_client/login-client-page/login-client-page.component';
import { DashClientPageComponent } from './views/espace_client/dash-client-page/dash-client-page.component';
import { CommandeClientPageComponent } from './views/espace_client/commande-client-page/commande-client-page.component';
import { PaiementClientPageComponent } from './views/espace_client/paiement-client-page/paiement-client-page.component';
import { LoginAdminPageComponent } from './views/espace_admin/login-admin-page/login-admin-page.component';
import { DashAdminPageComponent } from './views/espace_admin/dash-admin-page/dash-admin-page.component';
import { CommandesAdminPageComponent } from './views/espace_admin/commandes-admin-page/commandes-admin-page.component';
import { ClientsAdminPageComponent } from './views/espace_admin/clients-admin-page/clients-admin-page.component';
import { PaiementsAdminPageComponent } from './views/espace_admin/paiements-admin-page/paiements-admin-page.component';
import { ConfigAdminPageComponent } from './views/espace_admin/config-admin-page/config-admin-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import { CommandesListComponent } from './components/commandes-list/commandes-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AnimateModule} from "primeng/animate";
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModaleCommandesComponent } from './components/modale-commandes/modale-commandes.component';
import { ModalePayCommandeComponent } from './components/modale-pay-commande/modale-pay-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientPageComponent,
    DashClientPageComponent,
    CommandeClientPageComponent,
    PaiementClientPageComponent,
    LoginAdminPageComponent,
    DashAdminPageComponent,
    CommandesAdminPageComponent,
    ClientsAdminPageComponent,
    PaiementsAdminPageComponent,
    ConfigAdminPageComponent,
    CommandesListComponent,
    ModaleCommandesComponent,
    ModalePayCommandeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AnimateModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    DialogModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
