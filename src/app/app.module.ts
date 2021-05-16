import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
// import { ApplyProvider } from './services/apply';
import { AddProvider } from './services/add';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { HttpModule,HttpClient } from '@angular/http';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplyComponent,
    AboutComponent,
    GalleryComponent,
    PortfolioComponent,
    ContactusComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [
    AddProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
