import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-listing-detail2',
  templateUrl: './listing-detail2.component.html',
  styleUrls: ['./listing-detail2.component.css']
})
export class ListingDetail2Component implements OnInit {

  constructor() { }



  ngOnInit(): void {
	  (function ($) {
        jQuery('#lightgallery, .lightgallery').lightGallery({
          selector : '.check-km',
          loop:true,
          thumbnail:true,
          exThumbImage: 'data-exthumbimage'
        });
        
        jQuery('.video').magnificPopup({
          type: 'iframe',
          iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                 '<div class="mfp-close"></div>'+
                 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                 '<div class="mfp-title">Some caption</div>'+
                 '</div>'
          },
          callbacks: {
            markupParse: function(template, values, item) {
              values.title = item.el.attr('title');
            }
          }
        });
        
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
        
    })(jQuery);
  
  }

}
