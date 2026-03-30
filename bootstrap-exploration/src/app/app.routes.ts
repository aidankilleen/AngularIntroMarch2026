import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { TemplateValuePage } from './template-value-page/template-value-page';
import { ModelInvestigationPage } from './model-investigation-page/model-investigation-page';
import { ComputedInvestigationPage } from './computed-investigation-page/computed-investigation-page';
import { EffectInvestigationPage } from './effect-investigation-page/effect-investigation-page';
import { ReactiveFormsInvestigation } from './reactive-forms-investigation/reactive-forms-investigation';

export const routes: Routes = [

    { path:'', component: HomePage}, 
    { path:'about', component: AboutPage }, 
    { path:'contact', component:ContactPage},
    { path:'template-values', component:TemplateValuePage}, 
    { path:'model-investigation', component:ModelInvestigationPage}, 
    { path:'computed-investigation', component:ComputedInvestigationPage}, 
    { path:'effect-investigation', component:EffectInvestigationPage}, 
    { path:'reactive-forms-investigation', component:ReactiveFormsInvestigation}, 
];
