import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-search-form3',
  templateUrl: './search-form3.component.html',
  styleUrls: ['./search-form3.component.css']
})
export class SearchForm3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
			
		})(jQuery);
	}

}
