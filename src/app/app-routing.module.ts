import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule),
    canLoad: [LoginGuard] },
  {path: 'home', loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule),
  canLoad: [AutenticacaoGuard]},
  {path: 'dashboard', loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
  canLoad: [AutenticacaoGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
