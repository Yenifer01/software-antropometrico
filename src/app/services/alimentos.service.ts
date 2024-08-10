import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimento } from '../models/alimentos';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private apiUrl = 'http://localhost:3000/api/alimentos';
  constructor(private http: HttpClient) { }

  getAlimentos(): Observable<Alimento[]> {
    return this.http.get<Alimento[]>(this.apiUrl);
  }
  getAlimento(id: number): Observable<Alimento> {
    return this.http.get<Alimento>(`${this.apiUrl}/${id}`);
  }
  addAlimento(alimento: Alimento): Observable<Alimento> {
    return this.http.post<Alimento>(this.apiUrl, alimento);
  }
  updateAlimento(id: number, alimento: Alimento): Observable<Alimento> {
    return this.http.put<Alimento>(`${this.apiUrl}/${id}`, alimento);
  }
  deleteAlimento(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
