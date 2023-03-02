import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  banner : any = {
		pagetitle: "Error 404",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Error 404",
		description: "Page Not Found",
	}
  constructor() { }

  ngOnInit(): void {
  }

}
