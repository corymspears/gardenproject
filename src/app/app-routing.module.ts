import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch:'full'},
  {path:'homepage', component: HomepageComponent},
  {path:"about", component: AboutComponent},
  {path:"products", component: ProductsComponent},
  {path:"contact", component: ContactComponent},
  {path: "api", component: ApiFetchComponent},
  {path: "login", component: LoginComponent},
  {path: "logout", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
