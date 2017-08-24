import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navigationElements = ['About us', 'Services', 'People', 'Community', 'Careers', 'Blog'];
  constructor() { }

  ngOnInit() {
  }

}
