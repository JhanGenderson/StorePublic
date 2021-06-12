import React,{useState, useEffect} from 'react'
import {obtenerProductos} from '../services/productoService'
import GroupProducts from "../components/GroupProducts"
import Header from '../components/Header'

export default function PortadaView() {
    const [productos, setProductos] = useState([])

    const getProductos = async () =>{
        let productosObtenidos = await obtenerProductos()
        setProductos(productosObtenidos)
    }

    useEffect(()=>{
        getProductos()
    },[])
    return (
        <div>
            <Header/>
            <GroupProducts 
            productos={productos} 
            categoria ="Moda Casual" 
            id_categoria="1"
            setProductos={setProductos}
            />
            <GroupProducts 
            productos={productos} 
            categoria ="Random" 
            id_categoria="2"
            setProductos={setProductos}
            />
        </div>
    )
}
