import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion-antropometrica',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './evaluacion-antropometrica.component.html',
  styleUrl: './evaluacion-antropometrica.component.scss'
})
export class EvaluacionAntropometricaComponent {
  pesoActual: number | null = null;
  talla: number | null = null;
  indicePonderal: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  calcularIndicePonderal(): void {
    if (this.talla && this.pesoActual) {
      this.indicePonderal = parseFloat(((this.talla * 100) / Math.pow(this.pesoActual, 1 / 3)).toFixed(2));
    } else {
      this.indicePonderal = null;
    }
  }

  atras() {
    this.router.navigate(['/pacientes/antecedentes-familiares']);
  }


}
