import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationComponent } from './reservation/reservation.component';

@Injectable({
  providedIn: 'root'
})
export class BiensService {
  private apiUrl = 'http://localhost:8000/getsBiens'; // Replace with your API endpoint

  constructor(private _http: HttpClient) {}

  getData(): Observable<any[]> {
    return this._http.get<any[]>(this.apiUrl);
  }

  onSubmit(ville: string,debut: string, fin: string, nombre_personnes_min: string,nombre_personnes_max: string,distance: string, prix: string){
    return this._http.get<any[]>(this.apiUrl+"?ville="+ville+"&prix="+prix);
  }
}