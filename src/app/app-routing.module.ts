import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { ContactusComponent} from './pages/contactus/contactus.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component'
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'apply',
    component:ApplyComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
