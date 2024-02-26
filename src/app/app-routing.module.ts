import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthGuard } from './auth/security/auth.guard';
import { MovieDetailsComponentComponent } from './movie-details-component/movie-details-component.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'movie', component:MovieListComponent,canActivate:[AuthGuard]},
  { path: 'movie-info', component:MovieDetailsComponentComponent,canActivate:[AuthGuard]},
  {path:"**",redirectTo:"login"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
