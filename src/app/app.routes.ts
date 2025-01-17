import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home" , pathMatch:"full"},
    {path:"home" , component:HomeComponent , title:"home"},
    {path:"about" , component:AboutComponent , title:"about"},
    {path:"portFolio", component:PortfolioComponent, title:"portFolio"},
    {path:"contact" , component:ContactComponent, title:"contact"},
    {path:"**" , component:PageNotFoundComponent, title:"Page Not Found"}
];
