import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Intensidad} from '../../../../models/intensidad';
import { IntensidadService } from '../../../../services/intensidad.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actividad-fisica',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './actividad-fisica.component.html',
  styleUrl: './actividad-fisica.component.scss'
})
export class ActividadFisicaComponent implements OnInit {

  intensidad: Intensidad[]=[];
  recomendacionSeleccionada: string | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private intensidadService: IntensidadService
    ) { }
  ngOnInit(): void {
    this.loadIntensidad();
  }
  loadIntensidad(): void {
    this.intensidadService.getIntensidad().subscribe(
      (data: Intensidad[]) => {
        this.intensidad = data;
      },
      (error) => {
        console.error('Error al cargar intensidad:', error);
      }
    );
  }
  actualizarRecomendacion(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const idIntensidad = selectElement.value;
    const seleccionada = this.intensidad.find(intensida => intensida.id === +idIntensidad);
    this.recomendacionSeleccionada = seleccionada ? seleccionada.recomendacion : null;
  }
  atras(){
    this.router.navigate(['/pacientes/funciones-biologicas']);
  }
}
