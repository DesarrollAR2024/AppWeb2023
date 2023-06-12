export class Tienda{
    id?: number;
    precio: string;
    stock: number;
    nombre: string;
    descripcion: string;
    proveedor: string;
    categoria: string;

    constructor(precio: string, stock: number, nombre: string, descripcion: string, proveedor: string, categoria: string) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.proveedor = proveedor;
        this.categoria = categoria;
    }
}