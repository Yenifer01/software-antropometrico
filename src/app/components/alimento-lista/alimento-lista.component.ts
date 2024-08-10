import { Component, OnInit } from '@angular/core';
import { AlimentosService } from '../../services/alimentos.service';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alimento } from '../../models/alimentos';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alimento-lista',
  standalone: true,
  imports: [
    TableModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './alimento-lista.component.html',
  styleUrls: ['./alimento-lista.component.scss']
})
export class AlimentoListaComponent implements OnInit {
  alimento: Alimento | undefined;
  alimentos: any[] = [];
  filteredAlimentos: any[] = [];
  cols: any[] = [];
  globalFilterFields: string[] = [];
  selectedAlimentos: any[] = [];
  rows: number = 10;
  rowsPerPageOptions: any[] = [{ label: '5', value: 5 }, { label: '10', value: 10 }, { label: '20', value: 20 }];

  constructor(
    private alimentoService: AlimentosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.alimentoService.getAlimentos().subscribe(data => {
      this.alimentos = data;
      this.filteredAlimentos = data; 
      this.globalFilterFields = this.cols.map(col => col.field);
    });

    this.cols = [
      { field: 'id_alimento', header: 'ID' },
      { field: 'codigo', header: 'Código' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'grupo', header: 'Grupo' },
      { field: 'energia_kcal', header: 'Energía (kcal)' },
      { field: 'energia_kj', header: 'Energía (kJ)' },
      { field: 'agua_g', header: 'Agua (g)' },
      { field: 'proteinas_totales_g', header: 'Proteínas Totales (g)' },
      { field: 'proteinas_vegetales_g', header: 'Proteínas Vegetales (g)' },
      { field: 'proteinas_animal', header: 'Proteínas Animales' },
      { field: 'grasa_total_g', header: 'Grasa Total (g)' },
      { field: 'carbohidratos_totales_g', header: 'Carbohidratos Totales (g)' },
      { field: 'carbohidratos_disponibles_g', header: 'Carbohidratos Disponibles (g)' },
      { field: 'fibra_dietaria_g', header: 'Fibra Dietaria (g)' },
      { field: 'cenizas_g', header: 'Cenizas (g)' },
      { field: 'calcio_mg', header: 'Calcio (mg)' },
      { field: 'fosforo_mg', header: 'Fósforo (mg)' },
      { field: 'zinc_mg', header: 'Zinc (mg)' },
      { field: 'hierro_mg', header: 'Hierro (mg)' },
      { field: 'caroteno_equivalentes_totales_ug', header: 'Caroteno Equivalentes Totales (µg)' },
      { field: 'vitaminaA_equivalentes_totales_ug', header: 'Vitamina A Equivalentes Totales (µg)' },
      { field: 'tiamina_mg', header: 'Tiamina (mg)' },
      { field: 'riboflavina_mg', header: 'Riboflavina (mg)' },
      { field: 'niacina_mg', header: 'Niacina (mg)' },
      { field: 'vitaminaC_mg', header: 'Vitamina C (mg)' },
      { field: 'acido_folico_ug', header: 'Ácido Fólico (µg)' },
      { field: 'sodio_mg', header: 'Sodio (mg)' },
      { field: 'potasio_mg', header: 'Potasio (mg)' }
    ];
  }

  applyGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.toLowerCase();

    if (value) {
      this.filteredAlimentos = this.alimentos.filter(alimento => {
        return Object.keys(alimento).some(key => {
          return String(alimento[key]).toLowerCase().includes(value);
        });
      });
    } else {
      this.filteredAlimentos = [...this.alimentos]; 
    }
  }
  
  editarAlimento(alimento: Alimento): void {
    if (alimento && alimento.id_alimento !== undefined) {
      this.router.navigate(['/alimentos/edicion-alimento', alimento.id_alimento]);
    } else {
      console.log('No se ha seleccionado ningún alimento para editar.');
    }
  }

  eliminarAlimento(alimento: Alimento): void {
    if (alimento && alimento.id_alimento !== undefined) {
      console.log('ID del alimento a eliminar:', alimento.id_alimento); 
      Swal.fire({
        title: '¿Estás seguro de eliminar?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4EBAB0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.alimentoService.deleteAlimento(alimento!.id_alimento!).subscribe(
            () => {
              Swal.fire(
                '¡Eliminado!',
                'El alimento ha sido eliminado.',
                'success'
              );
              this.ngOnInit();
            },
            (error) => {
              Swal.fire(
                'Error',
                'Hubo un problema al eliminar el alimento.',
                'error'
              );
              console.log('Error al eliminar el alimento:', error);
            }
          );
        }
      });
    } else {
      Swal.fire(
        'No se ha seleccionado ningún alimento',
        'Por favor selecciona un alimento para eliminar.',
        'warning'
      );
    }
  } 

}
