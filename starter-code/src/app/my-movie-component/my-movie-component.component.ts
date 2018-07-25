import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../sevices/movies.service";
import { ActivatedRoute } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-my-movie-component",
  templateUrl: "./my-movie-component.component.html",
  styleUrls: ["./my-movie-component.component.css"]
})
export class MyMovieComponentComponent implements OnInit {
  id: number;
  movie1:any;
  constructor(public movies: MoviesService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number(params["id"]);
      this.movie1=this.movies.getMovie(this.id)
       console.log(params["id"]);
    });
  }
}
