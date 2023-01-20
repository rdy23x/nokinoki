import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommandeClientPageComponent} from "./views/espace_client/commande-client-page/commande-client-page.component";

const routes: Routes = [
  {
    path: '',
    component: CommandeClientPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
