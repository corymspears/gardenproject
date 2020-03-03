import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'', redirectTo: 'homepage', pathMatch:'full'},
  {path:'homepage', component: HomepageComponent},
  {path:"about", component: AboutComponent},
  {path:"product", component: ProductComponent},
  {path:"contact", component: ContactComponent},
  {path:"admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
