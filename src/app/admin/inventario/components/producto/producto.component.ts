import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  materias: any[] = [{ id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 },
  { id: 1, nombreMateria: "Matematica", descripcion: "Álgebra y Trigonometría", categoria_id: 1 }
  ];
  cols: any[] = []

  openNew() {

  }
  editMateria(mate: any) {

  }
  deleteMateria(mate: any) {

  }
}
