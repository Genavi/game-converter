import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthService } from "./shared/services/auth.service";
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { H1nlComponent } from './pages/teams/h1nl/h1nl.component';
import { DnalComponent } from './pages/teams/dnal/dnal.component';
import { D1lrComponent } from './pages/teams/d1lr/d1lr.component';
import { H3lsComponent } from './pages/teams/h3ls/h3ls.component';
import { Du22Component } from './pages/teams/du22/du22.component';
import { Du18iComponent } from './pages/teams/du18i/du18i.component';
import { Hu18iComponent } from './pages/teams/hu18i/hu18i.component';
import { Du16iComponent } from './pages/teams/du16i/du16i.component';
import { Hu16iComponent } from './pages/teams/hu16i/hu16i.component';
import { Du14Component } from './pages/teams/du14/du14.component';
import { Hu14Component } from './pages/teams/hu14/hu14.component';
import { Hu12Component } from './pages/teams/hu12/hu12.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GametableComponent } from './components/gametable/gametable.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    H1nlComponent,
    DnalComponent,
    D1lrComponent,
    H3lsComponent,
    Du22Component,
    Du18iComponent,
    Hu18iComponent,
    Du16iComponent,
    Hu16iComponent,
    Du14Component,
    Hu14Component,
    Hu12Component,
    TopnavComponent,
    SidenavComponent,
    GametableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
