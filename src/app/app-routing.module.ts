import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'auth/login', pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((module) => module.AdminModule),
    /* canActivate: [AuthGuard] */
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((module) => module.AuthModule),
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
