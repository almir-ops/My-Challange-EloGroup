import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelleadsComponent } from './panelleads/panelleads.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'painel', component: PanelleadsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
