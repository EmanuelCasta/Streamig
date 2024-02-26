import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EndpointsServices } from '../endpoints';
import { LoginResponseDTO } from 'src/app/contract/reponse.login.dto';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly loginUrl = EndpointsServices.LOGIN_URL;
    constructor(private http: HttpClient) { }

    login(correo: string, password: string): Observable<any> {
        return this.http.post<LoginResponseDTO>(this.loginUrl, { correo, password }).pipe(
          tap(response => {
            if (response.token) {
              localStorage.setItem('token', response.token);
              localStorage.setItem('id',response.id.toString())
            }
          })
        );
    }

    isLoggedIn(): boolean {
        return (localStorage.getItem("token")!=="Fail") && !!localStorage.getItem('token');
    }

    logout(): void {
        localStorage.removeItem('token');
    }
}