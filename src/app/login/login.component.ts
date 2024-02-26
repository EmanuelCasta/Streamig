import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/security/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.router.navigate(['/movie']);      
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Error de inicio de sesión o token inválido';
      }
    );

  }

}
