import {Punto} from './Punto';

export class Triangulo  {
    
    private v1:Punto;
    private v2:Punto;
    private v3:Punto;

    constructor(v1:Punto, v2:Punto, v3:Punto)   {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    public calcularLongitudLados():Number[]   {
        let distancias = new Array(0);

        distancias.push(this.v1.calcularDistancia(this.v2));
        distancias.push(this.v1.calcularDistancia(this.v3));
        distancias.push(this.v2.calcularDistancia(this.v3));

        return distancias;
    }
}