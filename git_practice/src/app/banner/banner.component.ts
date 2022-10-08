import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: any;
  constructor() { }

  ngOnInit(): void {

    this.banner = "C:\Projects\git_practice\git_practice\src\assets\images\banner.jpg";
  }

}
