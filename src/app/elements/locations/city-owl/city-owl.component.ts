import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-city-owl',
  templateUrl: './city-owl.component.html',
  styleUrls: ['./city-owl.component.css']
})
export class CityOwlComponent implements OnInit {
  
  @Input() data:any;
  constructor() { }

  customOptions: OwlOptions = {
    loop:true,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    smartSpeed: 3000,
    autoplay: true,
    margin:3,
    nav:true,
		dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
      0:{
				items:1
			},
			
			480:{
				items:4
			},			
			
			767:{
				items:4
			},
			1000:{
				items:4
			},
			1200:{
				items:4
			}
    },
  }

  ngOnInit(): void {
  }

}
