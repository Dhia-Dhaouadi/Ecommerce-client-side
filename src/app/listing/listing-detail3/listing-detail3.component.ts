import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-listing-detail3',
  templateUrl: './listing-detail3.component.html',
  styleUrls: ['./listing-detail3.component.css']
})
export class ListingDetail3Component implements OnInit {

  constructor() { }

  slides : any = [
                  {
                    image: "slide2.jpg",
                    title: "",
                    url: "",
                  },
                  {
                    image: "slide3.jpg",
                    title: "",
                    url: "",
                  },
                  {
                    image: "slide4.jpg",
                    title: "",
                    url: "",
                  },
    
              ];
              
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
