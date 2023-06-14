export class Tienda{
    id_producto!: number;
    precio: string;
    stock: number;
    nombre: string;
    descripcion: string;
    categoria: string;
    imagen: string;

    constructor(precio: string, stock: number, nombre: string, descripcion: string, categoria: string, imagen: string) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}