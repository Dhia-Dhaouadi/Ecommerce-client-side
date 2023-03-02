import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddListingComponent } from './listing/add-listing/add-listing.component';
import { ListViewComponent } from './listing/list-view/list-view.component';
import { ListViewLeftSideBarComponent } from './listing/list-view-left-side-bar/list-view-left-side-bar.component';
import { ListViewRightSideBarComponent } from './listing/list-view-right-side-bar/list-view-right-side-bar.component';
import { GridViewLeftSideBarComponent } from './listing/grid-view-left-side-bar/grid-view-left-side-bar.component';
import { GridViewRightSideBarComponent } from './listing/grid-view-right-side-bar/grid-view-right-side-bar.component';
import { ListingMapLeftComponent } from './listing/listing-map-left/listing-map-left.component';
import { ListingMapRightComponent } from './listing/listing-map-right/listing-map-right.component';
import { ListingDetail1Component } from './listing/listing-detail1/listing-detail1.component';
import { ListingDetail2Component } from './listing/listing-detail2/listing-detail2.component';
import { ListingDetail3Component } from './listing/listing-detail3/listing-detail3.component';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { LoadingComponent } from './elements/loading/loading.component';
import { Header1Component } from './elements/header/header1/header1.component';
import { Header2Component } from './elements/header/header2/header2.component';
import { Header3Component } from './elements/header/header3/header3.component';
import { Footer1Component } from './elements/footer/footer1/footer1.component';
import { Footer2Component } from './elements/footer/footer2/footer2.component';
import { Footer3Component } from './elements/footer/footer3/footer3.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { SearchForm1Component } from './elements/forms/search-form1/search-form1.component';
import { HowItWork1Component } from './elements/how-it-work1/how-it-work1.component';
import { HowItWork2Component } from './elements/how-it-work2/how-it-work2.component';
import { HowItWork3Component } from './elements/how-it-work3/how-it-work3.component';
import { Testimonial1Component } from './elements/testimonial/testimonial1/testimonial1.component';
import { Testimonial2Component } from './elements/testimonial/testimonial2/testimonial2.component';
import { Blog1Component } from './elements/blog/blog1/blog1.component';
import { Blog2Component } from './elements/blog/blog2/blog2.component';
import { Blog3Component } from './elements/blog/blog3/blog3.component';


import { CityListComponent } from './elements/locations/city-list/city-list.component';
import { CityCollageComponent } from './elements/locations/city-collage/city-collage.component';
import { CityOwlComponent } from './elements/locations/city-owl/city-owl.component';
import { TripOwlComponent } from './elements/trips/trip-owl/trip-owl.component';
import { TripListing1Component } from './elements/trips/trip-listing1/trip-listing1.component';
import { TripListing2Component } from './elements/trips/trip-listing2/trip-listing2.component';
import { BusinessInfoComponent } from './elements/widgets/business-info/business-info.component';
import { AddComponent } from './elements/widgets/add/add.component';
import { FilterComponent } from './elements/widgets/filter/filter.component';
import { TagFilterComponent } from './elements/widgets/tag-filter/tag-filter.component';
import { Map1Component } from './elements/maps/map1/map1.component';
import { Map2Component } from './elements/maps/map2/map2.component';
import { OpeningHoursComponent } from './elements/widgets/opening-hours/opening-hours.component';
import { SocialComponent } from './elements/widgets/social/social.component';
import { ListingSidebarPromotionComponent } from './elements/widgets/listing-sidebar-promotion/listing-sidebar-promotion.component';
import { MyRoomComponent } from './elements/widgets/my-room/my-room.component';
import { OpeningHours2Component } from './elements/widgets/opening-hours2/opening-hours2.component';
import { NearbyRestaurantsComponent } from './elements/widgets/nearby-restaurants/nearby-restaurants.component';
import { CategoriesComponent } from './elements/widgets/categories/categories.component';
import { StatisticComponent } from './elements/widgets/statistic/statistic.component';
import { TagsComponent } from './elements/widgets/tags/tags.component';
import { ClaimListingComponent } from './elements/widgets/claim-listing/claim-listing.component';
import { SearchComponent } from './elements/widgets/search/search.component';
import { InstagramComponent } from './elements/widgets/instagram/instagram.component';
import { Categories2Component } from './elements/widgets/categories2/categories2.component';
import { FeedsComponent } from './elements/widgets/feeds/feeds.component';
import { Tags2Component } from './elements/widgets/tags2/tags2.component';
import { SearchForm2Component } from './elements/forms/search-form2/search-form2.component';
import { SearchForm3Component } from './elements/forms/search-form3/search-form3.component';
import { IconBox1Component } from './elements/icon-box/icon-box1/icon-box1.component';
import { Banner1Component } from './elements/banners/banner1/banner1.component';


/* OWL Crousal*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CityCollage2Component } from './elements/locations/city-collage2/city-collage2.component';
import { Add2Component } from './elements/widgets/add2/add2.component';
import { Banner2Component } from './elements/banners/banner2/banner2.component';
import { Map3Component } from './elements/maps/map3/map3.component';
import { OwlSlider2Component } from './elements/sliders/owl-slider2/owl-slider2.component';
import { FollowComponent } from './elements/widgets/follow/follow.component';
import { CityOwl2Component } from './elements/locations/city-owl2/city-owl2.component';
import { ClientsComponent } from './elements/clients/clients.component';
import { Banner3Component } from './elements/banners/banner3/banner3.component';
import { LoginComponent } from './pages/login/login.component';


/* import { AgmCoreModule } from '@agm/core'; */


/* OWL Crousal*/

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Error404Component,
    ContactUsComponent,
    RegisterComponent,
    AddListingComponent,
    ListViewComponent,
    ListViewLeftSideBarComponent,
    ListViewRightSideBarComponent,
    GridViewLeftSideBarComponent,
    GridViewRightSideBarComponent,
    ListingMapLeftComponent,
    ListingMapRightComponent,
    ListingDetail1Component,
    ListingDetail2Component,
    ListingDetail3Component,
    BlogComponent,
    BlogDetailsComponent,
    LoadingComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    Footer1Component,
    Footer2Component,
    Footer3Component,
    NavigationComponent,
    SearchForm1Component,
    HowItWork1Component,
    HowItWork2Component,
    HowItWork3Component,
    Testimonial1Component,
    Testimonial2Component,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    CityListComponent,
    CityCollageComponent,
    CityOwlComponent,
    TripOwlComponent,
    TripListing1Component,
    TripListing2Component,
    BusinessInfoComponent,
    AddComponent,
    FilterComponent,
    TagFilterComponent,
    Map1Component,
    Map2Component,
    OpeningHoursComponent,
    SocialComponent,
    ListingSidebarPromotionComponent,
    MyRoomComponent,
    OpeningHours2Component,
    NearbyRestaurantsComponent,
    CategoriesComponent,
    StatisticComponent,
    TagsComponent,
    ClaimListingComponent,
    SearchComponent,
    InstagramComponent,
    Categories2Component,
    FeedsComponent,
    Tags2Component,
    SearchForm2Component,
    SearchForm3Component,
    IconBox1Component,
    Banner1Component,
    CityCollage2Component,
    Add2Component,
    Banner2Component,
    Map3Component,
    OwlSlider2Component,
    FollowComponent,
    CityOwl2Component,
    ClientsComponent,
    Banner3Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    /* AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBjirg3UoMD5oUiFuZt3P9sErZD-2Rxc68'
    }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
