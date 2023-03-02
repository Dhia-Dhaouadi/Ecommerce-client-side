import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

	banner : any = {
		pagetitle: "Add Listing",
		bg_image: "assets/images/banner/bnr2.jpg",
		title: "Add Listing",
		description: "Find awesome places, bars, restaurants & activities.",
	}
  constructor() { }

  ngOnInit(): void {
		(function ($) {
			jQuery('select').selectpicker();
      jQuery('.jqte-test').jqte();
      var jqteStatus = true;
      jQuery(".status").on('click',function()
      {
        jqteStatus = jqteStatus ? false : true;
        $('.jqte-test').jqte({"status" : jqteStatus})
      });
      
    jQuery('[data-toggle="tooltip"]').tooltip();
        
    jQuery(document).on('click','.add-social-btn',function(){
      var copy_data = '<div class="input-group"><select id="mySelect"><option>Instagram</option><option>LinkedIn</option><option>Facebook</option></select><input type="text" class="form-control" placeholder="http://"><div class="input-group-prepend"><button class="site-button btn-block add-social-btn" type="button"><i class="fa fa-plus"></i> Add</button><button class="site-button btn-block remove-social-btn red" type="button"><i class="fa fa-times"></i> Close</button></div></div>';
      jQuery('.social-btn-container').append(copy_data);
      jQuery('select').selectpicker();
    });
    
    jQuery(document).on('click','.remove-social-btn',function(){
			jQuery(this).parents('.input-group').remove();
    });
    
    jQuery('input[type="file"]').imageuploadify();
	
    jQuery('#input-tags').tagEditor({
      placeholder: 'Enter tags ...',
    });
      
		})(jQuery);
	}

}
