import { Component, OnInit } from '@angular/core';
import { Color, Heroes } from '../../interfaces/vetnas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroes[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }


  cambiarMayusculas() {
    (this.enMayusculas) ? this.enMayusculas = false : this.enMayusculas = true;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

}
