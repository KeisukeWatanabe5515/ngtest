import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProductService } from './product/shared/product.service';
import { HttpClientModule } from '@angular/common/http';
// import { ProductListComponent } from './product/product-listings/product-listings.component';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // ProductListComponent,
    // ProductDetailComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
