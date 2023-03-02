import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {

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
    dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
      0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
    },
  }
  
  ngOnInit(): void {
  }

}
