import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-box1',
  templateUrl: './icon-box1.component.html',
  styleUrls: ['./icon-box1.component.css']
})
export class IconBox1Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
