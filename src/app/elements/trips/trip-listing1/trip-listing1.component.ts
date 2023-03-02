import { Component, OnInit, Input } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-trip-listing1',
  templateUrl: './trip-listing1.component.html',
  styleUrls: ['./trip-listing1.component.css']
})
export class TripListing1Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      
      setTimeout(function(){
        var self = jQuery("#masonry, .masonry");
        if(jQuery('.card-container').length)
          {
          self.imagesLoaded(function () {
            self.masonry({
              gutterWidth: 15,
              isAnimated: true,
              itemSelector: ".card-container"
            });
          });
        }
			
        jQuery(".filters").on('click','li',function(e) {
          // e.preventDefault();
          var filter = jQuery(this).attr("data-filter");
          self.masonryFilter({
            filter: function () {
              if (!filter) return true;
              return jQuery(this).hasClass(filter);
            }
          });
        });
    
      }, 500);      
    })(jQuery);
  
  }

}
