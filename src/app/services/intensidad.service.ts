import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intensidad } from '../models/intensidad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntensidadService {

  private apiUrl = 'http://localhost:3000/api/intensidad';
  constructor(private http: HttpClient) { }

  getIntensidad(): Observable<Intensidad[]> {
    return this.http.get<Intensidad[]>(this.apiUrl);
  }

 
}
