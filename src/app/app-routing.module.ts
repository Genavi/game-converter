import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserComponent } from './pages/user/user.component';
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
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'teams/dnal', component: DnalComponent, canActivate: [AuthGuard] },
  { path: 'teams/h1nl', component: H1nlComponent, canActivate: [AuthGuard] },
  { path: 'teams/d1lr', component: D1lrComponent, canActivate: [AuthGuard] },
  { path: 'teams/h3ls', component: H3lsComponent, canActivate: [AuthGuard] },
  { path: 'teams/du22', component: Du22Component, canActivate: [AuthGuard] },
  { path: 'teams/du18i', component: Du18iComponent, canActivate: [AuthGuard] },
  { path: 'teams/hu18i', component: Hu18iComponent, canActivate: [AuthGuard] },
  { path: 'teams/hu16i', component: Hu16iComponent, canActivate: [AuthGuard] },
  { path: 'teams/du16i', component: Du16iComponent, canActivate: [AuthGuard] },
  { path: 'teams/du14', component: Du14Component, canActivate: [AuthGuard] },
  { path: 'teams/hu14', component: Hu14Component, canActivate: [AuthGuard] },
  { path: 'teams/hu12', component: Hu12Component, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
