import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Alimento } from '../../models/alimentos';
import { Grupos} from '../../models/grupos';
import { AlimentosService } from '../../services/alimentos.service';
import { GruposService } from '../../services/grupos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-alimento-nuevo',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './alimento-nuevo.component.html',
  styleUrls: ['./alimento-nuevo.component.scss']
})
export class AlimentoNuevoComponent implements OnInit {
   nuevoAlimento: Alimento = {
    codigo: '',
    nombre: '',
    id_grupo: 0,
    energia_kcal: 0,
    energia_kj: 0,
    agua_g: 0,
    proteinas_totales_g: 0,
    proteinas_vegetales_g: 0,
    proteinas_animal: 0,
    grasa_total_g: 0,
    carbohidratos_totales_g: 0,
    carbohidratos_disponibles_g: 0,
    fibra_dietaria_g: 0,
    cenizas_g: 0,
    calcio_mg: 0,
    fosforo_mg: 0,
    zinc_mg: 0,
    hierro_mg: 0,
    caroteno_equivalentes_totales_ug: 0,
    vitaminaA_equivalentes_totales_ug: 0,
    tiamina_mg: 0,
    riboflavina_mg: 0,
    niacina_mg: 0,
    vitaminaC_mg: 0,
    acido_folico_ug: 0,
    sodio_mg: 0,
    potasio_mg: 0
  };
  
  grupos: Grupos[]=[];
  constructor(
    private alimentosService: AlimentosService, 
    private gruposService: GruposService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadGrupos();
  }
   
  loadGrupos(): void {
    this.gruposService.getGrupos().subscribe(
      (data: Grupos[]) => {
        this.grupos = data;
      },
      (error) => {
        console.error('Error al cargar grupos:', error);
      }
    );
  }


  onSubmit() {
    this.nuevoAlimento.id_grupo = parseInt(this.nuevoAlimento.id_grupo as unknown as string, 10);
    if (this.validarFormulario()) {
      this.alimentosService.addAlimento(this.nuevoAlimento).subscribe(
        alimento => {
          console.log('Alimento agregado:', alimento);
          Swal.fire({
            icon: 'success',
            title: '¡Registro guardado correctamente!',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.router.navigate(['/alimentos/alimentos-lista']);
          });
          this.nuevoAlimento = this.getNuevoAlimentoVacio();
        },
        error => {
          console.error('Error al agregar alimento:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al guardar el registro.',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos obligatorios.',
      });
    }
  }

  validarFormulario(): boolean {
    return this.nuevoAlimento.codigo.trim() !== '' &&
           this.nuevoAlimento.nombre.trim() !== '' &&
           Number.isInteger(this.nuevoAlimento.id_grupo) &&
           this.nuevoAlimento.id_grupo > 0;
  }

  getNuevoAlimentoVacio(): Alimento {
    return {
      codigo: '',
      nombre: '',
      id_grupo: 0,
      energia_kcal: 0,
      energia_kj: 0,
      agua_g: 0,
      proteinas_totales_g: 0,
      proteinas_vegetales_g: 0,
      proteinas_animal: 0,
      grasa_total_g: 0,
      carbohidratos_totales_g: 0,
      carbohidratos_disponibles_g: 0,
      fibra_dietaria_g: 0,
      cenizas_g: 0,
      calcio_mg: 0,
      fosforo_mg: 0,
      zinc_mg: 0,
      hierro_mg: 0,
      caroteno_equivalentes_totales_ug: 0,
      vitaminaA_equivalentes_totales_ug: 0,
      tiamina_mg: 0,
      riboflavina_mg: 0,
      niacina_mg: 0,
      vitaminaC_mg: 0,
      acido_folico_ug: 0,
      sodio_mg: 0,
      potasio_mg: 0
    };
  }

}
