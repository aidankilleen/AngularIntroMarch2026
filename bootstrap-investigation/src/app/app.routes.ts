import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ContactPage } from './contact-page/contact-page';
import { AboutPage } from './about-page/about-page';

export const routes: Routes = [
    { path:'', component:HomePage }, 
    { path:'about', component:AboutPage }, 
    { path:'contact', component:ContactPage }, 

    { path:'**', redirectTo:'' }
];
