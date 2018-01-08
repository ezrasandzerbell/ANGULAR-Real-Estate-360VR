import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentTheme = {'background-color': '#C9CACB', 'color': 'white'}

  constructor() { }

  ngOnInit() {
  }

  navToHomeTheme() {
    this.currentTheme = {'background-color': '#C9CACB', 'color': 'white'}
  }

  navToFormTheme() {
    this.currentTheme = {'background-color': 'black', 'color': 'white'}
  }

}
