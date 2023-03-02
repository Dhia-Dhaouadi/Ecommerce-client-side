import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-city-collage',
  templateUrl: './city-collage.component.html',
  styleUrls: ['./city-collage.component.css']
})
export class CityCollageComponent implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
