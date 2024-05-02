import { Component } from '@angular/core';
import { BiensService } from '../biens.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  data: any[] = [];

  constructor(private mongoService: BiensService){}

  ngOnInit(): void {
    this.mongoService.getData().subscribe((response) => {
      this.data = response;
    });

  }

}