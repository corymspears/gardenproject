import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { BindTextComponent } from './bind-text/bind-text.component';
import { LoopComponent } from './loop/loop.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    AdminComponent,
    NavbarComponent,
    HomepageComponent,
    ApiFetchComponent,
    BindTextComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule { }
