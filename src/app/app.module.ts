import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideMenuComponent} from './component/side-menu/side-menu.component';
import {SubjectListComponent} from './component/subject-list/subject-list.component';
import {ThesisService} from './services/thesis.service';
import {HttpClientModule} from '@angular/common/http';
import {AddSubjectComponent} from './component/add-subject/add-subject.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './component/login-component/login.component';
import { RegisterComponent } from './component/register-component/register.component';
import {AuthService} from './services/auth.service';
import { MyThesisComponent } from './component/my-thesis/my-thesis.component';

const appRoutes: Routes = [
  { path: 'list', component: SubjectListComponent },
  { path: 'add', component: AddSubjectComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mylist', component: MyThesisComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SubjectListComponent,
    AddSubjectComponent,
    LoginComponent,
    RegisterComponent,
    MyThesisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ThesisService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
