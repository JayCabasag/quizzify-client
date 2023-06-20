import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RootComponent } from './root/root.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: RootComponent, title: 'root' },
  {
    path: 'auth', component: AuthComponent, title: 'auth', children: [
      { path: 'signin', component: SigninComponent, title: 'signin' },
      { path: 'signup', component: SignupComponent, title: 'signup' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
