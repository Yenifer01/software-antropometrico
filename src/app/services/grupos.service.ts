import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupos } from '../models/grupos';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  private apiUrl = 'http://localhost:3000/api/grupos';
  constructor(private http: HttpClient) { }

  getGrupos(): Observable<Grupos[]> {
    return this.http.get<Grupos[]>(this.apiUrl);
  }
}
