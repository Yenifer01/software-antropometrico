import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {

  private themeClass = 'theme'; // Clase base para el tema
  private colorModeSubject = new BehaviorSubject<string>('light'); // Modo inicial (puede ser 'light' o 'dark')
  colorMode = this.colorModeSubject.asObservable(); // Para suscribirse a los cambios del tema

  constructor() {
    const savedMode = localStorage.getItem('theme') || 'light'; // Lee el modo guardado en localStorage
    this.setMode(savedMode); // Aplica el modo guardado o 'light' por defecto
  }

  // Método para cambiar el tema
  setMode(mode: string) {
    const body = document.body;
    const themeClasses = [`${this.themeClass}-light`, `${this.themeClass}-dark`]; // Temas claro y oscuro
    body.classList.remove(...themeClasses); // Elimina las clases anteriores
    body.classList.add(`${this.themeClass}-${mode}`); // Añade la clase del tema actual
    localStorage.setItem('theme', mode); // Guarda el tema en localStorage
    this.colorModeSubject.next(mode); // Notifica a los observadores sobre el cambio
  }
}
