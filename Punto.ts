export class Punto  {

    private x:number;
    private y:number;

    constructor(x,y)    {
        this.x = x;
        this.y = y;
    }

    public getX():number    {
        return this.x;
    }
    public getY():number    {
        return this.y;
    }

    public setX(x):void {
        this.x = x;
    }
    public setY(y):void {
        this.y = y;
    }

    public toString():void    {
        console.log(`(${this.x},${this.y})`);
    }

    public distanciaAlOrigen():number   {
        return Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2));
    }

    public calcularDistancia(punto:Punto):number   {
        return Math.sqrt(Math.pow((this.y - punto.y), 2) + Math.pow((this.x - punto.x), 2));
    }

    public calcularCuadrante():number   {
        const origen:number = 0;
        const cuadrante_1:number = 1;
        const cuadrante_2:number = 2;
        const cuadrante_3:number = 3;
        const cuadrante_4:number = 4;

        let respuesta = -1;

        if(this.x==0 || this.y==0)  {
            respuesta = origen;
        }else if(this.x>0 && this.y>0)  {
            respuesta = cuadrante_1;
        }else if(this.x<0 && this.y>0)  {
            respuesta = cuadrante_2;
        }else if(this.x<0 && this.y<0)  {
            respuesta = cuadrante_3;
        }else   {
            respuesta = cuadrante_4;
        }
        return respuesta;
    }

    public calcularMasCercano(puntos:Punto[]):Punto {
        let menorDistancia:number = 0;
        let puntoCercano:Punto = new Punto(0,0);
        for(let i=0;i<puntos.length;i++)    {
            if(this.calcularDistancia(puntos[i])<menorDistancia || menorDistancia==0)   {
                menorDistancia = this.calcularDistancia(puntos[i]);
                puntoCercano = puntos[i];
            }
        }
        return puntoCercano;
    }
}