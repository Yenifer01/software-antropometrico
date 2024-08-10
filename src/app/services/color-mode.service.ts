import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ColorModeService {

  private themeClass = 'theme';
  private colorModeSubject = new BehaviorSubject<string>('light');
  colorMode = this.colorModeSubject.asObservable();

  constructor() {
    const savedMode = localStorage.getItem('coreui-free-angular-admin-template-theme-default') || 'light';
    this.setMode(savedMode);
  }
  setMode(mode: string) {
    const body = document.body;
    const themeClasses = [`${this.themeClass}-light`, `${this.themeClass}-dark`, `${this.themeClass}-auto`, `${this.themeClass}-blue`];
    body.classList.remove(...themeClasses);
    body.classList.add(`${this.themeClass}-${mode}`);
    localStorage.setItem('coreui-free-angular-admin-template-theme-default', mode);
    this.colorModeSubject.next(mode);
  }

  localStorageItemName = {
    set: (name: string) => localStorage.setItem('theme-local-storage-item-name', name),
    get: () => localStorage.getItem('theme-local-storage-item-name')
  };

  eventName = {
    set: (name: string) => localStorage.setItem('theme-event-name', name),
    get: () => localStorage.getItem('theme-event-name')
  };
}
