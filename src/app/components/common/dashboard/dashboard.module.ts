import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { LeftmenuComponent } from '../../shared/leftmenu/leftmenu.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OthersdasboardComponent } from './othersdasboard/othersdasboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SettingsComponent } from './settings/settings.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [{path:"",component:DashboardComponent,children:[
  {path:"admin",component:AdmindashboardComponent},
  {path:"settings",component:SettingsComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"documents",component:DocumentsComponent},
]}];


@NgModule({
  declarations: [DashboardComponent,HeaderComponent,LeftmenuComponent, AdmindashboardComponent, OthersdasboardComponent, AccountsComponent, SettingsComponent, DocumentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }
