import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiFetchComponent } from './api-fetch/api-fetch.component';
import { BindTextComponent } from './bind-text/bind-text.component';
import { LoopComponent } from './loop/loop.component';
import { ShowhideComponent } from './showhide/showhide.component';

const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch:'full'},
  {path:'homepage', component: HomepageComponent},
  {path:"about", component: AboutComponent},
  {path:"products", component: ProductsComponent},
  {path:"contact", component: ContactComponent},
  {path:"admin", component: AdminComponent},
  {path: "api", component: ApiFetchComponent},
  {path: "text", component: BindTextComponent},
  {path: "loop", component: LoopComponent},
  {path: "showhide", component: ShowhideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
