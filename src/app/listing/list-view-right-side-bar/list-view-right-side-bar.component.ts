import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-list-view-right-side-bar',
  templateUrl: './list-view-right-side-bar.component.html',
  styleUrls: ['./list-view-right-side-bar.component.css']
})
export class ListViewRightSideBarComponent implements OnInit {

	banner : any = {
		pagetitle: "Listing Right Sidebar",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Listing Right Sidebar",
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
