import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { PipeInvestigationPage } from './pipe-investigation-page/pipe-investigation-page';
import { MembersPage } from './members-page/members-page';

export const routes: Routes = [
    { path:'', component: HomePage }, 
    { path:'pipe-investigation', component:PipeInvestigationPage }, 
    { path: 'members', component: MembersPage}
];
