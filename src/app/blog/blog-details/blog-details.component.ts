import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

	banner : any = {
		pagetitle: "Blog Details",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Blog Details",
		description: "Find awesome places, bars, restaurants & activities.",
	}

  constructor() { }

  ngOnInit(): void {
  }

}
