import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-funciones-biologicas',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './funciones-biologicas.component.html',
  styleUrl: './funciones-biologicas.component.scss'
})
export class FuncionesBiologicasComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }

  atras(){
    this.router.navigate(['/pacientes/habitos']);
  }


}
