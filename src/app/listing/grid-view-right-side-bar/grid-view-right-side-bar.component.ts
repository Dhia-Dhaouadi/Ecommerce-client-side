import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-grid-view-right-side-bar',
  templateUrl: './grid-view-right-side-bar.component.html',
  styleUrls: ['./grid-view-right-side-bar.component.css']
})
export class GridViewRightSideBarComponent implements OnInit {

	banner : any = {
		pagetitle: "Grid Right Sidebar",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Grid Right Sidebar",
		description: "Find awesome places, bars, restaurants & activities.",
	}

	layout : any = {	
		sidebar: true,
		sidebarPosition:"right",
	}

  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
    })(jQuery);
	}

}
