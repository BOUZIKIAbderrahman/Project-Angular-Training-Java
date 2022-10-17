import { UsersService } from './services/users.service';
import { TokenStorageService } from './services/token-storage.service';
import { ProductsService } from './services/products.service';
import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../app/components/header/header.component';
import { FooterComponent } from '../app/components/footer/footer.component';
import { HomeComponent } from '../app/components/home/home.component';
import { NavbarComponent } from '../app/components//navbar/navbar.component';
import { FooterBottonComponent } from '../app/components/footer-botton/footer-botton.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ShopGridDefaultComponent } from './components/shop-grid-default/shop-grid-default.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    FooterBottonComponent,
    ProductsComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    ErrorPageComponent,
    ShopGridDefaultComponent,
    ShopLeftSidebarComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [LoginService, ProductsService, TokenStorageService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
