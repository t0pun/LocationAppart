import { Component, inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BiensService } from '../biens.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  biensService = inject(BiensService)
  default_input_city = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
  default_input_price = "hidden"
  clicked = false
  default_input_date_end = "hidden"
  default_input_date_start = "hidden"
  default_input_person_min = "hidden"
  default_input_person_max = "hidden"
  default_input_around_main_city = "hidden"

  applyForm = new FormGroup({

    ville: new FormControl(''),
    debut: new FormControl(''),
    fin: new FormControl(''),
    nombre_personnes_min: new FormControl(''),
    nombre_personnes_max: new FormControl(''),
    distance: new FormControl(''),
    prix: new FormControl('')

  });

  displaySearch() {
      this.default_input_city = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[10vw] border rounded-l-full px-1  py-1"
      this.default_input_date_start = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[6vw] border px-1  py-1"
      this.default_input_date_end = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[6vw] border px-1  py-1"
      this.default_input_person_min = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[10vw] border px-1  py-1"
      this.default_input_person_max = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[10vw] border px-1  py-1"
      this.default_input_around_main_city = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[10vw] border px-1  py-1"      
      this.default_input_price = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-[6vw] border rounded-r-full px-1  py-1"
  }
  hideSearch(){
      this.default_input_city = "flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
      this.default_input_date_start = "hidden"
      this.default_input_date_end = "hidden"
      this.default_input_person_min = "hidden"
      this.default_input_person_max = "hidden"
      this.default_input_around_main_city = "hidden"      
      this.default_input_price = "hidden"
      this.clicked = false
    }

    onSubmit(){
      this.biensService.onSubmit(
      this.applyForm.value.ville ?? '',
      this.applyForm.value.debut ?? '',
      this.applyForm.value.fin ?? '',
      this.applyForm.value.nombre_personnes_min ?? '',
      this.applyForm.value.nombre_personnes_max ?? '',
      this.applyForm.value.distance ?? '',
      this.applyForm.value.prix ?? ''
      )
    }
    
}
