import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../models/alimentos';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlimentosService } from 'src/app/services/alimentos.service';
import Swal from 'sweetalert2';
import { Grupos } from 'src/app/models/grupos';
import { GruposService } from 'src/app/services/grupos.service';

@Component({
  selector: 'app-alimento-editar',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './alimento-editar.component.html',
  styleUrl: './alimento-editar.component.scss'
})
export class AlimentoEditarComponent implements OnInit{
grupos: Grupos[]=[];
  alimento: Alimento | undefined;
  originalAlimento: Alimento | undefined; 

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alimentoService: AlimentosService,
        private gruposService: GruposService,
    ) { }

    ngOnInit(): void {
      this.obtenerAlimento();
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

  obtenerAlimento(): void {
    const id = this.route.snapshot.params['id'];
    this.alimentoService.getAlimento(id).subscribe(
        (data: Alimento) => {
            this.alimento = { ...data };
            this.originalAlimento = { ...data }; 
        },
        (error) => {
            console.log(error);
            Swal.fire('Error', 'No se pudo cargar el alimento.', 'error');
        }
    );
  }

  hayCambios(): boolean {
    return JSON.stringify(this.alimento) !== JSON.stringify(this.originalAlimento);
  }

  guardarCambios(): void {
    if (!this.hayCambios()) {
        Swal.fire({
            title: 'No se han realizado cambios',
            text: "No hay cambios que guardar.",
            icon: 'info',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (this.alimento && this.alimento.id_alimento !== undefined) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Estás seguro de que quieres actualizar los cambios?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4EBAB0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, actualizar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const id_alimento = this.alimento!.id_alimento;

                if (typeof id_alimento === 'number') {
                    this.alimentoService.updateAlimento(id_alimento, this.alimento!).subscribe(
                        (data) => {
                            Swal.fire(
                                'Actualizado!',
                                'El alimento ha sido actualizado.',
                                'success'
                            );
                            this.router.navigate(['/alimentos/alimentos-lista']);
                        },
                        (error) => {
                            Swal.fire(
                                'Error!',
                                'Hubo un problema actualizando el alimento.',
                                'error'
                            );
                            console.log(error);
                        }
                    );
                } else {
                    console.log('El ID del alimento no es válido.');
                }
            }
        });
    } else {
        console.log('No se puede actualizar el alimento porque el ID es undefined.');
    }
  }

  cancelar(){
    this.router.navigate(['/alimentos/alimentos-lista']);
  }
  }
