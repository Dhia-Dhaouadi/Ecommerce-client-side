import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-collage2',
  templateUrl: './city-collage2.component.html',
  styleUrls: ['./city-collage2.component.css']
})
export class CityCollage2Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
