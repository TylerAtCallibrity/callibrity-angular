import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
