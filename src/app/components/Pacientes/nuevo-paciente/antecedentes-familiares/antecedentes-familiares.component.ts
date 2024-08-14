import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-antecedentes-familiares',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './antecedentes-familiares.component.html',
  styleUrl: './antecedentes-familiares.component.scss'
})
export class AntecedentesFamiliaresComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }

  atras(){
    this.router.navigate(['/pacientes/actividad-fisica']);
  }

}
