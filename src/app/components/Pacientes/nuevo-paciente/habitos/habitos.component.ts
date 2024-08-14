import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-habitos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './habitos.component.html',
  styleUrl: './habitos.component.scss'
})
export class HabitosComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }

  atras(){
    this.router.navigate(['/pacientes/nuevo-paciente']);
  }

}
