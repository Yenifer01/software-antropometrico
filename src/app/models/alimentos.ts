export interface Alimento {
    id_alimento?: number;
    codigo: string;
    nombre: string;
    id_grupo: number;
    energia_kcal: number;
    energia_kj: number;
    agua_g: number;
    proteinas_totales_g: number;
    proteinas_vegetales_g: number;
    proteinas_animal: number;
    grasa_total_g: number;
    carbohidratos_totales_g: number;
    carbohidratos_disponibles_g: number;
    fibra_dietaria_g: number;
    cenizas_g: number;
    calcio_mg: number;
    fosforo_mg: number;
    zinc_mg: number;
    hierro_mg: number;
    caroteno_equivalentes_totales_ug: number;
    vitaminaA_equivalentes_totales_ug: number;
    tiamina_mg: number;
    riboflavina_mg: number;
    niacina_mg: number;
    vitaminaC_mg: number;
    acido_folico_ug: number;
    sodio_mg: number;
    potasio_mg: number;
  }
  