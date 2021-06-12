import { useState, useEffect, Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductosPorId } from "../services/productoService";
import Loading from "../components/Loading";
import { CarritoContext } from "../context/carritoContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function ProductoView() {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const history = useHistory();

  let { id } = useParams(); //me da un objeto con todos los parámetros
  let { anadirProducto } = useContext(CarritoContext);
  // Indico que voy a obtener el context

  const anadirACarrito = () => {
    anadirProducto({ ...producto });
    Swal.fire({
      icon: "success",
      title: "Producto añadido",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Seguir comprando",
      denyButtonText: "Ir a carrito",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        history.push("/");
      } else if (resultado.isDenied) {
        history.push("/carrito");
      }
    });
  };

  const getProducto = async () => {
    try {
      let productoObtenido = await obtenerProductosPorId(id);
      setProducto({ ...productoObtenido });
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <Fragment>
      {cargando ? (
        <Loading />
      ) : (
        <div>
          <div className="titulo-detalle">
            <div className="container p-4 text-center">
              <h2 className="fw-bold">{producto.nombre}</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={producto.fotos[0]}
                  alt={`foto de ${producto.nombre}`}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                <h5 className="fw-bold">Colores:</h5>
                <div className="d-flex mb-3">
                  {producto.colores.map((item, i) => (
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: item,
                        border: "1px solid gray",
                        marginRight: "5px",
                      }}
                      key={i}
                    />
                  ))}
                </div>
                <h5 className="fw-bold">Descripción:</h5>
                <p>{producto.descripcion}</p>
                <hr />
                <div className="py-3 d-flex justify-content-between align-items-center">
                  <span className="fw-bold" style={{ fontSize: "32px" }}>
                    S/ {producto.precio}
                  </span>
                  <button
                    className="btn btn-dark btn-lg"
                    onClick={anadirACarrito}
                  >
                    Añadir a Carrito
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
