import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();

			jQuery("#slider-range-2").slider({
				range: true,
				min: 2,
				max: 100,
				type:'single',
				value:$(this).find('input').val(),
				animate:"slow",
				values: [2, 100],
				slide: function(event, ui) {
					var min = ui.values[0],
						max = ui.values[1];
					  $('#distance').val(min + "km - "+ max + "km");
				}
			});

    
    })(jQuery);
	}

}
