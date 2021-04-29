"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.toString = function () {
        console.log("(" + this.x + "," + this.y + ")");
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2));
    };
    Punto.prototype.calcularDistancia = function (punto) {
        return Math.sqrt(Math.pow((this.y - punto.y), 2) + Math.pow((this.x - punto.x), 2));
    };
    Punto.prototype.calcularCuadrante = function () {
        var origen = 0;
        var cuadrante_1 = 1;
        var cuadrante_2 = 2;
        var cuadrante_3 = 3;
        var cuadrante_4 = 4;
        var respuesta = -1;
        if (this.x == 0 || this.y == 0) {
            respuesta = origen;
        }
        else if (this.x > 0 && this.y > 0) {
            respuesta = cuadrante_1;
        }
        else if (this.x < 0 && this.y > 0) {
            respuesta = cuadrante_2;
        }
        else if (this.x < 0 && this.y < 0) {
            respuesta = cuadrante_3;
        }
        else {
            respuesta = cuadrante_4;
        }
        return respuesta;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var menorDistancia = 0;
        var puntoCercano = new Punto(0, 0);
        for (var i = 0; i < puntos.length; i++) {
            if (this.calcularDistancia(puntos[i]) < menorDistancia || menorDistancia == 0) {
                menorDistancia = this.calcularDistancia(puntos[i]);
                puntoCercano = puntos[i];
            }
        }
        return puntoCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
