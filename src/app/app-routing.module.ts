import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
                {path: 'index', component: Home1Component},
                {path: 'home', component: Home1Component},
                {path: 'home-1', component: Home1Component},
                {path: '', component: Home2Component},
                {path: 'home-2', component: Home2Component},
                {path: 'index-3', component: Home3Component},
                {path: 'home-3', component: Home3Component},
                {path: 'error-404', component: Error404Component},
                {path: 'contact-us', component: ContactUsComponent},
                {path: 'register', component: RegisterComponent},
                {path: 'Login', component: LoginComponent},

                {path: 'add-listing', component: AddListingComponent},
                {path: 'listing', component: ListViewComponent},
                {path: 'grid-view-left-side-bar', component: GridViewLeftSideBarComponent},
                {path: 'grid-view-right-side-bar', component: GridViewRightSideBarComponent},
                {path: 'listing-details', component: ListingDetail1Component},
                {path: 'listing-details-2', component: ListingDetail2Component},
                {path: 'listing-details-3', component: ListingDetail3Component},
                {path: 'listing-map-left', component: ListingMapLeftComponent},
                {path: 'listing-map-right', component: ListingMapRightComponent},
                {path: 'list-view-left-side-bar', component: ListViewLeftSideBarComponent},
                {path: 'list-view-right-side-bar', component: ListViewRightSideBarComponent},

                {path: 'blog-standard', component: BlogComponent},
                {path: 'blog-details', component: BlogDetailsComponent},


              ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
