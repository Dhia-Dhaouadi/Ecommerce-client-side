import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }
  
  banner_city_section = [
    {
      section_title: "Explore your place <br/>easy with us.",
      section_description:"",
      view_all_link:"",
      
      items: [
        {
          title:"London",
          image: "pic7.jpg",
          url : "listing-details",
          total_place:"",
          total_listing:"18+",
          featured:'false',
          rating:""
        },
        {
          title:"United States",
          image: "pic3.jpg",
          url : "listing-details",
          total_place:"",
          total_listing:"12+",
          featured:'false',
          rating:""
        },
        {
          title:"Korea",
          image: "pic4.jpg",
          url : "listing-details",
          total_place:"",
          total_listing:"09+",
          featured:'false',
          rating:""
        },
        {
          title:"Japan",
          image: "pic5.jpg",
          url : "listing-details",
          total_place:"",
          total_listing:"30+",
          featured:'false',
          rating:""
        },
        {
          title:"London",
          image: "pic7.jpg",
          url : "listing-details",
          total_place:"",
          total_listing:"18+",
          featured:'false',
          rating:""
        },
        
      ]
    }
  ];
  
  categories : any = [
                  {
                    title:"carts",
                    icon_class:"flaticon-cat-cart-of-ecommerce",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"Tours",
                    icon_class:"flaticon-cat-place",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"medicine",
                    icon_class:"flaticon-cat-pill-capsule",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"Shopping",
                    icon_class:"flaticon-shop",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"Food",
                    icon_class:"flaticon-cat-birthday-cake",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"Culture",
                    icon_class:"flaticon-city-hall",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"Cuisine",
                    icon_class:"flaticon-city-hall-1",
                    url:"javascript:void(0);",
                  },
                  {
                    title:"Tours",
                    icon_class:"flaticon-cat-place",
                    url:"javascript:void(0);",
                  },
              ];    
  
  city_section = [
    {
      section_title: "Popular Cities",
      section_description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      view_all_link:"",
      
      items: [
        {
          title:"London",
          image: "pic11.jpg",
          url : "",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"United States",
          image: "pic12.jpg",
          url : "",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"Korea",
          image: "pic13.jpg",
          url : "",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"Japan",
          image: "pic14.jpg",
          url : "",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"London",
          image: "pic11.jpg",
          url : "",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        
      ]
    }
  ];
  
  tranding_places_section = [
    {
      section_title: "Best Things to Do in the City",
      section_description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      view_all_link:"",
      
      items: [
        {
          image:"pic1.jpg",
          title:"King Organic Shop",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"design"
        },
        {
          image:"pic2.jpg",
          title:"Dorado Health Care",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"photography"
        },
        {
          image:"pic3.jpg",
          title:"Tam Farfhume Shop",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"photography"
        },
        {
          image:"pic4.jpg",
          title:"King Organic Shop",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"latest-listings"
        },
        {
          image:"pic5.jpg",
          title:"Venzil Hingo Zoo",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"popular-ratings"
        },
        {
          image:"pic6.jpg",
          title:"KFC Pijja Shop",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"latest-listings"
        },
        {
          image:"pic1.jpg",
          title:"Venzil Hingo Zoo",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"popular-ratings"
        },
        {
          image:"pic2.jpg",
          title:"KFC Pijja Shop",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
          location:"12/a, New",
          opening_status:"Open Now",
          url:"listing-details",
          category:"latest-listings"
        },
        
      ]
    }
  ];
  
  howItWorks : any = [
                  {
                    title:"Choose Location",
                    icon_class:"flaticon-cat-place",
                    description:"",
                    box_count:"1",
                  },
                  {
                    title:"Pick Category",
                    icon_class:"flaticon-team",
                    description:"",
                    box_count:"2",
                  },
                  {
                    title:"Explore Place",
                    icon_class:"flaticon-city-hall-1",
                    description:"",
                    box_count:"3",
                  },
                  {
                    title:"Enjoy Your Day",
                    icon_class:"flaticon-city-hall",
                    description:"",
                    box_count:"4",
                  },
              ];  
  
  collage_city_section = [
    {
      section_title: "Top Featured Locations",
      section_description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      view_all_link:"",
      
      items: [
        {
          title:"London",
          image: "pic1.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'true',
          rating:""
        },
        {
          title:"Japan",
          image: "pic4.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"United States",
          image: "pic5.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"United States",
          image: "pic2.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"Korea",
          image: "pic3.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
      ]
    }
  ];
  
  
  testimonials : any = [
                  {
                    name: "David Matin",
                    role: "Client",
                    image: "pic1.jpg",
                    sub_heading: "",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]",
                  },
                  {
                    name: "David Matin",
                    role: "Client",
                    image: "pic2.jpg",
                    sub_heading: "",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]",
                  },
                  {
                    name: "David Matin",
                    role: "Client",
                    image: "pic3.jpg",
                    sub_heading: "",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]",
                  },
                  {
                    name: "Diamond Anderson",
                    role: "Founder, uihub inc.",
                    image: "pic1.jpg",
                    sub_heading: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
                  },
    
              ];
    blogs : any = [
                  {
                    image: "pic8.jpg",
                    catgegory: "Tarvel",
                    title: "7 Moments To Remember From Directory.",
                    description: "Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.",
                    url: "blog-details",
                    author: "John Doe",
                    comments: "12",
                  },
                  {
                    image: "pic9.jpg",
                    catgegory: "Foods",
                    title: "Directory Will Be A Thing Of The Past.",
                    description: "Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.",
                    url: "blog-details",
                    author: "Rosalina",
                    comments: "08",
                  },
                  {
                    image: "pic10.jpg",
                    catgegory: "Hotel",
                    title: "Ten Things Your Competitors Know About.",
                    description: "As desperate as you are right now, you have done everything you can on your website to say.",
                    url: "blog-details",
                    author: "John Smith",
                    comments: "03",
                  },
                  {
                    image: "pic8.jpg",
                    catgegory: "Tarvel",
                    title: "7 Moments To Remember From Directory.",
                    description: "Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.",
                    url: "blog-details",
                    author: "John Doe",
                    comments: "12",
                  },
    
              ];    
  ngOnInit(): void {
  }

}
