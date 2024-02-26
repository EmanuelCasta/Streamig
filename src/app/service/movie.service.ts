import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { retry, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ApiURL = "http://localhost:8081/api";

  constructor(private http: HttpClient) {

   }

   getCategoryList(): Observable<any>{
    return this.http.get<any>(`${this.ApiURL}/genre/`).pipe(
			retry(2)
		);
 
  }

   
   getMovieFilter(url:string){
    return this.http.get<any>(`${this.ApiURL}/movie/all${url}`).pipe(
			retry(2)
		);
   }
}