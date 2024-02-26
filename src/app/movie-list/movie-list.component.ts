import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/security/auth.service';
import { Router } from '@angular/router';
import { MovieUser } from '../service/movie.user.service';
import { MovieService } from '../service/movie.service';
import { FormBuilder, FormGroup,FormControl  } from '@angular/forms';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  selectedMovie: any;
  showModal: boolean = false;

  formApplyFilters: FormGroup;
  scores = [1, 2, 3, 4, 5];
  types = ["MOVIE,SERIES"]
  movies: any[] = [];
  genres: any[] = [];


  constructor(public authService: AuthService, private router: Router,private movieUserService: MovieUser,private movieService: MovieService,private formBuilder: FormBuilder) {
    
    this.formApplyFilters = this.formBuilder.group({
      name: [null],
      type: [null],
      genre: [null],
      score: [null]
    });
   }

  ngOnInit(): void {
    this.getGenres();
    this.getMovies();
  }
  getMovies(): void {
    const name = this.formApplyFilters.get('name')?.value;

    const selectedTypes = this.formApplyFilters.get('type')?.value;
    const selectedGenres = this.formApplyFilters.get('genre')?.value;
    const selectedScores = this.formApplyFilters.get('score')?.value;

    let url ='';
    
    if (selectedTypes && selectedTypes.length > 0) {
      const filteredTypes = selectedTypes.filter((type: string) => type !== 'default');
      if (filteredTypes.length > 0) {
        url += '?';
        url += filteredTypes.map((type: string) => `type=${encodeURIComponent(type)}`).join('&');
      }
    }
    
    if (selectedGenres && selectedGenres.length > 0) {
      const filteredGenres = selectedGenres.filter((genre: string) => genre !== 'default');
      if (filteredGenres.length > 0) {
        url += url.includes('?') ? '&' : '?';
        url += filteredGenres.map((genre: string) => `genre=${encodeURIComponent(genre)}`).join('&');
      }
    }
    
    if (selectedScores && selectedScores.length > 0) {
      const filteredScores = selectedScores.filter((score: string) => score !== 'default');
      if (filteredScores.length > 0) {
        url += url.includes('?') || url.includes('&') ? '&' : '?';
        url += filteredScores.map((score: string) => `score=${encodeURIComponent(score)}`).join('&');
      }
    }
    
    if (name || name ==! '') {
      url += url.includes('?') || url.includes('&') ? '&' : '?';
      url += `name=${encodeURIComponent(name)}`;
    }
    
    this.movieService.getMovieFilter(url).subscribe({
      next: (response) => {
        this.movies = response
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }
  getGenres(): void {
    this.movieService.getCategoryList().subscribe({
      next: (response) => {
        this.genres = response.genres
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }


  
  applyFilters(): void {
    this.getMovies();
  }

  clearFilters(): void {
    this.formApplyFilters.reset();
    this.getMovies();
  }
  openModal(movie: any): void {
    let genreMovie = ""
    
    for(const genre of this.genres){
      if(genre.id === movie.idGenre){
        genreMovie=genre.name
        break
      }
    }
   
    movie = {
      ...movie,
      genreMovie
    };


    this.selectedMovie = movie;

    this.showModal = true;

    const movieId = movie.postgrest_id; 
    let userId = localStorage.getItem("id")?? "";

    if(movieId!= null && userId!= null){
      this.movieUserService.execute(movieId, parseInt(userId)).subscribe({
        error: (error) => {
          console.error(error);
        }
      });
    }

    


  }

  closeModal(): void {
    this.showModal = false;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
