import { Component } from '@angular/core';
import { RechercheComponent } from '../recherche/recherche.component';
 

@Component({
  selector: 'app-rechercher',
  standalone: true,
  imports: [RechercheComponent],
  templateUrl: './rechercher.component.html',
  styleUrl: './rechercher.component.css'
})
export class RechercherComponent {

}
