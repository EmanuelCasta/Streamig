import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { EndpointsServices } from '../auth/endpoints';
import { HttpClient } from '@angular/common/http';
import { CreateReview } from '../contract/create.review.dto';


@Injectable({
    providedIn: 'root'
})
export class MovieUser{
    private readonly createInteractionURL = EndpointsServices.CREATE_REVIEW;
    constructor(private http: HttpClient) { }

    execute(movieid: number, userid: number): Observable<any> {
        return this.http.post<CreateReview>(this.createInteractionURL, { movieid, userid }).pipe();
    }

}