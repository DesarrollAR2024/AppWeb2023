export class Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  stock: number;
  precio: string;
  categoria: string;

  constructor(nombre: string, descripcion: string, imagen: string, stock: number, precio: string, categoria: string) {
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.imagen = imagen;
  this.stock = stock;
  this.precio = precio;
  this.categoria = categoria;
  }
}