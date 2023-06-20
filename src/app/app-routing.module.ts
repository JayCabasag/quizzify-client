import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: RootComponent, title: 'root' },
  {
    path: 'auth', children: [
      { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent, title: 'signin' },
      { path: 'signup', component: SignupComponent, title: 'signup' },
    ]
  },
  { path: '**', component: PagenotfoundComponent, title: 'Page not found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
