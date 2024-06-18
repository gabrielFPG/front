import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class VehiculosComponent implements OnInit {
  categorias: any[] = [
    { name: 'Ford', code: 'FR' },
    { name: 'Mazda', code: 'MZ' },
    { name: 'Kia', code: 'KA' }
  ];

  vehiculos: any[] = [
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 2, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" },
    { id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo" }
  ];

  cols: any[] = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.funListar2().subscribe(
      (res: any) => {
        this.vehiculos = res.data;
      }
    );
  }

  openNew() {

  }

  editVehiculo(vehi: any) {

  }

  deleteVehiculo(vehi: any) {

  }
}
