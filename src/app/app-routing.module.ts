import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_CONFIG } from './core/constants/route-config.constant';
import { AuthGuard } from './core/guards/auth.guard';
import { SigninGuard } from './core/guards/signin.guard';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: ROUTE_CONFIG.LOGIN, component: LoginComponent, canActivate: [SigninGuard] },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: ROUTE_CONFIG.LOGIN },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
