import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

	banner : any = {
		pagetitle: "Contact Us",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Contact Us",
		description: "Find awesome places, bars, restaurants & activities.",
	}
  
  /* latitude = 51.678418;
  longitude = 7.809007;
  
  onChoseLocation(event){
      
      this.latitude = event.coords.lat;
      this.longitude =  event.coords.long; 
  } */
  
  constructor() { }

  ngOnInit(): void {
  }

}
