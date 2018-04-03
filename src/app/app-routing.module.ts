import { AuthGuard } from './guards/auth.guard';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFounPageComponent } from './componentes/not-foun-page/not-foun-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { patch } from 'webdriver-js-extender';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFounPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
