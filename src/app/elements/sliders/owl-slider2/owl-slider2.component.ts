import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-slider2',
  templateUrl: './owl-slider2.component.html',
  styleUrls: ['./owl-slider2.component.css']
})
export class OwlSlider2Component implements OnInit {

  @Input() data:any;
  constructor() { }

  
  
  customOptions: OwlOptions = {
    loop:true,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    smartSpeed: 3000,
    autoplay: true,
    stagePadding: 220,
    margin:-30,
    nav:true,
    dots: false,
    navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
    responsive:{
			0:{
				items:1,
				stagePadding: 0,
			},
			480:{
				items:1,
				stagePadding: 0,
			},
			767:{
				items:1,
				stagePadding: 0,
			},
			1024:{
				items:1,
				stagePadding: 0,
			},
			1200:{
				items:1
			}
    },
  }
  ngOnInit(): void {
  }

}
