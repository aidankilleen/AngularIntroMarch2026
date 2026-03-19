import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { UsersPage } from './users-page/users-page';
import { UserDetailPage } from './user-detail-page/user-detail-page';

export const routes: Routes = [
    { path:'', component: HomePage }, 
    { path:'about', component: AboutPage }, 
    { path:'contact', component: ContactPage }, 
    { path:'users', component: UsersPage }, 
    { path:'users/:id', component: UserDetailPage }, 
    { path:'**', redirectTo: '' }, 
];
