import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-how-it-work2',
  templateUrl: './how-it-work2.component.html',
  styleUrls: ['./how-it-work2.component.css']
})
export class HowItWork2Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
