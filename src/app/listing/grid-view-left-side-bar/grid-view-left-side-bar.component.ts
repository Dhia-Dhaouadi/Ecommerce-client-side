import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid-view-left-side-bar',
  templateUrl: './grid-view-left-side-bar.component.html',
  styleUrls: ['./grid-view-left-side-bar.component.css']
})
export class GridViewLeftSideBarComponent implements OnInit {

	banner : any = {
		pagetitle: "Grid Left Sidebar",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Grid Left Sidebar",
		description: "Find awesome places, bars, restaurants & activities.",
	}

	layout : any = {	
		sidebar: true,
		sidebarPosition:"left",
	}
  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
    })(jQuery);
	}

}
