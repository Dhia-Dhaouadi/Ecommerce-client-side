import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  city_section = [
    {
      section_title: "Popular Cities",
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
          title:"London",
          image: "pic6.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"London",
          image: "pic7.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"London",
          image: "pic8.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },
        {
          title:"Korea",
          image: "pic9.jpg",
          url : "#",
          total_place:"",
          total_listing:"",
          featured:'false',
          rating:""
        },

      ]
    }
  ];

  howItWorks : any = [
                  {
                    title:"Choose What To Do?",
                    icon_class:"ti-search",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
                    box_count:"01",
                  },
                  {
                    title:"Find What Your Want?",
                    icon_class:"ti-gift",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
                    box_count:"02",
                  },
                  {
                    title:"Explore Amazing Places",
                    icon_class:"ti-rocket",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
                    box_count:"03",
                  },
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
                    image: "pic5.jpg",
                    catgegory: "Tarvel",
                    title: "7 Moments To Remember From Directory.",
                    description: "",
                    url: "blog-details",
                    author: "John Doe",
                    comments: "03",
                    post_date: "10  Aug 2019",
                  },
                  {
                    image: "pic6.jpg",
                    catgegory: "Foods",
                    title: "Directory Will Be A Thing Of The Past.",
                    description: "Knowing that, you’ve optimised your pages countless amount of times, written tons of eye catching.",
                    url: "blog-details",
                    author: "Rosalina",
                    comments: "03",
                    post_date: "10  Aug 2019",
                  },
                  {
                    image: "pic7.jpg",
                    catgegory: "Hotel",
                    title: "Ten Things Your Competitors Know About.",
                    description: "As desperate as you are right now, you have done everything you can on your website to say.",
                    url: "blog-details",
                    author: "John Smith",
                    comments: "03",
                    post_date: "10  Aug 2019",
                  },
                  {
                    image: "pic5.jpg",
                    catgegory: "Tarvel",
                    title: "7 Moments To Remember From Directory.",
                    description: "",
                    url: "blog-details",
                    author: "John Doe",
                    comments: "03",
                    post_date: "10  Aug 2019",
                  },

              ];


  ngOnInit(): void {
  }

}
