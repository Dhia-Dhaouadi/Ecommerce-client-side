import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-list-view-left-side-bar',
  templateUrl: './list-view-left-side-bar.component.html',
  styleUrls: ['./list-view-left-side-bar.component.css']
})
export class ListViewLeftSideBarComponent implements OnInit {

	banner : any = {
		pagetitle: "Listings Left Sidebar",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Listings Left Sidebar",
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
