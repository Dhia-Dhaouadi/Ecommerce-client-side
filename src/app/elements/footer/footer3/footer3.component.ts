import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer3',
  templateUrl: './footer3.component.html',
  styleUrls: ['./footer3.component.css']
})
export class Footer3Component implements OnInit {

  constructor() { }
  
  
    clients : any = [
                  {
                    image: "logo1.png",
                    title: "",
                    url: "",
                  },
                  {
                    image: "logo2.png",
                    title: "",
                    url: "",
                  },
                  {
                    image: "logo3.png",
                    title: "",
                    url: "",
                  },
                  {
                    image: "logo4.png",
                    title: "",
                    url: "",
                  },
    
              ];

  ngOnInit(): void {
  }

}
