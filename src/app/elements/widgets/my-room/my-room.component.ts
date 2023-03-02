import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-my-room',
  templateUrl: './my-room.component.html',
  styleUrls: ['./my-room.component.css']
})
export class MyRoomComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
      
      jQuery('#calendar').fullCalendar({
          header: {
            left: 'prev',
            center: 'title',
            right: 'next'
          },
          //defaultDate: '2017-12-12',
          navLinks: true, // can click day/week names to navigate views
          businessHours: false, // display business hours
          editable: false,
         
        });
    })(jQuery);
	}

}
