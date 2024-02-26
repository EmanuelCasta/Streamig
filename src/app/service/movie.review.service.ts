import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { retry, Observable, of } from 'rxjs';
import {MovieReview} from "./../contract/update.review.dto";
@Injectable({
  providedIn: 'root'
})
export class MovieServiceReview {

  private ApiURL = "http://localhost:8081/api/movieuser/";

  constructor(private http: HttpClient) {

   }
  
   setReview(movieid:number,userid:number,score:number,esGusto:boolean,esClickVideo:boolean ): Observable<any>{
    
    console.log({ movieid,userid,score,esGusto,esClickVideo})
    if(score ===0){
      return this.http.put<MovieReview>(this.ApiURL, { movieid,userid,esGusto,esClickVideo}).pipe(
        retry(2)
    );
    }
    
    return this.http.put<MovieReview>(this.ApiURL, { movieid,userid,score,esGusto,esClickVideo}).pipe(
      retry(2)
  );
    }

   
   
}