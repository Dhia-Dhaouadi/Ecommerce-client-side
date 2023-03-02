import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var particlesJS:  any;

@Component({
  selector: 'app-banner3',
  templateUrl: './banner3.component.html',
  styleUrls: ['./banner3.component.css']
})
export class Banner3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      
      jQuery('select').selectpicker();
      
      setTimeout(function(){
        
        
    if($('#dezParticles').length > 0 )
	{
      
      particlesJS("dezParticles",
      {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#fff"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#000",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 2,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
      
        
  }      
        
        
      }, 500);  
      
  })(jQuery);
  
  }

}
