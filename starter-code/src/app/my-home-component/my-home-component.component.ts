import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../sevices/movies.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(public movies: MoviesService) { }

  ngOnInit() {
  }

}
