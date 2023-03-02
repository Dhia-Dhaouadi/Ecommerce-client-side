import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-listing-map-left',
  templateUrl: './listing-map-left.component.html',
  styleUrls: ['./listing-map-left.component.css']
})
export class ListingMapLeftComponent implements OnInit {


	banner : any = {
		pagetitle: "Listings Map Left Sidebar",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Listings Map Left Sidebar",
		description: "Find awesome places, bars, restaurants & activities.",
	}

  constructor() { }
  
  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
    })(jQuery);
	}

}
