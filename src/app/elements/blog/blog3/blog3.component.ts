import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.css']
})
export class Blog3Component implements OnInit {

  @Input() data:any;
  constructor() { }

  customOptions: OwlOptions = {
    loop:true,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    smartSpeed: 3000,
    autoplay: true,
    margin:30,
    nav:true,
    dots: false,
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
