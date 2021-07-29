import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
title = 'pokemoninfo';
  Peliculas: any = {};
  cargada = false;
  titulo: string = " ";
  mostrar: boolean = false;
  datos: any = [];
  datob: any = []
nombre: string;

  constructor(private http: HttpClient) {
    console.log("servicio corriendo");
    http.get("http://www.omdbapi.com/?t="+ this.nombre +"&apikey=bfa0c95e").subscribe(resp => {
      this.Peliculas = resp;
      this.cargada = true;
      console.log(resp)
    });
  }

  buscar() {
    this.http.get("http://www.omdbapi.com/?t=" + this.datob.nombre + "&apikey=bfa0c95e").subscribe(resp => {
      this.Peliculas = resp;
      this.cargada = true;
      console.log(resp)
    });
  }


  guardar() {
    // se inserta el dato en el arreglo
    this.datos.push(this.datob);


    // se crea un nuevo objeto para almacenar nuevos datos
    this.datob = {};
  }
}

