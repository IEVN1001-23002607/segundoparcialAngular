import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './zodiaco.html',
  styleUrl: './zodiaco.css'
})
export class Zodiaco {
  formulario = new FormGroup({
    nombre: new FormControl(''),
    apaterno: new FormControl(''),
    amaterno: new FormControl(''),
    dia: new FormControl(''),
    mes: new FormControl(''),
    anio: new FormControl(''),
    sexo: new FormControl('Masculino') 
  });

  resultado: any = null;

  signos = [
    { nombre: 'Mono', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg' },
    { nombre: 'Gallo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg' },
    { nombre: 'Perro', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg' },
    { nombre: 'Cerdo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg' },
    { nombre: 'Rata', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg' },
    { nombre: 'Buey', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg' },
    { nombre: 'Tigre', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg' },
    { nombre: 'Conejo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg' },
    { nombre: 'Dragón', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg' },
    { nombre: 'Serpiente', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg' },
    { nombre: 'Caballo', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg' },
    { nombre: 'Cabra', imagen: 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg' }
  ];

  imprimir() {
    const val = this.formulario.value;
    const anio = parseInt(val.anio || '0', 10);
    const mes = parseInt(val.mes || '0', 10);
    const dia = parseInt(val.dia || '0', 10);
    const hoy = new Date();
    let edadCalculada = hoy.getFullYear() - anio;
    const diferenciaMes = hoy.getMonth() + 1 - mes;
    
    
    if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < dia)) {
      edadCalculada--;
    }

    
    const indiceSigno = anio % 12;
    const signoChino = this.signos[indiceSigno];

    
    this.resultado = {
      nombreCompleto: `${val.nombre} ${val.apaterno} ${val.amaterno}`,
      edad: edadCalculada,
      signoTexto: signoChino.nombre,
      signoImagen: signoChino.imagen
    };
  }
}

