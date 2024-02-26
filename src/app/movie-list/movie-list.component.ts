import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[] = [{"name":"Lukas","quelifiers":"2", "type":"SERIES","score":"20"},{"name":"Lukas","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
  ,{"name":"Lukas sssss","quelifiers":"2", "type":"SERIES","score":"20"}
];
  genres: any[] = [];
  filters: any = {};

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getGenres();
    this.getMovies();
  }
  getMovies(): void {
    //this.movieService.getAllMovies(this.filters).subscribe(
    //  (data) => {
    //    this.movies = data;
    //  },
    //  (error) => {
    //    console.error(error);
    //  }
    //);
  }
  getGenres(): void {
    //this.movieService.getGenres().subscribe(
    //  (data) => {
    //    this.genres = data.genres;
    //  },
    //  (error) => {
    //    console.error(error);
    //  }
    //);
  }
  applyFilters(): void {
    this.getMovies();
  }

  clearFilters(): void {
    this.filters = {};
    this.getMovies();
  }

}
