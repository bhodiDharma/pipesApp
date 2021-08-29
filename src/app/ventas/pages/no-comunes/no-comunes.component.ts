import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {


  //i18nSelect

  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    if (this.genero === 'masculino'){
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
    else{
      this.nombre = 'Fernando';
      this.genero = 'masculino'
    }
  }

  borrarCliente() {

    this.clientes.pop();

  }


  //keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada '
  }


  //JSON PIPE
  heroes = [

    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ];


  //ASYNC Pipe

  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos Data de promesa')
    }, 3500);
  });

  



}
