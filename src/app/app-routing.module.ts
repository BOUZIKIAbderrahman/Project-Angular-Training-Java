import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShopGridDefaultComponent } from './components/shop-grid-default/shop-grid-default.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'details/:id/:category', component: ProductDetailsComponent },
  { path: 'error404', component: ErrorPageComponent },
  { path: 'shopDefault', component: ShopGridDefaultComponent },
  { path: 'shopLeft', component: ShopLeftSidebarComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: '*', redirectTo: 'error404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
