import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LeftmenuComponent } from './components/shared/leftmenu/leftmenu.component';
import { SigninComponent } from './components/shared/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistationformComponent } from './components/shared/registationform/registationform.component';
import { AuthGaurd } from './services/authgurd';
// import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    //LeftmenuComponent,
    SigninComponent,
    RegistationformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    //HeaderComponent
  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
