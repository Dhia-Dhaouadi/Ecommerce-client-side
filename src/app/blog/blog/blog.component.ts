import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	banner : any = {
		pagetitle: "Blog Standard",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Blog Standard",
		description: "Find awesome places, bars, restaurants & activities.",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
