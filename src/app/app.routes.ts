import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    },
    {
        path: 'home',
        component: AppComponent,  
        title: 'Page principal'
    },

];
