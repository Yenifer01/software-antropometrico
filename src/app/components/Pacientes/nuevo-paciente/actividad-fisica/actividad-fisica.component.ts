import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-actividad-fisica',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './actividad-fisica.component.html',
  styleUrl: './actividad-fisica.component.scss'
})
export class ActividadFisicaComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }

  atras(){
    this.router.navigate(['/pacientes/funciones-biologicas']);
  }

}
