import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    const url = 'http://localhost:8081/apigateway/secure/login'
    const body = { correo: this.email, password: this.password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, body, { headers: headers }).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
