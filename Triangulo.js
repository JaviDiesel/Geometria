"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var distancias = new Array(0);
        distancias.push(this.v1.calcularDistancia(this.v2));
        distancias.push(this.v1.calcularDistancia(this.v3));
        distancias.push(this.v2.calcularDistancia(this.v3));
        return distancias;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
