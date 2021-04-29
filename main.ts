import {Punto} from './Punto';

let punto:Punto = new Punto(0,-6);
punto.toString();
console.log(punto.distanciaAlOrigen());
console.log(punto.calcularDistancia(new Punto(0,8)));
console.log(punto.calcularCuadrante());
console.log(punto.calcularMasCercano([new Punto(0,12),new Punto(0,-3),new Punto(0,1)]));