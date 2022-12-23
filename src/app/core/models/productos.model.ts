export interface Producto {
    nombre: String;
    descripcion: String;
    precio: number;
    descuento: number;
    stock: number;
    img: String;
    idProducto: number;
}
export interface Respuesta {
    mensaje: String;
    productos: Producto[];
}
export interface Productos {
    productos: Producto[];
}
