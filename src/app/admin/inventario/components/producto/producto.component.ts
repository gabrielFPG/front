import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  vehiculos: any[] = [{ id: 1, nombreVehiculo: "Mazda", descripcion: "color rojo", categoria_id: 1 },

  ];
  cols: any[] = []

  openNew() {

  }
  editVehiculo(vehi: any) {

  }
  deleteVehiculo(vehi: any) {

  }
}
