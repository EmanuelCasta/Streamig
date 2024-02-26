
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthGuard } from './auth/security/auth.guard';
import { TokenInterceptor } from './auth/interceptor/token.interceptor';
import { MovieDetailsComponentComponent } from './movie-details-component/movie-details-component.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieListComponent,
    MovieDetailsComponentComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
