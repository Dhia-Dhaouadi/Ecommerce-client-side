import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

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
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
			1000:{
				items:4
			}
    },
  }

  ngOnInit(): void {
  }

}
