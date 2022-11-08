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
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GametableComponent } from './components/gametable/gametable.component';
import { SeasonselectComponent } from './components/seasonselect/seasonselect.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { SplashService } from './shared/services/splash.service';
import { SplashComponent } from './components/splash/splash.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    TopnavComponent,
    SidenavComponent,
    GametableComponent,
    SeasonselectComponent,
    VerifyEmailComponent,
    ConvertComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FontAwesomeModule
  ],
  providers: [AuthService, DatePipe, SplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
