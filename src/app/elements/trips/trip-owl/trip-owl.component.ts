import { Component, OnInit, Input } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-trip-owl',
  templateUrl: './trip-owl.component.html',
  styleUrls: ['./trip-owl.component.css']
})
export class TripOwlComponent implements OnInit {

  @Input() data:any;
  
  constructor() { }
  
  
  customOptions: OwlOptions = {
    loop:true,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    /* paginationSpeed: 3000, */
    /* slideSpeed: 3000, */
    smartSpeed: 3000,
        autoplay: true,
    margin:30,
    nav:true,
    dots: false,
    navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
    responsive:{
      0:{
        items:1
      },
      480:{
        items:2
      },			
      1024:{
        items:3
      },
      1200:{
        items:5
      }
    },
  }

  ngOnInit(): void {
  }

}
