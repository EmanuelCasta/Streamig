import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MovieServiceReview} from "../service/movie.review.service";
@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css']
})
export class MovieDetailsComponentComponent implements OnInit {

  @Input() movie:any;
  currentRating = 0;
  rating = 0;
  
  @Output() close = new EventEmitter<void>();

  constructor(private movieServiceReviwe:MovieServiceReview) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.close.emit();
  }
  

  rate(stars: number): void {
    this.currentRating = stars;
    this.rating = stars;
    
    //asqui
    let idUser = localStorage.getItem("id");
    
    this.movieServiceReviwe.setReview(this.movie.postgrest_id,parseInt(idUser?? ''),this.rating,this.rating>3 ,false).subscribe();
    
   
  }

  visualizo(){
    let idUser = localStorage.getItem("id");
    
    this.movieServiceReviwe.setReview(this.movie.postgrest_id,parseInt(idUser?? ''),0,this.rating>3 ,false).subscribe();
  }

}
