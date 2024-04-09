import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { ReservationComponent } from './reservation/reservation.component';

export const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    },
    {
        path: 'rechercher',
        component: RechercherComponent,  
        title: 'Page de recherche'
    },
    {
        path: 'home',
        component: AppComponent,  
        title: 'Page principal'
    },

];
