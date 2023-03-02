import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-how-it-work1',
  templateUrl: './how-it-work1.component.html',
  styleUrls: ['./how-it-work1.component.css']
})
export class HowItWork1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
