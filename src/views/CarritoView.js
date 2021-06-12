import {useContext} from 'react'
import {CarritoContext} from "../context/carritoContext"
import {Link} from 'react-router-dom'

export default function CarritoView() {
    let {carrito} = useContext(CarritoContext)
    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-bag me-3"></i>Carrito de compras
                </h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((producto, i)=>(
                <tr key={i}>
                    <td> {producto.nombre}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.precio*producto.cantidad}</td>
                </tr>
            ))}
                </tbody>
            </table>
            <Link className="btn btn-dark" to='/comprar'>Comprar</Link>
        </div>
    )
}
