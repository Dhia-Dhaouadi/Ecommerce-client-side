import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  banner : any = {
		pagetitle: "More Listings",
		bg_image: "assets/images/banner/bnr3.jpg",
		title: "More Listings",
		description: "Find awesome places, bars, restaurants & activities.",
	}
  
  	layout : any = {	
      sidebar: false,
      sidebarPosition:"",
    }
  constructor() { }
  

  ngOnInit(): void {
		(function ($) {
        
        jQuery('select').selectpicker();
        
    })(jQuery);  
  }

}
