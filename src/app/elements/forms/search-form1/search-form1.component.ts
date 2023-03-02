import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-search-form1',
  templateUrl: './search-form1.component.html',
  styleUrls: ['./search-form1.component.css']
})
export class SearchForm1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
			
		})(jQuery);
	}

}
