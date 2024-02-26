import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8081/api/movie/';
  private genreUrl = 'http://localhost:8081/api/genre/';

  constructor(private http: HttpClient) {}

  getAllMovies(params: any): Observable<any> {
    //return this.http.get(`${this.baseUrl}/all`, { params: params });
    return new Observable();

  }

  getGenres(): Observable<any> {
    //return this.http.get(this.genreUrl);
    return new Observable();
  }
}
