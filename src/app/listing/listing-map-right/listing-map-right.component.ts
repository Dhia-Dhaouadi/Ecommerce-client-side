import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-listing-map-right',
  templateUrl: './listing-map-right.component.html',
  styleUrls: ['./listing-map-right.component.css']
})
export class ListingMapRightComponent implements OnInit {


	banner : any = {
		pagetitle: "Listings Map Right Sidebar",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "Listings Map Right Sidebar",
		description: "Find awesome places, bars, restaurants & activities.",
	}

  constructor() { }


  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
    })(jQuery);
	}

}
