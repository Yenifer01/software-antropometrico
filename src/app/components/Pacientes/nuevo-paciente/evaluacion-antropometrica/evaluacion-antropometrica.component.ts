import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-antropometrica',
  standalone: true,
  imports: [],
  templateUrl: './evaluacion-antropometrica.component.html',
  styleUrl: './evaluacion-antropometrica.component.scss'
})
export class EvaluacionAntropometricaComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }

  atras(){
    this.router.navigate(['/pacientes/antecedentes-familiares']);
  }


}
