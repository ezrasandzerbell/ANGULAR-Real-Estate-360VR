import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  address = "12345 SE Belmont";
  firstpic = "https://static.secure.website/wscfus/10127251/2981249/highland-farm-mris-5-w1500-o.jpg";
  statsArray = ["4 Bedrooms", "3.5 Bathrooms", "4,000 S.F."];
  paralaxOne = "background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.5)), url(http://www.desktop-screens.com/data/out/54/2974479-house-wallpapers.jpg); height: 400px; background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;";
  matterportEmbed = "https://my.matterport.com/show/?m=JGPnGQ6hosj&play=1&qs=1";


  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }




}
