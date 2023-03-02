import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial1',
  templateUrl: './testimonial1.component.html',
  styleUrls: ['./testimonial1.component.css']
})
export class Testimonial1Component implements OnInit {

  @Input() data:any;
  constructor() { }

  customOptions: OwlOptions = {
    loop:true,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    smartSpeed: 3000,
    autoplay: true,
    margin:0,
    nav:true,
    dots: true,
    navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
    responsive:{
      0:{
				items:1
			},
			480:{
				items:1
			},
			767:{
				items:3
			},
			1000:{
				items:3
			}
    },
  }
  
  ngOnInit(): void {
  }

}
