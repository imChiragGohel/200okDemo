import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ROUTE_CONFIG } from '../../core/constants/route-config.constant';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: ROUTE_CONFIG.HOME, component: HomeComponent },
      { path: ROUTE_CONFIG.ABOUT, component: AboutComponent },
      { path: '', pathMatch: 'full', redirectTo: ROUTE_CONFIG.HOME },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule { }
