import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistationformComponent } from './components/shared/registationform/registationform.component';
import { SigninComponent } from './components/shared/signin/signin.component';
import { AuthGaurd } from './services/authgurd';


const routes: Routes = [{path:"",component:SigninComponent},
{
  path: 'Dashboard',canActivate:[AuthGaurd],
  loadChildren: () => import('./components/common/dashboard/dashboard.module').then(m => m.DashboardModule)
},{path:"Registation",component:RegistationformComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
