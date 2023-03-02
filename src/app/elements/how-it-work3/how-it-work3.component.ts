import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-how-it-work3',
  templateUrl: './how-it-work3.component.html',
  styleUrls: ['./how-it-work3.component.css']
})
export class HowItWork3Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
